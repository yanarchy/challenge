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

function wordLengths(string){
  var arr = string.split(" ");
  var newArr = [];
    each(arr,function(element,i){
      newArr.push(element.length);
    });
    return newArr;
}

function wordLengthsMap(string){
    var arr = string.split(" ");
     return map(arr,function(element,i){
       return element.length;
      });
}

function wordsLongerThanThree(string){
   var arr = string.split(" ");
      return filter(arr,function(element,i){
        if(element.length>3){
          return element;
        }
      });
}

function concat(arr1,arr2){
  return reduce(arr2,function(arr1,element,i){
   arr1.push(element);
   return arr1; 
  },arr1);
}