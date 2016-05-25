// FAMILY

/* TODO:

  Use JS to represent 2 people in your family. Please include the below:
  - Name
  - Relationship to you
  - Age
  - Occupation

*/
function makeFamily (name, relationship, age, occupation) { // factory function
	return {
		name: name,
		relationship: relationship,
		age: age,
		occupation: occupation
	};
}
var family = []; // Here is something to start with
family.push (makeFamily ("Haneen", "Wife", 26, "Architect"));
family.push (makeFamily ("Maysoon", "Mother", 52, "Biologist"));
family.push (makeFamily ("Zuhier", "Father", 61, "Mechanical Engineer"));
//adds family member object to end of array
// RANGE

function range (start, end) {
	var returnArray = []; // create array 

	for (var i=start; i<end; i++) {
		returnArray.push(i); //add counter to end of array
	}
	return returnArray;
}


range(0, 4); // => [0, 1, 2, 3]
range(2, 7); // => [2, 3, 4, 5, 6]
range(10, 10); // => []
range(10, 2); // => []

// LAST

function last (arr) {
	return arr [arr.length - 1]; //last index in array = length of array - 1
}

// ADD ONE

function addOne (arr) {
  // TODO: YOUR CODE HERE
  for (var key in arr) { //just to try :P
  	arr [key] = arr [key] + 1;
  }
  return arr;
}
