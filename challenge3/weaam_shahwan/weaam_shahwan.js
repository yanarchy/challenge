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
  for (var i = 0; i < words.length; i++) {
    acc.push(words[i].length);
  }
  return acc;
}


var wordLengthsUsingEach =function(string1){
	 var acc1 = [];
	 var wordss = string1.split(" ");
	 each(wordss,function(wordss,i){
	 	acc1.push(wordss.length);
	 });
	 return acc1;
}




var wordLengthsMap=function(string3){
	var wordsss = string3.split(" ");
	return map(wordsss,function(wordsss){
		if(typeof(wordsss)==="string")
		return wordsss.length;
	});
}




var wordsLongerThanThree=function(coll){
	var coll = coll.split(" ");
	return filter(coll,function(elements){
		typeof(elements)==="string"
		return(elements.length>3);
	});

}




function concat(arr1, arr2) {
return reduce
  
}


img.src = 'https://pbs.twimg.com/media/CdU2GyzVIAAVtd0.jpg';






