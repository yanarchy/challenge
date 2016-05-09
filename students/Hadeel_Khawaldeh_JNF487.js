function billTotal(subtotal)
{
	var tip = (20/subtotal)*100;
	var tax = (8/subtotal)*100;
	return subtotal+tip+tax;
  // TODO: your code here
}
​
function animalNoise(animal,emotion)
 {
  // TODO: your code here
  if(animal==="cat" && emotion==="happy")
  {
  	return "MWWWWWMWWW";
  }
  if(animal==="cat" && emotion==="sad")
  {
  	return "MOOOOMOOO";
  }
  if(animal==="duck" && emotion==="happy")
  {
  	return "WakWakWAk";
  }
  if (animal==="duck"&& emotion==="sad")
  {
  	return "WoookWook";
  }
  else "try another animal or emotion";
}
​
function digitalSum(n) {
  // TODO: your code here
​
  if(Math.floor(n)===0)
  {
  	return 0;
  }

   n=n%10;
  return n+digitalSum(Math.floor(n/10));
}
​
function fib(n)
{
  // TODO: your code here
 var a=0;
 var b=1;
 var f=1;
 for (var i=2 ; i<=n ; i++)
 {
 	f=a+b;
 	a=b;
 	b=f
 }
 return f;
}
​
function fizzBuzzTwo(wordA, wordB)
 {
  // TODO: your code here
  for(var i=0 ; i<101 ;i++)
  {
  	if (i%3 === 0)
  	{
  		console.log(wordA);
  	}
  	if( i%5 === 0)
  	{
  		console.log(wordB);
  	}
  	console.log(i);
  }
  return;
}
​
function factorial(n)
 {
  // TODO: your code here
  if (n===0)
  {
  	return 1;
  }
  return n*factorial(n-1);
}
