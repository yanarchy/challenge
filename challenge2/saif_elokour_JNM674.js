// FAMILY

/* TODO:

  Use JS to represent 2 people in your family. Please include the below:
  - Name
  - Relationship to you
  - Age
  - Occupation

*/

var family = [{
	Name: "Mohammad",
	Relationship: "Brother",
	Age: 19,
	Occupation: "Student"
}, {
	ame: "Ahmad",
	Relationship: "Brother",
	Age: 8,
	Occupation: "Student"
}]; // Here is something to start with

// RANGE

function range (start, end) {
  var array = [];
  while(start<end){
  	array.push(start)
  	start++;
  }
  return array;
}

range(0, 4); // => [0, 1, 2, 3]
range(2, 7); // => [2, 3, 4, 5, 6]
range(10, 10); // => []
range(10, 2); // => []

// LAST

function last (arr) {
  return arr[arr.length - 1];
}

// ADD ONE

function addOne (arr) {
  var count = 0;
  while(count<arr.length){
  	arr[count] = arr[count] + 1;
  	count++;
  }
  return arr;
}
