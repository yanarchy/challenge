//Aws Ahmed

# Overall Comments
Great job, Aws! I'm really proud of you :)
Work on indenting properly and having good coding style.
You should be very proud of yourself!
-yf

Functions Completed: 6/6

## billTotal
Nice and easy to read. Would like to see you use the constants that you wrote though.

## animalNoise
Good. Doesn't compare against animal though (even though it shows up in the output). The ending bracket } should go on the next line.

## digitalSum
Good use of iterative method.

## fib
So close! Off by just one in the algorithm.

## fizzBuzzTwo
Good.

## factorial
Good.

## Overall Score: 5

Scores are out of 5.
1 = Please come speak with an instructor.
2 = Needs improvement
3 = Acceptable
4 = Pretty good!
5 = Fantastic

```js
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
```
