// FAMILY

/* TODO:

  Use JS to represent 2 people in your family. Please include the below:
  - Name
  - Relationship to you
  - Age
  - Occupation

*/

var family1 = {Name: "Taha",
			 Relationship: "mother",
			 Age: 50, 
			 Occupation: "house wife" }
var family2 = {Name: "Alkhawaldeh",
			 Relationship: "father",
			 Age: 60, 
			 Occupation: "Manager" }



var family = [family1, family2]; // Here is something to start with

// RANGE

function range (start, end) {
  var x=[];
  if (start===end) {return x;}
  for (var i = start; i <= end; i++) {
  	x.push(i);
  };
  return x;
}

range(0, 4); // => [0, 1, 2, 3]
range(2, 7); // => [2, 3, 4, 5, 6]
range(10, 10); // => []
range(10, 2); // => []

// LAST

function last (arr) {
return arr[arr.length-1];
}

// ADD ONE

function addOne (arr) {
	// define a new array to keep the original arr saved
	var newArr=[];
for (var i = 0; i <= arr.length-1; i++) {
	newArr[i]= arr[i]+1;
};
return newArr;
}
