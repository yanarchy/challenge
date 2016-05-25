// FAMILY

/* TODO:

  Use JS to represent 2 people in your family. Please include the below:
  - Name
  - Relationship to you
  - Age
  - Occupation

*/

var family = [
{Name:{firstname:"nadia",lastname:"nakawa"},Relationship:"mother",Age:55,Occupation:"mam"},
{Name:{firstname:"abdalhameed",lastname:"alsayed"},Relationship:"father",Age:60,Occupation:"merchant"}
]; // Here is something to start with

// RANGE

function range (start, end) {
  // TODO: YOUR CODE HERE
  var array=[];
  var counter=start;

   for(var i=0;i<end;i++){
   	  if(counter<end){
  	 array.push(counter);
  	 counter++;
  	}
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
  var i=arr.length-1;
  return arr[i];
}

// ADD ONE

function addOne (arr) {
  // TODO: YOUR CODE HERE
  var result=[];
  for(var i=0;i<arr.length;i++){

  	result[i]=arr[i]+1;
  
  }
  return result;
}
