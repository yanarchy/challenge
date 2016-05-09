// Write a function called billTotal that calculates the total to be paid at a restaurant -- including tip and tax -- given the subtotal (i.e. cost of food and drinks).

 //The tip will be 20% and tax will be 8%
function billTotal(food, drinks) {
	var tax = 0;
	var tip = 0;

	tax = 8 %  (food + drinks);
	tip = 20 % (food + drinks);


	return food + drinks + tax + tip;
}
 
 function animalNoise(animal, emotion){
 	if( animal === "cat" && emotion === "sad"){
 		return " :( ";

 	}else if( animal === "cat" && emotion === "angry"){
 		return " Snarl ";
 	}else if(animal === "cat" && emotion === "happy" ){
 		return " :D ";
 	}else if(animal === "cat" && emotion === "surprised" ){
 		return " Raises its tail ";
 	}else if(animal === "dog" && emotion === "surprised" ){
 		return " sometimes he's run away ";
 	}else if(animal === "dog" && emotion === "happy" ){
 		return " Barking and wagging his tail and revolves around the owner ";
 	}else if(animal === "dog" && emotion === "angry" ){
 		return "Judd appears and barks ";
 	}else if(animal === "dog" && emotion === "sad" ){
 		return "Low bay ";
 	}
 	// sorry for repeat my self.
 }
function digitalSum(n){
	return n % 10;

}

function fib(n){
	if(n === 0 || n === 1){
		return 1;
	}
	return  fib (n-1) + fib (n-2);
}
function fizzBuzzTow(wordA, wordB){
 
}

function factorial(n){
	if(n===0){
		return 1;
	}
	return n * factorial(n-1);
}