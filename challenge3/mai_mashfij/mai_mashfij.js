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

function wordLengths(str){
	var arr =[];
	var newArr =str.split(" ");

	    each(arr, function(arr, i){

	arr.push(newArr[i].length);		
	});
	return arr;
	 
}



function wordlengths2(str){
	var arr= [];
	map (array, function(arr){
		arr.push(str.length);

	})
	return arr;
}



function wordsLongerThanThree (str){
	return filter(str,function(word){
		return word.str.length > 3;
	});

}


function concat(A1, A2){
    reduce(A1, function(acc, A2 ){
    	acc = A1.push(A2);
    	return acc;
    })
}