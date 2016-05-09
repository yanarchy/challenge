// Aws Ahmed
​
​
function billTotal(subtotal) {
  // TODO: your code here
  var tip = (subtotal *20)/100;
  var tax = (subtotal*8)/100;
  return (subtotal + tip + tax);
}
​
​
​
function animalNoise(animal, emotion) {
  // TODO: your code here
  if (emotion === "angry"){
  	return "There is something affect the  " + animal + " very bad.";}
​
  else if (emotion === "happy"){
  	return "There is something affect the  " + animal + " very good :)";}
​
  else if (emotion === "sad"){
  	return "There is something affect the  " + animal + " very bad that makes him sad :(";}
​
  else if (emotion === "surprised"){
  	return "There is something affect the  " + animal + " that makes him surprized";}
​
}
​
​
​
​
​
function digitalSum(n) {
  // TODO: your code here
	n=n.toString();
	var result=0;
	for (var i=0; i< n.length; i++){
  	result = result + (+n[i]);
  }
  return result;
}
​
​
​
​
​
​
function fib(n) {
  // TODO: your code here
  if (n === 0) {return 1;}
  if (n===1) {return 1;}
  return fib(n-1)+ fib(n-2);
}
​
​
​
​
​
​
function fizzBuzzTwo(wordA, wordB) {
  // TODO: your code here
for (var i=1; i<=100; i++ ){
	// if the number is divided by 3 and 5
	if (i%3===0 && i%5===0)
		{console.log(wordA+" "+ wordB);}
	else if (i%3 ===0)
		{ console.log (wordA);}
	else if (i%5 === 0)
		{console.log(wordB)}
	else console.log(i);}
}
​
​
​
​
​
​
function factorial(n) {
  // TODO: your code here
  if (n===0){return 1}
  	return n* factorial(n-1);
}
​
​
