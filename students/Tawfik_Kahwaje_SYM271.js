function billTotal(subtotal) {
  return subtotal+subtotal*0.2+subtotal*0.08;
}

function animalNoise(animal, emotion) {
  if(animal==="cat" && emotion==="sad")
  	return "no noise";
  else if(animal==="dog" && emotion==="angry")
  	return "howling "


}

function digitalSum(n) {
  var result=0;

  if(n<=0)
  	return 0;
  else
  	result=result+n%10 +digitalSum(Math.floor(n/10));

  return result;

}

function fib(n) {

  if(n<0)		
		return 0;
  else if(n===0 || n===1) 
  	return 1;
  else
  	return fib(n - 1) + fib(n - 2);

}

function fizzBuzzTwo(wordA, wordB) {
  var result ="";
  for (var i=0 ;i<100 ; i++) {
  	result=result+ " " +i ;

  	if(i%3 ===0)
  		result=result+ " " +wordA ;
  	if(i%5===0)
  		result=result+ " " + wordB;
  	result=result+"\n";

  }
  return result;
}



function factorial(n) {
  if(n===0)
  	return 1;
  else
  	return n * factorial(n-1);
}
