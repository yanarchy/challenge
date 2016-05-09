// Mohammad Albakri .
​
function billTotal(subtotal) {
  // TODO: your code here
var tax = (subtotal * 1.2)- subtotal
var tips = (subtotal * 1.08) - subtotal
​
subtotal = subtotal + tax + tips
return "Your total including taxes and tips is: " + subtotal;
​
}
​
function animalNoise(animal , emotion) {
  // TODO: your code here
​
if(animal === "cat"){
​
	if(emotion === "angry"){
		return "MEOW"
	}
	else if(emotion === "happy"){
		return "meoow :p"
	}
	else if (emotion === "sad"){
		return "mww :("
	}
	else if(emotion === "surprised"){
		return ":O:O:O meoWweW"
	}
}
​
if(animal === "dog"){
​
	if(emotion === "angry"){
		return "BARK"
	}
	else if(emotion === "happy"){
		return "herherher :p"
	}
	else if (emotion === "sad"){
		return "brrr :("
	}
	else if(emotion === "surprised"){
		return ":O:O:O HAWHAW"
	}
}
​
}
​
function digitalSum(n) {
  // TODO: your code here
  var temp = n
  var total = 0;
  var first = Math.floor(temp/1000) // GET THE FIRST NUMBER
​
total +=first; // ADD THE FIRST NUMBER TO TOTAL so (1337) (1 will be added to total)
temp = n % 1000 // Set temp to get the three other numbers  and leave the first one(temp now will be 337)
first = Math.floor(temp / 100 ); // GET the first number from the three left (which is 3)
total += first; // Add it to the total OF numbers NOW (1 +3)
temp = n % 100 // set temp to leave one more number and give us two only (37)
first = Math.floor(temp/10); // divide to get the first number (3)
total +=first ; // add 3 to the total
temp = n% 10; // set temp to get the the last number (7)
first = temp; // set it to first
​
total +=first; // add the last number to total
//(TOTAL  NOW WILL BE  1337 = 1 + 3 + 3 + 7 = 14)
​
return total;
// Total of n !!
}
​
function fib(n) {
  // TODO: your code here
 if (n === 0 ){
 	return 0;
 }
if(n > 0){
	if(n === 0){
	return 1;
	}
	if(n ===1){
		return 1;
	}
}
​
return fib(n-2) + fib(n-1);
​
}
​
function fizzBuzzTwo(wordA, wordB) {
  // TODO: your code here
​
for(var i = 1 ; i < 100 ; i++){
​
		if(i % 3 === 0 && i % 5 === 0){
			 console.log(wordA+wordB);
			 i++
		}
​
		 if(i % 3 === 0){
			console.log(wordA);
			i++
		}
​
		 if(i % 5 === 0){
			 console.log(wordB);
			 i++;
		}
		console.log(i) ;
	}

	}
​
function factorial(n) {
  // TODO: your code here
  var fact = 1;
  while(n>=1){
  fact = fact * n;
  n--;
}
return fact;
}
