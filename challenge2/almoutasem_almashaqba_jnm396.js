// FAMILY

familyMember01 = {
  Name:"Noura",
  Relationship:"Mother",
  Age:42,
  Occupation:"House Wife"
};


familyMember02 = {
  Name:"Ziad",
  Relationship:"Father",
  Age:51,
    Occupation:"Professor"

};
/* TODO:

  Use JS to represent 2 people in your family. Please include the below:
  - Name
  - Relationship to you
  - Age
  - Occupation

*/

var family = [familyMember01,familyMember02]; // Here is something to start with
  
// RANGE

function range(start,end){
  var array = [];

  if(start>=end){
    return array;
  } else {

            for (var i=start;i<end;i++){
                array.push(i);
            }
            
            return array;
        }     
}


function last(array){

  return array[array.length-1];
}

function addOne(array) {

  for(var i = 0 ; i < array.length ; i++) {
    array[i] = array[i]+1;
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
  // TODO: Your code here
  var strArray=[];
  var str= bucketOfSloths[0]['name']['first'] + bucketOfSloths[0]['name']['middle'] + bucketOfSloths[0]['name']['last'];

    for(var i=1 ; i<bucketOfSloths.length;i++) {

        strArray.push(bucketOfSloths[i]['name']['first'] +" " + bucketOfSloths[i]['name']['middle'] +" "+ bucketOfSloths[i]['name']['last']);
    }

    var testLong = strArray[0];

    for(var j = 1; j < strArray.length;j++) {
      
      if(testLong.length <= strArray[j].length){
        testLong = strArray[j];
      }
    }
   
  return testLong;
}

longestName(bucketOfSloths);
// => {name: {first: "Furry", middle: "Danger", last: "Assassin"}, age: 2}
