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
		else {return "ungry cat noise";}
		// else (emotion === "ungry") {return "ungry cat noise";}
		 }
  else if (animal=== "dog") {
		if (emotion === "happy") {return "happy dog noise";}
		else if (emotion === "sad") {return "sad dog noise";}
		else {return "ungry dog noise";}
		// else (emotion === "ungry") {return "ungry dog noise";}
		 }
  else if (animal=== "dog") {
		if (emotion === "happy") {return "happy dog noise";}
		else if (emotion === "sad") {return "sad dog noise";}
		else {return "ungry dog noise";}
		// else (emotion === "ungry") {return "ungry dog noise";}
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
