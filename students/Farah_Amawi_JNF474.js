function billTotal(subTotal) {
var tip = .2;
var tax = .08;
	var total = subTotal + tip + tax;
	return "bill =" + total +" JOD" ;
  // TODO: your code here
}

function animalNoise(animal , emotion) {
	if(animal === "dog" && emotion === "angry"){return "howhowhow";}
	if(animal === "dog" && emotion === "calm"){return "hohoho" ;}
	if (animal === "lion" && emotion === "angry"){return "roar" ;}
	if (animal === "lion" && emotion === "calm"){ return "weeeew" ;}

}

 var sum = 0;
function digitalSum(n) {
  if(n !== 0){
  	var w = n%10;
     n= Math.floor (n/10);
sum = sum + w;
digitalSum(n) ;}
return sum ;
}

function fib(n) {
	var num ;
  if (n === 0 ){num = 0;}
  else if(n===1){num = 1;}
  else {num = (num-1)+(num-2);
  	fib(n);}
  return num ;
}

function fizzBuzzTwo(wordA, wordB) {
  for (var i=0 ; i<=100 ;i++){
  	if (i%3 === 0){ console.log (wordA);}
  	else if (i%5 === 0){ console.log (wordB);}
  	console.log(i);
  }
}

function factorial(n) {
  var w = n;
  for (var i = 1 ; i<w ; i++){
n = n*i ;
  }return n ;
}
//n= 5*1 = 5
//5*2 = 10
//10*3 =30
//30 * 4 = 