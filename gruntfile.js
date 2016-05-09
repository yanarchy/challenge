module.exports = function (grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    jasmine : {
       src : 'students/*.js',
       options: {
         summary: true,
         helpers : 'node_modules',
         specs : 'specs/challenge.js'
       }
     },

    clean: ['results/*-build.js']
  });

  grunt.task.registerTask('test', 'for each file, run test and create separate SpecRunner', function () {
    var tasks = [];
    var studentFiles = grunt.option('src') || ['students/*.js'];

    grunt.file.expand(studentFiles).forEach(function (file) {
      var pathArray = file.split(/[//]+/); // students
      var fileName = pathArray.slice(-1)[0]; // file name
      var taskName = fileName.replace('.js', '');

      // set up browserify to build test spec
      var browserify = grunt.config.get('browserify') || {};
      browserify[taskName] = {
        src: [file, 'specs/challenge.js'],
        dest: 'results/' + taskName + '-build.js'
      };
      grunt.config.set('browserify', browserify);
      tasks.push('browserify:' + taskName);

      // set up Jasmine to run test spec
      var jasmine = grunt.config.get('jasmine') || {};
      jasmine[taskName] = {
        src: file,
        options: {
          specs: 'results/' + taskName + '-build.js',
          outfile: 'results/' + taskName + '.html',
          keepRunner: true,
          summary: true
        }
      };
      grunt.config.set('jasmine', jasmine);
      tasks.push('jasmine:' + taskName);
    });
    tasks.push('clean');
    grunt.task.run(tasks);
  });

  // grunt.task.registerTask('test', 'for each file, run test and create separate SpecRunner', function () {
  //   var tasks = [];
  //   var studentFiles = grunt.option('src') || ['students/*.js'];
  //
  //   grunt.file.expand(studentFiles).forEach(function (file) {
  //     var pathArray = file.split(/[//]+/); // students
  //     var fileName = pathArray.slice(-1)[0]; // file name
  //     var taskName = fileName.replace('.js', '');
  //
  //     // set up browserify to build test spec
  //     var browserify = grunt.config.get('browserify') || {};
  //     browserify[taskName] = {
  //       src: [file, 'specs/challenge.js'],
  //       dest: 'results/' + taskName + '-build.js'
  //     };
  //     grunt.config.set('browserify', browserify);
  //     tasks.push('browserify:' + taskName);
  //
  //     // set up Jasmine to run test spec
  //     var mocha = grunt.config.get('mocha') || {};
  //     mocha[taskName] = {
  //       test: {
  //         src: file,
  //         options: {
  //           run: true
  //         }
  //       }
  //       // src: file,
  //       // options: {
  //       //   specs: 'results/' + taskName + '-build.js',
  //       //   outfile: 'results/' + taskName + '.html',
  //       //   keepRunner: true,
  //       //   summary: true
  //       // }
  //     };
  //     grunt.config.set('mocha', mocha);
  //     tasks.push('mocha:' + taskName);
  //   });
  //   tasks.push('clean');
  //   grunt.task.run(tasks);
  // });

  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-contrib-jasmine');
  grunt.loadNpmTasks('grunt-mocha');
};
