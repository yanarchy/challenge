// FAMILY

/* TODO:

  Use JS to represent 2 people in your family. Please include the below:
  - Name
  - Relationship to you
  - Age
  - Occupation

*/

var family = ["Talha","abdullah","moath",26,"student"]; // Here is something to start with

// RANGE

function range (start, end) {
  var newarray=[];
  for(var i= start;i<end;i++)
    newarray.push(i);
  return newarray;
};

range(0, 4); // => [0, 1, 2, 3]
range(2, 7); // => [2, 3, 4, 5, 6]
range(10, 10); // => []
range(10, 2); // => []

// BUCKET OF SLOTHS
function last(array){
  var newarray=[];
  var count =array.length-1;
  for(var i=count; i>=0;i--)
       return newarray=array.pop(i);

};
var numbers =[1,2,3,4];
function addOne(array){
  var newarray=[];
  for(var i=0;i<array.length;i++){
        newarray.push(array[i]+1);
  }
  return newarray;
}; 