// FAMILY

/* TODO:

  Use JS to represent 2 people in your family. Please include the below:
  - Name
  - Relationship to you
  - Age
  - Occupation

*/

var first = {
		name: "Samer",
		RelationshipToYou: "brother",
		Age: 26,
		occupation : "student"
}; 

var second = {
		name: "Marwa",
		RRelationshipToYou: "mother",
		Age: 54,
		occupation: "mother"
}; 
var family = [first , second]

// Here is something to start with

// RANGE

function range (start, end) {
if (start < end) {
   var array = [];
	for (var i = start ; i<= end ; i++){
		array.push(i);

	}
	return array;
}
else 
	return range (end,start)
}



range(0, 4); // => [0, 1, 2, 3]
range(2, 7); // => [2, 3, 4, 5, 6]
range(10, 10); // => []
range(10, 2); // => []

// LAST

function last (arr) {
	var index = arr.length - 1;
	return arr[index];
 
}

// ADD ONE

function addOne (arr) {
	var newA = [];
	for(var n = 0 ; n < arr.length ; n++){
		newA[n]= arr[n] + 1;
	}
	return newA;
}
