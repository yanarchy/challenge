var family={
	name:"sameha",
	name1:"ghassan",
    relationshiptome:"parents",
     age:50
};

/* TODO:

  Use JS to represent 2 people in your family. Please include the below:
  - Name
  - Relationship to you
  - Age
  - Occupation

*/
// RANGE

function range (start, end) {
	var arr=[];
  if(start===start || end>start){
  	return start;
  		 i=start+1
  		 
  		}
  		arr.push(i);
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
for(var i=0;i<arr.length;i++){
   arr[i]=arr[i]+1;
 } 
 return arr;
}