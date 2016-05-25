// FAMILY

/* TODO:

  Use JS to represent 2 people in your family. Please include the below:
  - Name
  - Relationship to you
  - Age
  - Occupation

*/
function makeFamiy(name , Relationship , age,  occupation) {
	return {
	name : name,
	relationship : Relationship , 
	age : age,
	occupation : occupation
	}
}

var Mom = makeFamiy("Safa" , "Mother" , 53 , "HouseWife")
var Brother = makeFamiy("Yahya" , "Brorher" , 30 , "Trader")

var family = [Mom , Brother]; // Here is something to start with


// RANGE

function range (start, end) {
  // TODO: YOUR CODE HERE
  var result = []

  for( i = start ; i < end ; i++ ){
  	result.push(i)
  }

  return result 
}

// console.log(range(0, 4)) // => [0, 1, 2, 3]
// console.log(range(2, 7)) // => [2, 3, 4, 5, 6]
// console.log(range(10, 10)) // => []
// console.log(range(10, 2)) // => []

// LAST

function last (arr) {
  // TODO: YOUR CODE HERE
  return  arr[arr.length-1]
}

// ADD ONE

function addOne (array) {
  
  for(var i = 0 ; i < array.length ; i++){
  	array[i] = array[i] + 1 
  }

  return array
}










