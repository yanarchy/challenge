function billTotal(subtotal) {
	tax= subtotal*0.08;
	tip= subtotal*0.20;
	total=subtotal+ tax+tip;
	return total;
​
}
​
function animalNoise(animal, emotion) {
  if(emotion==="happy"){
  	result= animal+ ":)";
  }
  if (emotion ==="sad"){
  	result = animal+":(";
  }
  if (emotion==="surprised"){
  	result=animal+ "WOW";
  }
  return result;
}
​
/*function digitalSum(n) {
	var result=0;
 	for(i){
 		i = i+n%10;
 		n=Math.floor(n/10);
 	}
 	return i;
}
*/
function fib(n) {
  if(n<=1){
  	return 1;
  }

  return fib(n-1)+fib(n-2);
}
​
function fizzBuzzTwo(wordA, wordB) {
	var result="";

	for (i=0; i<=100; i++){
		if((i%3)===0){

			result =result+ wordA +",";
		}
		if ((i%5)===0){

			result=result +wordB+",";
		}
		else {
			result = result +i+",";
		}


	}
	 return result;
	}
​
function factorial(n) {
  // TODO: your code here
	if(n===1){
		return 1
	}
	return n*factorial(n-1);
​
}
