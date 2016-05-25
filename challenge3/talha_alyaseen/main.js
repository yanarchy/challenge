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

function wordLengths(string){
  var acc=[];
  var words =string.split(" ");
  each(words,function(element,i){
    acc.push(element[i].length);
  });

return acc;
}
function wordLengthsMap(string){
  var words=string.split(" ");
  return map(words,function (element){
    return element.length;

        
  });

}
function wordsLongerThanThree(string){
  var word=string.split(" ");
    return filter(word,function(element){
         return (element.length>3);
        
      });
           

};
function concat(array1,array2){
  return reduce(array2,function (acc,element,i){
          acc.push(element);
          return acc;
  },array1);
  return newArray;
}


