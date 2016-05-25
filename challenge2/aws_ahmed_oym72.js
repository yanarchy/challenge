// FAMILY

/* TODO:

  Use JS to represent 2 people in your family. Please include the below:
  - Name
  - Relationship to you
  - Age
  - Occupation

*/

// 1.

var family = [Aboody, Amoony, Beeboo]; // Here is something to start with

var Aboody = {
  Name: 'Abdelrahaman' ,
  Relationship: 'Son' ,
  Age: 12,
  Occupation: 'Student' 
}


var Amoony = {
  Name: 'Amena' ,
  Relationship: 'Daughter' ,
  Age: 10,
  Occupation: 'Student' 
}

var Beeboo = {
  Name: 'Ibrahim' ,
  Relationship: 'Son' ,
  Age: 5,
  Occupation: 'Student' 
}


// 2.
// RANGE

function range (start, end) {
  numbersArray=[];
  for (start; start< end; start++){
    numbersArray.push(start);
  }
  return numbersArray;
}

range(0, 4); // => [0, 1, 2, 3]
range(2, 7); // => [2, 3, 4, 5, 6]
range(10, 10); // => []
range(10, 2); // => []




// 3. last
function last (array){
  return array[array.length-1];
}




// 4. addOne
function addOne (array){
  newArray = [];
  for (var i=0; i<array.length; i++){
    newArray.push(array[i]+1);
  }
  return newArray;
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
  //var longest = bucketOfSloths[0]
  var fullName = "";
  var arrayOfNames = [];
  var longest="";
  for (var i =0; i<bucketOfSloths.length; i++){
    if (bucketOfSloths[i].name.middle === undefined){
      bucketOfSloths[i].name.middle = "";
    }
    fullName = bucketOfSloths[i].name.first+ " " + bucketOfSloths[i].name.middle + " " + bucketOfSloths[i].name.last;
    arrayOfNames.push(fullName);
  }    
   // for (var j=0; j< arrayOfNames.length){
   //  if 

   // }
  
  return arrayOfNames;
}





longestName(bucketOfSloths);
// => {name: {first: "Furry", middle: "Danger", last: "Assassin"}, age: 2}










