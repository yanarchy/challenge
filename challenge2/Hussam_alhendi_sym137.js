// FAMILY

/* TODO:

  Use JS to represent 2 people in your family. Please include the below:
  - Name
  - Relationship to you
  - Age
  - Occupation

*/

var family = []; // Here is something to start with
family.push({name: "hassan", relationship: "father", age: 56, Occupation: "busniss man"})
family.push({name: "lina", relationship: "mother", age: 44, Occupation: "mother"})


// RANGE

function range (start, end) {
	var range = [];
  for (var i = start; i < end; i++){
  		range.push(i);
  }
  return range;
}

range(0, 4); // => [0, 1, 2, 3]
range(2, 7); // => [2, 3, 4, 5, 6]
range(10, 10); // => []
range(10, 2); // => []

// LAST

function last (arr) {
  return arr[arr.length-1]
}

// ADD ONE

function addOne (arr) {
  for(var i = 0; i < arr.length; i++){
  	arr[i]= arr[i] + 1;
  }
  return arr;
}
