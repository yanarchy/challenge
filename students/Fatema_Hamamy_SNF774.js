function billTotal(subtotal) {
	var tip=(subtotal*20)/100;
	var tax=(subtotal*8)/100;
	var result=subtotal+tax+tip;
  return result;
}

function animalNoise(animal,emotion) {
	var noise="";
	if(animal === "dog" && emotion === "sad"){
		noise = "awwww :( ";
	}
	else
	 if(animal === "dog" && emotion === "happy"){
		noise = "awooooo :D";
	}
	else
	 if(animal === "dog" && emotion === "angray"){
		noise = "awoowow :@ ";
	}
	else
	 if(animal === "cat" && emotion === "sad"){
		noise = "meewww :(";
	}
	else
	 if(animal === "cat" && emotion === "happy"){
		noise = "meaaawww :D ";
	}
	else
	 if(animal === "cat" && emotion === "angray"){
		noise = "mewwww :@ ";
	}
	return noise;
  
}

function digitalSum(n) {
var result= n%10;
  if(n == 0){
  	result=result + 0;
  }
  if(Math.floor(n / 10)=== 0){
  	return n;
  }
  else{
  result=result+digitalSum(Math.floor(n / 10));
}
  return result;
}

function fib(n) {
	// note: if the number im passing start from 0 so its the same as the fibbonaci of that number,
	// so there will be no different than the original fibonaci function
  if(n==1 || n== 0)
		return 1;
	else
		return fib(n-1)+fib(n-2);

}

function fizzBuzzTwo(wordA, wordB){
	for(var i=1 ; i<= 100; i++){
		if(i % 3 == 0){
			console.log(wordA);
		}
		else 
		if(i % 5 == 0){
			console.log(wordB);
		}
		else
			console.log(i);
	}
  
}

function factorial(n) {
  if(n == 1)
	return 1;  
else
	return n*factorial(n-1);
}
