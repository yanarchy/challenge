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

function wordLengths(string) {
    var acc = [];
    each(string.split(" "), function(element, i) {
    acc.push(element.length);  
   });
  return acc;
}

function wordLengthsMap (string) {

return map(string.split(" "),function(element){
	return element.length;
 });

}

function wordsLongerThanThree(string){
	return filter(string.split(" "),function(element){
    return element.length > 3 ;
	});
}


function concat2(arr1, arr2) {		

 return reduce (arr2,function(arr2,num){
       arr1.push(num);
       return arr1;  
              
 },[]);
 
}
