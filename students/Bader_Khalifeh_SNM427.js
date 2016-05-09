// Bader Aldeen Khalifeh

function billTotal(subtotal) {
  // TODO: your code here
  return (subtotal * 1.2)*1.08 ;
}

function animalNoise(animal, emotion) {
  // TODO: your code here
  if(animal === "cat")
  {
  	if(emotion === "angry")
  		return "Reeeeooooorw";
  	else if(emotion === "happy")
  		return "Meoowww";
  }
  else if(animal === "dog")
  {
  	if(emotion === "angry")
  		return "WOOOOOF WOOOOF";
  	else if(emotion === "happy")
  		return "Arf!"
  }
  return "Sorry this function only works with angry and happy cats and dogs :) "
}

function digitalSum(n) {
  // TODO: your code here
  if(n === 0)
  	return 0;
  return (n%10) + digitalSum(Math.floor(n/10));
}

function fib(n) {
  // TODO: your code here
  if(n === 0 || n ===1)
  	return n;
  return fib(n-1) + fib(n-2) ;
}

function fizzBuzzTwo(wordA, wordB) {
  // TODO: your code here
  for(var ii =1 ; ii <= 100 ; ii++)
  {
  	if(ii%3 !== 0 && ii%5 !==0)
  		console.log(ii);
  	else
  	{
  		var str = "";
  		if(ii%3 === 0)
  			str += wordA;
  		if(ii%5 === 0)
  			str += wordB;
  		console.log(str);
  	}
  }
}

function factorial(n) {
  // TODO: your code here
  if(n === 0)
  	return 1;
  return n*factorial(n-1);
}
