function billTotal(subtotal) {
  var total=0;
  if(subtotal>0){
  	tip=20/100 *subtotal
  tax=8/100 *subtotal
  total = subtotal +tip+tax
  return total;
}
}
​
function animalNoise(animal,emotion) {
 var result="";

}
​
function digitalSum(n) {
	//
​
}
​
​
function fib(n) {
  if (n===0 || n===1){
 	return 1;
  }
  else
 return fib(n-1)+fib(n-2);
  }
​
function fizzBuzzTwo(wordA, wordB) {
  // TODO: your code here
}
​
function factorial(n) {
  var x=1;
while (n>0){
	x=x*n
	n=n-1
}
return x;
}
