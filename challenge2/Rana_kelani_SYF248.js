// FAMILY

/* TODO:

  Use JS to represent 2 people in your family. Please include the below:
  - Name
  - Relationship to you
  - Age
  - Occupation

*/

var family = [1,2]; 
family[0]={
  name: "Najlaa",
  Relationship: "Mother",
  Age: 49,
  Occupation:"Housewife"
};
family[1]={
  name: "Salma",
  Relationship: "Sister",
  Age: 31,
  Occupation:"Student"
};
// Here is something to start with

// RANGE

function range (start, end) {
  var result=[];
  for(i=start; i<=end; i++){
    if(start===end){
      return result;
    }
      result.push(i);

  }
  return result;
}

range(0, 4); // => [0, 1, 2, 3]
range(2, 7); // => [2, 3, 4, 5, 6]
range(10, 10); // => []
range(10, 2); // => []

function last(array){
  var result; 
  return result=array[array.length-1];

}

function addOne(array){
  var result= [];
  for(i=0; i<array.length; i++){
    result.push(array[i]+1);
  }
  return result;
}

// BUCKET OF SLOTHS
var bucketOfSloths = [
  {name: {first: "Furry", middle: "Danger", last: "Assassin"}, age: 2},
  {name: {first: "Slow", last: "Pumpkin"}, age: 3},
  {name: {first: "Bullet", middle: "Proof", last: "Sloth"}, age: 4},
  {name: {first: "Boos", middle: "Boos", last: "Bun"}, age: 5},
  {name: {first: "Jungle", last: "Fuzz"}, age: 2}
];

// function longestName(array) {
//   var result={};
//   for(i=0; i<array.length; i++){
//     for(var key in array[i]){
//       if(array[i][first]+array[i][last]>result){
//         result=array[i];
//       }
//     }
//   return result;

//   }
// }

// longestName(bucketOfSloths);
// => {name: {first: "Furry", middle: "Danger", last: "Assassin"}, age: 2}
