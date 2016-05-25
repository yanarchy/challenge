function each(array, func) {
  for (var i = 0; i < array.length; i++) {
    func(array[i], i);
  }
}

function reduce(array, func, start) {
  var acc = start;
  each(array, function(element, i) {
    acc = func(acc, element, i);
  });
  return acc;
}

function filter(array, predicate) {
  var acc = [];
  each(array, function(element, i) {
    if (predicate(element, i)) {
      acc.push(element);
    }
  });
  return acc;
}

function map(array, func) {
  var acc = [];
  each(array, function(element, i) {
    acc.push(func(element, i));
  });
  return acc;
}



function wordLengths(string) {
  var acc = [];
  var words = string.split(" ");
  each(words,function(wrd){

    acc.push(wrd.length);
  })

  return acc;
}
function map(array, func) {
  var acc = [];
  each(array, function(element, i) {
    acc.push(func(element, i));
  });
  return acc;
}


function wordLengthsMap(string) {
  var acc = [];
  var words = string.split(" ");
  // console.log(words);
return map (words,function(wrd){
  return wrd.length;
 
})
  
}

function filter(array, predicate) {
  var acc = [];
  each(array, function(element, i) {
    if (predicate(element, i)) {
      acc.push(element);
    }
  });
  return acc;
}

function wordsLongerThanThree(strings){
   
    var words = strings.split(" ");
return filter(words,function(wrd){
   return wrd.length > 3;

});

}

function reduce(array, func, start) {
  var acc = start;
  each(array, function(element, i) {
    acc = func(acc, element, i);
  });
  return acc;
}

function concat(arr1, arr2) {
  var arr=[];

  return reduce (arr2,function(arr.elem,i){

    arr=arr1.push(arr1[i]);
      

  },arr1);
return arr;

}



