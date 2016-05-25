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
 each(words,function (word,i){
 	acc.push(word.length);
 })
  
  return acc;
}

function wordLengthsmap(string) {
  var acc = [];
  var words = string.split(" ");
 return  map(words,function (word,i){
 	return word.length;
 })
  
}
function wordsLongerThanThree(string){
	 var acc = [];
  var words = string.split(" ");
  return filter(words,function (word,i){
  	return (word.length>3);
  });  
};
function concat(arr1, arr2) {
 reduce(arr2,function (st,ele){
st=ele;
arr1.push(st);
 return st;
 },0);
 return arr1;
};


