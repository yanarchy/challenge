// FAMILY

/* TODO:

  Use JS to represent 2 people in your family. Please include the below:
  - Name
  - Relationship to you
  - Age
  - Occupation

*/

var family = [
{name: "kasem" , relationShip:"father" , age :58 , occupation:"retired",},
{name:"Abeer" , relationShip:"mother" , age:49 , occupation:"clearance officer",},
{name:"haya" , relationship:"cousin" , age:34 , occupation :"logistics ofiicer",}]; 

var representFamily = function(array){
	for (var i=0 ; i<array.length ; i++){
		var present = "";
		for (var key in array[i]){
present =array[i];
console.log (present);
		}
}}

// RANGE

function range (start, end) {
 var arr=[];
 if(start>end){arr=[];}
 if(start===end){arr=[]}
 for (var i=start ; i<end ;i++ ){

 arr.push(i);
 }
 return arr;
}

range(0, 4); // => [0, 1, 2, 3]
range(2, 7); // => [2, 3, 4, 5, 6]
range(10, 10); // => []
range(10, 2); // => []

// LAST

function last (arr) {
  for(var i=0 ; i<arr.length+2 ; i++){
  	arr.shift();
  }
  return arr;
}

// ADD ONE

function addOne (arr) {
  for (var i=0 ; i<arr.length ; i++){
  	arr[i]=arr[i]+1;
  }
  return arr;}
