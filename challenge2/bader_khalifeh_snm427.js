// Name: Bader Aldeen Khalifeh
// ID: SNM427

// FAMILY

/* TODO:

  Use JS to represent 2 people in your family. Please include the below:
  - Name
  - Relationship to you
  - Age
  - Occupation

*/

function makeMember(name, relationship, age, occupation){
	return {
		name : name,
		relationship : relationship,
		age : age,
		occupation : occupation
	}
}

var member1 = makeMember("Basel", "Father", 54, "Architectural Engineer");
var member2 = makeMember("Nariman", "Mother", 43, "Mother");
var member3 = makeMember("Diyaa", "Brother", 19, "Student");

var family = [member1, member2, member3]; // Here is something to start with

// RANGE

function range (start, end) {
  var array = [];
  for(var i=start; i<end; i++){
  	array.push(i);
  }
	return array;
}

range(0, 4); // => [0, 1, 2, 3]
range(2, 7); // => [2, 3, 4, 5, 6]
range(10, 10); // => []
range(10, 2); // => []

// LAST

function last (arr) {
  // TODO: YOUR CODE HERE
  return arr[arr.length -1];
}

// ADD ONE

function addOne (arr) {
	var array = [];
  	for(var i=0; i<arr.length; i++){
  		array.push(arr[i]+1);
  	}
  	return array;
}
