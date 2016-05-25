// FAMILY

/* TODO:

  Use JS to represent 2 people in your family. Please include the below:
  - Name
  - Relationship to you
  - Age
  - Occupation

*/

var family = ["Mahmoud Bakkr","brother", 32, "programer in camp al Azraq"]; // Here is something to start with
var family1 = ["Abdul-AlRaheem Bakkar","father",65,"in Jordan nothing"];

// RANGE

function range (start, end) {
  var array = [];
  for(i=0;i<end;i++){
    if(i>start){
     return i = i+1;
    }

  }
}

range(0, 4); // => [0, 1, 2, 3]
range(2, 7); // => [2, 3, 4, 5, 6]
range(10, 10); // => []
range(10, 2); // => []

// BUCKET OF SLOTHS

function last(arr){
  for(i=0;i<arr.length;i++){
    if(i === arr.length-1){
        return arr[i] ;

    }
  }
}

function addOne(arra){
  var array1 = [];
    for(i=0;i<arra.length;i++){
      if(i===arra[i]){
       array1 = arra[i+1];
      }
    }
return array1;
}
