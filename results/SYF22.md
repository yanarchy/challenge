//Abeer Shaaban

# Overall Comments
File cannot be run because of syntax error(s).
Very close! Keep practicing!

Functions Complete: 5/6

## billTotal
A bit verbose, divides instead of using constants.
Verbose---divides instead of using constants that were declared and assigned.

## animalNoise
Uses very nested if else statements and copy and pasting errors (unreachable code).
The 'else' is incorrectly written.
Would like to have seen the use of logical operators (||, &&).

## digitalSum
Poor. Breaks for 1111. Does not work.

## fib
Did not attempt

## fizzBuzzTwo
Close. Needs to also give correct value for multiples of both 5 and 3 ("fizzbuzz" equivalent).

## factorial
Great! Looks and works well.

## Overall Score: 3.5

Scores are out of 5.
1 = Please come speak with an instructor.
2 = Needs improvement
3 = Acceptable
4 = Pretty good!
5 = Fantastic!

```js
function billTotal(subtotal) {
	var tax;
	var tib;
	var total;
	 tax = subtotal * 8/100;
	 tip = subtotal * 20/100;
	return total = subtotal  + subtotal * 8/100 +  subtotal * 20/100;
  // TODO: your code here
}

function animalNoise(animal, emotion) {
	if(animal=== "cat") {
		if (emotion === "happy") {return "happy cat noise";}
		else if (emotion === "sad") {return "sad cat noise";}
		else (emotion === "ungry") {return "ungry cat noise";}
		 }
  else if (animal=== "dog") {
		if (emotion === "happy") {return "happy dog noise";}
		else if (emotion === "sad") {return "sad dog noise";}
		else (emotion === "ungry") {return "ungry dog noise";}
		 }
  else if (animal=== "dog") {
		if (emotion === "happy") {return "happy dog noise";}
		else if (emotion === "sad") {return "sad dog noise";}
		else (emotion === "ungry") {return "ungry dog noise";}
		 }

	}

  // TODO: your code here
}


var nu ;
function digitalSum(n) {
	nu = n - n%10;
	if (nu === 0) {return 0;}

	return n%10 + digitalSum(n-n%10);
  // TODO: your code here
}

function fib(n) {
  // TODO: your code here
}

function fizzBuzzTwo(wordA, wordB) {
	var n = 1;
	while (n<=100) {
		if (n%3 === 0) {return wordA;}
		if (n%5 === 0) {return wordB;}
		n= n+1;
	           }

	}

  // TODO: your code here
// }

function factorial(n) {
	var result = 1;
	while (n>0){
		result = result * n;
		n= n-1;
	}
	return result;
  // TODO: your code here
}


```
