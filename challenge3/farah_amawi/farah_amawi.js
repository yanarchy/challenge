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


// Q1 
function wordLengths(str){
  var string = str.split(" ");
  var arr=[];
  each(string,function(element){
     arr.push(element.length)
  });
    return arr;
}

//***************************************************
//Q2

function wordLengthMap (str){
  string = str.split(" ");
  return map (string,function(element){
    return element.length;
   });
}



//****************************************************
//Q3

function wordsLongerThanThree (str){
  string = str.split(" ");
  return filter(string,function(element){
    return element.length > 3;
  });
}


//*****************************************************
//Q4

// function concat (arr1, arr2){
  
//    each (arr2, function(element){
//        arr1.push(element);
        
//   });
//   return arr1;
  
// }

function concat(arr1, arr2){
 var newArray =[];
 newArray.push(arr1+","+arr2);
  return reduce(arr2,function(element){
     return newArray;    
  },arr1);
}




