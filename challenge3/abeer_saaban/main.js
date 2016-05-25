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
  each(words,function(elem,index){
  			  acc.push(elem.length);	
  										}); 
    
  
  return acc;
}


function wordLengthsMap(str){
	var word = str.split(" ");
	return map(word,function(elem,index){
					 return elem.length;	
							});
}


function wordsLongerThanThree(stri){
	var sentence = stri.split(" ");
	return filter(sentence,function(s){
							return s.length > 3;
										});

}



function concat(arr1,arr2){
	return reduce(arr2, function(elem){
							arr1.push(elem);
										}, arr1);
		 
}



function concat2(arr1,arr2){
	
	each(arr2 , function(eleme){
		arr1.push(eleme);
	});
		
	return arr1;
}

function concat3(arr1,arr2){
	for(var i=0 ; i<arr2.length ; i++){
		arr1.push(arr2[i]);
	}
	return arr1;
}

