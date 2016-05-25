var family = []
 var member1={
		name : "lama",
		relation : "sister",
		age : 28
	}
	var member2 = {
		name : "wael",
		relation : "brother",
		age : 26 
	}
	function members (name , relation , age){
		var member = {
			name : name,
			relation : relation , 
			age : age
		}
	

family.push(member) 
return family ; }




// RANGE

function range (start, end) {
	var c=[];
	for(i=start ; i<end ; i++)
		c.push(i)
 return c;
}

range(0, 4); // => [0, 1, 2, 3]
range(2, 7); // => [2, 3, 4, 5, 6]
range(10, 10); // => []
range(10, 2); // => []

// BUCKET OF SLOTHS

var bucketOfSloths = [
  {name: {first: "Furry", middle: "Danger", last: "Assassin"}, age: 2},
  {name: {first: "Slow", last: "Pumpkin"}, age: 3},
  {name: {first: "Bullet", middle: "Proof", last: "Sloth"}, age: 4},
  {name: {first: "Boos", middle: "Boos", last: "Bun"}, age: 5},
  {name: {first: "Jungle", last: "Fuzz"}, age: 2}
];

function longestName(bucketOfSloths) {
  // TODO: Your code here
}

longestName(bucketOfSloths);
// => {name: {first: "Furry", middle: "Danger", last: "Assassin"}, age: 2}


//last 

function last(array) {
	var x = array.pop(array.length-1)
	return x ;

}


function addOne(array) {
	var x =[] 

	for (var i = 0 ; i< array.length; i++) {
		
		x.push(array[i] + 1) ;

	}
	return x ; 
}