function billTotal(subtotal) {
  var tax = subtotal * 8/100;
  var tip = subtotal * 20/100;
  return tax + tip + subtotal;
}

function animalNoise(animal, emotion) {
	if (animal == "cat" && emotion == "angry")
		return "meawooo";
	if (animal == "dog" && emotion == "sad")
		return "ho ho ho ho";
  
}

function digitalSum(n) {
  if (n < 10)
  {
  	return n;
  }
  return n%10 +digitalSum(Math.floor(n / 10));
}

function fib(n) {
  if (n == 0 )
  {
  	return 0;
  }
   if (n == 1)
  {
  	return 1;
  }
  return fib(n-1)+fib(n-2);
}

function fizzBuzzTwo(wordA, wordB) {
  for (var i = 1; i<=100;i++)
  {
  	if (i%3==0){
  		console.log(wordA);
  	}
  	else if (i%5==0){
  		console.log(wordB);
  	}
  	else console.log(i);
  }
}

function factorial(n) {
	var result =1;
  for (var i = 1; i <= n; i++){
  		result = result * i;
  }
  return result;
}
