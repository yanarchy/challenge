// FAMILY

/* TODO:

  Use JS to represent 2 people in your family. Please include the below:
  - Name
  - Relationship to you
  - Age
  - Occupation

*/

var family = [{name:"safa",relation:"mother",age:45,occupation:"mother"},
              {name:"aya",relation:"sister",age:19,Occupation:"student"}];
               // Here is something to start with

// RANGE

function range (start, end) {
  var arr=[];
  for(i=start;i<end;i++){
    var x=i;
    arr.push(x);
  }
  return arr;
  
  // TODO: YOUR CODE HERE
}

range(0, 4); // => [0, 1, 2, 3]
range(2, 7); // => [2, 3, 4, 5, 6]
range(10, 10); // => []
range(10, 2); // => []



var num=[1,2,4,6,7];
function last(array){
  var i=0;
  while(i<array.length){
    i=i+1;
    
}
    return array[i];
}

var integer=[2,3,4];
function addOne(array){
  var arr=[];
  for(var i=0;i<array.length;i++){
    array[i]=array[i]+1
    arr.push(array[i])
  }
  return arr;
}