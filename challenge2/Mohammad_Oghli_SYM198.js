// FAMILY

/* TODO:

  Use JS to represent 2 people in your family. Please include the below:
  - Name
  - Relationship to you
  - Age
  - Occupation

*/

var member1 = {
name: "Ahmad",
RelationshipToyou: "Father",
Age: 55,
Occupation: "Engineer assistant"
};
var member2 = {
name: "Khaled",
RelationshipToyou: "Brother",
Age: 16,
Occupation: "Student"
};
var member3 = {
name: "Bayan",
RelationshipToyou: "Sister",
Age: 14,
Occupation: "Student"
};

var member4 = {
name: "Hanaa",
RelationshipToyou: "Mother",
Age: 48,
Occupation: "Teacher"
};


var family = []; // Here is something to start with

family[0]=member1;
family[1]=member2;
family[2]=member3;
family[3]=member4;


// RANGE

function range (start, end) {
  var numbers=[];
  var num=start;
  if(start > end || end===start){
  	return numbers;
  }
  else {
  for(var i=0 ; i < (end-start) ; i++){
       numbers[i]=num;
       num++;
  }
  return numbers;
 }
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
	var addarr=[];
  for(var i=0 ;i<arr.length ; i++){
      addarr[i]=arr[i]+1;
  }
  return addarr;
}
