function billTotal(subtotal) {
  var totalcost;
  var tip = subtotal * 0.2 ;
  var tax = subtotal * 0.08;
  totalcost = subtotal + tip + tax;
  return totalcost;
}
​
function animalNoise(animal , emotion) {
​
     var noise;
	if(animal === "cat" && emotion === "angry")
       noise = "😡 meeeeeaaawwww";
   else if(animal === "dog" && emotion === "happy")
   	noise = "😃 park";
   else if(animal === "dog" && emotion === "sad")
   	noise = "😢 parrrkkkk";
   else if (animal === "cat" && emotion === "surprised")
   	noise="😳 meawwww!";
   else if (animal === "chicken" && emotion === "angry")
   	noise="😠 kukukuuu";
​
   return noise;
  }
​
​
function digitalSum(n) {
	var digit;
	var digitsum = "";
  while (Math.floor(n) !== 0)
  {
     digit = Math.floor (n % 10) ;
     digitsum = digitsum + digit + "+";
     n = n / 10;
  }
  return digitsum;
}
​
function fib(n) {
  if(n === 0 || n === 1 )
  	return 1;
  else
  	return fib(n-1)+ fib(n-2);
}
​
function fizzBuzzTwo(wordA, wordB) {
  for(var i =1 ; i<=100 ; i++)
  {
     if(i % 3 === 0)
     	 console.log(wordA);
     else if (i % 5 === 0)
     	 console.log(wordB);
     else
     	 console.log(i);
​
  }
}
​
function factorial(n) {
  if(n=== 0 || n===1)
  	return 1;
  else
  	return n * factorial(n-1);
}
