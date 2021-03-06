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
function wordLengths(str) {
    var arrayOfString=str.split(" ");
    var result=[];
    each(arrayOfString, function (element,index) {
        result.push(element.length);
    });
    return result;
}
function wordLengthsMap(str) {
    var arrayOfString=str.split(" ")
    return map(arrayOfString, function (element,index) {
              return element=element.length; 
    });
}

function wordsLongerThanThree(str){
    var arrayOfString=str.split(" ");
    var result=[];
    return filter(arrayOfString,function (element) {
      return element.length > 3;
    })
}





function concat(first,sec) {
     if(sec.length ===0){
      return first
     }
     each(sec,function(element,index){
      first.push(element);
     });
     return first;
}


























