// FAMILY

/* TODO:

  Use JS to represent 2 people in your family. Please include the below:
  - Name
  - Relationship to you
  - Age
  - Occupation

*/

var family = [ {name: "Abdul Aziz", relationship: "father", age: 74, Occupation: "doctor"},
  {name: "Ibtsam", relationship: "mother", age: 54, Occupation: "housewife"},
  {name: "Wassem", relationship: "brother", age: 33, Occupation: "engineer"}
  ]; // Here is something to start with


// RANGE

function range (start, end) {
	var result = [];
	var k=0;
  if (end === start || end<start){
  	return result;
  } else{
  for (var i = start; i<end; i++){
  			
  			result[k]=i;
  				k++;
 		 }
	}
	return result;
}

range(0, 4); // => [0, 1, 2, 3]
range(2, 7); // => [2, 3, 4, 5, 6]
range(10, 10); // => []
range(10, 2); // => []

// LAST

function last (arr) {
  var x = arr.length-1;
  return arr[x];
}

// ADD ONE

function addOne (arr) {
  var newArr=[];
  for (var i=0;i<arr.length;i++){
  	newArr[i]= arr[i]+1;
  }
  return newArr;
}
