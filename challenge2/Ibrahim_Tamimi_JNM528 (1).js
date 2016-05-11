// FAMILY

/* TODO:

  Use JS to represent 2 people in your family. Please include the below:
  - Name
  - Relationship to you
  - Age
  - Occupation

*/

var family = []; // Here is something to start with

function addFamily(_name,_relshp,_age){
		 		
	family.push({
					name        :_name,
					Relationship:_relshp,
					age  		:_age
				});
}
addFamily("ibrahim","me",22);
addFamily("wajdy","father",50);
addFamily("mustafa","brother",45);

// RANGE

function range (start, end) {
   var numbers=[];
   for (var i=start; i<end; i++){
   		numbers.push(i);
   }
   return numbers;
}
/*
range(0, 4); // => [0, 1, 2, 3]
range(2, 7); // => [2, 3, 4, 5, 6]
range(10, 10); // => []
range(10, 2); // => []
*/

//this array just for test or you can send the previous function as parameter
var x=[1,2,3];
// LAST
function last (arr) {
  return arr[arr.length-1];
}

// ADD ONE

function addOne (arr) {
  for(var i=0;i<arr.length;i++){
  	arr[i]++;
  }
  return arr;
}
