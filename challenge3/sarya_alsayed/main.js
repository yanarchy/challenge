function billTotal(subtotal) {
  // TODO: your code here
}

function animalNoise(animal,emotion) {
  // TODO: your code here
 if (animal==="dog" && emotion==="happy")
 	return animal+" :) ohhh"; 
 else if (animal==="cat" && emotion==="sad")
 	return animal+" :( mmm"
  else return animal+ " smileys";
}

function digitalSum(n) {
  // TODO: your code here
  if (n%10===n)
  	return n;
  return n%10+digitalSum(Math.floor(n/10));
}

function fib(n) {
  // TODO: your code here
  if (n===0)
  	return 0;
  if(n===1)
  	return 1;
  if (n>1)
  	return fi
}

function fizzBuzzTwo(wordA, wordB) {
  // TODO: your code here
  var n=1
  while (n<=100){
  if (n%3===0)
  	console.log( wordA);
  if (n%5===0)
  	console.log(wordB);
  else  console.log(n);
}
n=n+1
}

function factorial(n) {
  // TODO: your code here
  if (n===0)
  	return 1;
  	return n*factorial(n-1);
}
