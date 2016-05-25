// Remember to relax, take short walks if needed, 
// and throw garbage at Pavel (if it helps you relax)

// Use these functions in your exercises.
function each(array, func) {
  for (var i = 0; i < array.length; i++) {
    func(array[i], i);
  }
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


function wordLengthseach (str) {
var strarr=str.split(" ");
console.log(strarr);
var arr=[];
 each(strarr,function(element,index){
     arr.push(element.length);
});
return arr;
}

function wordLengthsMap (str) {
var strarr=str.split(" ");
return map (strarr,function(element,i){
  return element.length;
});
  
}


function wordsLongerThanThree (str) {
var strarr=str.split(" ");
return filter (strarr,function(element){
   if (element.length > 3){
    return true;
   }else{
    return false;
   }


});

}

function reduce(array, func, start) {
  var acc = start;
  //console.log(acc),
  each(array, function(element, i) {
    acc = func(acc, element, i);
  });
  return acc;
}

function concat(arr1, arr2) {
  //var arr=[];
 reduce(arr2, function(arr,element,i){
  return arr1.push(element)
},arr1)
return arr1;
}

function concat1(arr1, arr2) {
  var arr=[];
 arr=reduce(arr2, function(arr,element,i){
  return arr1.push(element)
},arr1)
return arr;
}



/*function concat(arr1, arr2) {
  //var arr=[];
return reduce(arr2, function(element){
  return arr1.push(element)
},arr2[0])

}*/