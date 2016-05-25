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

function wordLengths(string) {
  var acc = [];
  var words = string.split(" ");
  each(words, (word, char) => {acc.push(word.length)})
  return acc;
}

var wordLengthsMap = function(string){
  var words = string.split(" ");
  return map(words, (word, char) => {return word.length})
}

var wordsLongerThanThree = function(string){
  var words = string.split(" ");
  return filter(words, (word, char) => {return word.length > 3})
}

var concat = function(array1, array2){
  var arr = array1.slice(0)
  return reduce(array2, (acc, element, i) => {arr.push(array2[i]); return arr}, arr)
}



































