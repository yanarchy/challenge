function billTotal(subtotal) {
return (subtotal + subtotal * 0.2 + subtotal *0.08);
}



function animalNoise(animal,emotion) {
  if(animal === "cat" && emotion === "Happy") {
  	return "Mewo"
  }
  else 
  	if (animal==="Cow" && emotion=== "Bored"){
  	return "Mooooooooh";
  }
}



function digitalSum(n)  {
  var sum = 0;

     for (var i = 0; i < n.length; i++) {
      sum = sum + n.substring(i);

  return sum;
}
	 // something is wronge!

}




function fib(n) {
    if ( n===1) {
 	   return 0 ;}
 	if (n===2) 
 		return 1 ; 
 return fib(n-1)+fib(n-2);
}






function fizzBuzzTwo(wordA, wordB) {
	 	for(var x=0 ; x=100; x=x+1) {
	 		if(x%3===0) 
	 			return wordA ; 
	 		if (x%5===0) 
	 			return wordB;
	 		  
	 }	
}// missing something




function factorial(n) {
  if(n===0) 
  	return 1 ; 
  return n* factorial (n-1) ;
}
