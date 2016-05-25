// Remember to relax, take short walks if needed, 
// and throw garbage at Pavel (if it helps you relax)

// Use these functions in your exercises.
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

//Start writing your functions here:

function wordLength(strings){
  var array=strings.split(" ");
  var array1=[];
  each(array,function(element){
    array1.push(element.length);
   });
  return array1;
}


function wordLengthsMap(strings){
  var array=strings.split(" ");
  console.log("array");
  return map(array,function(element,i){
    return element.length;
  });
}

function wordsLongerThanThree(string){
  var array=string.split(" ");
  return filter(array,function(element){
    if(element.length>3){
      return array;
    }
    });
}

function concat(array1,array2){
  return reduce(array2,function(num,i){
    num.push(i);
    return array1;
  },array1);
} 