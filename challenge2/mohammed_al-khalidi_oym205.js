//Mohammed Al-Khalidi

var family = [
{ name: "Nadeen", Relationship: " myFiancee", Age: 23, fieldStady: "international Accounting "},
{ name: "Waleed", Relationship: "Cousion", Age: 25, fieldStady: "General Medicine"},
]; 


function range (start, end) {
  var myArray = [];
  if (start<end ){
    for (var i = start; i <= end; i ++) {
      myArray.push(i);
    }
  }else if (start >end){
      for (var i =start; i >= end; i--) {
          myArray.push(i);
      }
        
   }
   return myArray;
}

var last=function(array){
  var x= array.length ;
return array[x-1];
}

var addOne=function(array2){
var newArray1=[];
  for (var i=0 ;i<array2.length;i++){
      newArray1.push(array2[i]+1);
  }
return newArray1;
}