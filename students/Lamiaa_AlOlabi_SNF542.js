function billTotal(subtotal) {
	return (0.2*subtotal)+(0.08*subtotal);
}

function animalNoise(animal, emotion) {
  return ;
}

function digitalSum(n) {
  var rem = n % 10;
  var sum = rem;
  if (n >= 10) {
  	var rest = Math.floor (n /10);
  	sum += digitalSum(rest)
  }
  return sum;
}

function fib(n) {
	if (n === 0 ) {
	return 0;
}
	else if (n === 1) {
	return 1;
}
    else {
    return fib(n-1) + fib(n-2);
}
}

function fizzBuzzTwo(wordA, wordB) {
  if (wordA*3) {
  return "fizz";
}
  if (wordB * 5) {
  	return "Buzz"
  }
  else {
  	(wordA && wordB * 3)
  	return "fizzBuzzTwo"
  }
}

function factorial(n) {
  if ( n === 0 ) {
  	return 0;
  }
  if (n === 1 ) {
  	return 1;
  }
  else {
  	return n * factorial (n - 1);
  }
}

function helloWorld {
  console.log("helloWorld")
}