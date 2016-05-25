// FAMILY

/* TODO:

  Use JS to represent 2 people in your family. Please include the below:
  - Name
  - Relationship to you
  - Age
  - Occupation

*/

var family = [{Name:"nouha",Relationship:"mother",Age:48},
              {Name:"amna",Relationship:"sister",Age:32},
              {Name:"abd",Relationship:"brother",Age:27}];

// RANGE

function range(start, end) {
  var array=[];
  for(var i=start;i<end;i++){
    array.push(i);
  }
  return array;
}

range(0, 4); // => [0, 1, 2, 3]
range(2, 7); // => [2, 3, 4, 5, 6]
range(10, 10); // => []
range(10, 2); // => []

function last(array){
  return array[array.length-1];
}

function addOne(array){
  var newArray=[];
  for(var i=0;i<array.length;i++){
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
  var fullName=[];
  var longestN="";
  var fullNameJoined="";
  var result={};

  for(var i=0;i<bucketOfSloths.length;i++){
    fullName=[];
    for(var key in bucketOfSloths[i]["name"]){
      fullName.push(bucketOfSloths[i]["name"][key]);
   }
      fullNameJoined=fullName.join("");
      if(longestN.length < fullNameJoined.length){
        longestN=fullNameJoined;
        result=bucketOfSloths[i];
     }
  }
  return result;
}

longestName(bucketOfSloths);
// => {name: {first: "Furry", middle: "Danger", last: "Assassin"}, age: 2}
