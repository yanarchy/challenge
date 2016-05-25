// FAMILY

/* TODO:

  Use JS to represent 2 people in your family. Please include the below:
  - Name
  - Relationship to you
  - Age
  - Occupation

*/

var family = [{name : "Hazar",
              Relationship : "Sister",
              age : 27,
              Occupation : "Maried with two childeren and he has own phramacy (he is a Pharmacist)"
              },
              { name : "Fatema",
                Relationship : "Mother",
                age : 50,
                Occupation : "retired teacher and being a mother"
              }]; // Here is something to start with

// RANGE

function range (start, end) {
  // TODO: YOUR CODE HERE
  var newArray=[];
  for(var i=start ; i<end ; i++){
    newArray.push(i);
  }
  return newArray;
}

range(0, 4); // => [0, 1, 2, 3]
range(2, 7); // => [2, 3, 4, 5, 6]
range(10, 10); // => []
range(10, 2); // => []

function last(array){
  var element=array.pop();
  return element;
}

function addOne(arry){
  var newOne=[];
  for(var i=0 ; i<arry.length ; i++){
    newOne.push(arry[i]+1);
  }
  return newOne;
}
