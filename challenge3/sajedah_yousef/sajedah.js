// Remember to relax, take short walks if needed, 
// and throw garbage at Pavel (if it helps you relax)

// Use these functions in your exercises.
function each(array, func) {
  for (var i = 0; i < array.length; i++) {
    func(array[i], i);
  }
}

function reduce(array, func, start) {
  var acc = start;
  each(array, function(element, i) {
    acc = func(acc, element, i);
  });
  return acc;
}

function filter(array, predicate) {
  var acc = [];
  each(array, function(element, i) {
    if (predicate(element, i)) {
      acc.push(element);
    }
  });
  return acc;
}



function map(array, func) {
  var acc = [];
  each(array, function(element, i) {
    acc.push(func(element, i));
  });
  return acc;
}

//Start writing your functions here:


function wordLengths(string) {
  
 var acc =[] ;
 var len=string.split(" ")

each(string , function ( value , index) { 
 

acc.push(len.length);

 })

  return acc;
}




function wordLengthsMap(string) { 
  
var len = string.split(" ")


return map(string, function(value, index) { 
 
return len.length;


})
  
}

string= "sajedah is 22 years old " 


function wordsLongerThanThree(string) { 

return string.length>3 ; 
}

filter(["sajedah" , "Amal" , "Mohammed" , " jo"] , wordsLongerThanThree ) 



arr1=[1,2,3,4]
arr2=[2,3,4,5] 

function concat(arr1, arr2) {

    var result=[] ;
 return reduce(arr1 , function (value , index) { 
var x= arr2[index] + arr1[index] ;

  return result.push(x) ;



 }, 0)

 }


