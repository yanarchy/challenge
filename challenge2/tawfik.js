// FAMILY

/* TODO:

  Use JS to represent 2 people in your family. Please include the below:
  - Name
  - Relationship to you
  - Age
  - Occupation

*/

var family = []; // Here is something to start with

//first way 
var member1 = {
	name : "ansa" ,
	relationship : "brother" ,
	age : 25 ,
	occupation : "chasher" 
}
var member2 = {
	name : "mohamad" ,
	relationship : "brother" ,
	age : 30 ,
	occupation : "sealman" 
}

family.push(member1);
family.push(member2);


//secound way

family = [{ name : "ansa" , relationship : "brother" , age : "25" , occupation : "chasher"},
		  { name : "mohamad" , relationship : "brother" , age : "30" , occupation : "sealman"}
];



// RANGE

function range (start, end) {
  var array =[];
  for(var i=start ; i<end ;i++) {
  	array.push(i);
  }

  return array;
}

range(0, 4); // => [0, 1, 2, 3]
range(2, 7); // => [2, 3, 4, 5, 6]
range(10, 10); // => []
range(10, 2); // => []




function last(array) {
	return array.pop();
}

function addOne(array) {
	for(var i=0;i<array.length;i++) {
		array[i]++;
	}
	return array;
}

// BUCKET OF SLOTHS

var bucketOfSloths = [
  {name: {first: "Furry", middle: "Danger", last: "Assassin"}, age: 2},
  {name: {first: "Slow", last: "Pumpkin"}, age: 3},
  {name: {first: "Bullet", middle: "Proof", last: "Sloth"}, age: 4},
  {name: {first: "Boos", middle: "Boos", last: "Bun"}, age: 5},
  {name: {first: "Jungle", last: "Fuzz"}, age: 2}
];

function longestName(bucketOfSloths) {
  var longestLength=0;
  var x=0;
  var result={};

  for(var i=0;i<bucketOfSloths.length;i++) {
	x=bucketOfSloths[i].name.first.length+bucketOfSloths[i].name.last.length;

	if(bucketOfSloths[i].name.middle )
		x=x+bucketOfSloths[i].name.middle.length;

	if(x>longestLength) {
		longestLength=x;
		result=bucketOfSloths[i];
		//result[name].first=bucketOfSloths[i].name.first;
	}
  }
  return result;

}

longestName(bucketOfSloths);
// => {name: {first: "Furry", middle: "Danger", last: "Assassin"}, age: 2}
