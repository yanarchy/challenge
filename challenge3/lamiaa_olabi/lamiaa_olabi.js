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


var wordLengths = function(str){
	var acc = [];
	var words = str.split(" ");
	each(str, function(element, i){
		acc.push(element.length);
	
	});
	return acc;
};

var wordLengthsMap = function(str){
	return map (array, function(element,i){
		acc.push(element.length);
	});
	return acc;
};

var wordsLongerThanThree = function (str){
	return filter(str.split(" "), function(element,i){
		return element.length > 3;
			
	});
	return acc;

};

var concat = function(array1, array2){
	return reduce((array1, array2), function(element,i){
		return array2 + "," + array2;

	}, 0);
	return acc;
};

