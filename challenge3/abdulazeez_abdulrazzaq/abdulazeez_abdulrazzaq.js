
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


function wordLengths(string) {
  var acc = [];
  var words= string.split(" ");
each(words,function(word){


    acc.push(word.length);
  });
  return acc;
}


function wordsLongerThanThree(string){
  var words =string.split(" "):
  return filter(words ,function (word,i))
    if (word.length >3 ){
      return word;
    }
});
}


function conact (arr1,arr2){
  return reduce (arr2,function (acc,element,i){
    return acc= acc.conact(element);
  },arr1);
  }
}
