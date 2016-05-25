// FAMILY

/* TODO:

  Use JS to represent 2 people in your family. Please include the below:
  - Name
  - Relationship to you
  - Age
  - Occupation

*/

var family = [{name:"Narryman",Relationship:"mom",age:54,Occupation:"Mother"},{name:"Asmaa",Relationship:"sis",age:29,Occupation:"Student"}]; // Here is something to start with

// RANGE

function range (start, end) {
  var array=[];
  for(i=start;i<end;i++){
    array.push(i);
  }
  return array;
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
    var longestName=bucketOfSloths[0].name.first+bucketOfSloths[0].name.middle+bucketOfSloths[0].name.last;
    
    var str="";
    for(var i=1;i<bucketOfSloths.length;i++){
      alert(str)
      if(bucketOfSloths[i].name.middle!=undefined){
        str=bucketOfSloths[i].name.first+bucketOfSloths[i].name.middle+bucketOfSloths[i].name.last;}
        else{
          str=bucketOfSloths[i].name.first+bucketOfSloths[i].name.last;
        }
      if(str.length>longestName.length){
        longestName=str;
      }
    
    return longestName;
}}

longestName(bucketOfSloths);
// => {name: {first: "Furry", middle: "Danger", last: "Assassin"}, age: 2}
//family=[];



function last(array){
  return array[array.length-1];
}

function addOne(array){
  var array1=[];
  for(var i=0;i<array.length;i++){
    array1[i]=array[i]+1;
  }
  return array1;
}

