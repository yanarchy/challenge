function billTotal(subtotal) {
  return subtotal+(subtotal*0.20) + (subtotal*0.08);
}

function animalNoise(animal, emotion) {
  if (animal === "cat" && emotion === "angry"){
  	return "angry cat";
  }
  else if (animal === "cat" && emotion === "happy"){
  	return "meow";
  }
  else if (animal === "dog" && emotion === "happy"){
  	return " wof wof";
  }
  else if (animal === "dog"  && emotion === "angry"){
  	return "angry dog WOF WOF";
  }
}

function digitalSum(n) {
  if (n%10===n){
  	return n;
  }
  
  return n%10 + digitalSum(n%10);
}

function fib(n) {
  if (n<=1){
  	return 1;
  }
  return fib (n-1) + fib (n-2);
}

function fizzBuzzTwo(wordA, wordB) {
 for (i=1;i<=100;i++){
 	if (i%3===0){
 		console.log(wordA);
 	}
 	if (i%5===0){
 		console.log(wordB);
 	}
 	console.log(i);
}
}

function factorial(n) {
  if (n===1){
  	return 1;
  }
  return n*factorial(n-1);
}
