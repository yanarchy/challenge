// FAMILY

/* TODO:

  Use JS to represent 2 people in your family. Please include the below:
  - Name
  - Relationship to you
  - Age
  - Occupation

*/

var family = [{name:"Latefa",age:55,relationShip:"mother",occupation:"Hosewife",from:"Yemen"},{name:"Adowa'a",age:30,relationShip:"cousine",occupation:"Doctor",frome:"Yemen" },{name:"Afnan",age:12,relationShip:"neice",occupation:"student",from:"Yemen"}]; // Here is something to start with

// RANGE

function range (start, end) {
 var array=[];
 if(start===end||start>end) return [];
 else {for(var i=start;i<=end;i++)

 	array.push(i);}
 	return array;
}

range(0, 4); // => [0, 1, 2, 3]
range(2, 7); // => [2, 3, 4, 5, 6]
range(10, 10); // => []
range(10, 2); // => []

// LAST

function last (arr) {
	var x=arr.length-1;
return arr[x];
}

// ADD ONE

function addOne (arr) {
 var array=[];
 for(var i=0;i<arr.length;i++){
 	array.push(arr[i]+1);}
 return array;
}
