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
  each (words, function (value, index){
    acc.push(words[index].length);
  }) 
  return acc;
}

function wordLengthsMap (string){
	 var words = string.split(" ");
	return  map (words, function(word){
		return word.length;
	 })
}

function wordsLongerThanThree (string){
	var words = string.split(" ");
	return filter (words, function (word){
		return word.length>3;
	})
}

function concat(arr1, arr2) {
  return reduce (arr2, function (acc, element){
  	 acc.push(element)
  	 return acc;
  }, arr1)
}