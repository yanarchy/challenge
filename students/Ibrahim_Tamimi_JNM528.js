function billTotal(subtotal) {
  // TODO: your code here
  var tax=subtotal*0.08;
  var tip=subtotal*0.20;
  var total=subtotal + tax+tip;
  return total;
}

function animalNoise(animal,emotion) {
  // TODO: your code here
  if(animal=== "cat" && emotion=== "sad"){
  		return "meiaoooo";
  }else if(animal==="dog" && emotion ==="happy"){
  		return "who let the dog out";
  }else{
  	return "plz input cat or dog";
  }

  
}

function digitalSum(n) {
  // TODO: your code here
  var x=0;;
  if (n <= 0){
  	return x;
  }else{
  	x=n%10
  	return  x+digitalSum((n-x)/10);
  }

}

function fib(n) {
    if(n === 0){
    	return 1;
    }else if(n ===1){
    	return 1;
    }else{
    	return fib(n-1)+fib(n-2);
    }
}

function fizzBuzzTwo(wordA, wordB) {
  // TODO: your code here
  for(var i=0; i<100; i++){
  	if(i %3 === 0 && i%5 ===0){
		console.log(wordA+wordB);
	}else if(i%3 === 0){
		console.log(wordA)
	}else if(i%5 === 0){
		console.log(wordB)
  	}else{
  		console.log(i);
  	}
  }
}

function factorial(n) {
  // TODO: your code here
  if(n===1){
  	return n;
  }else{
  	return n*factorial(n-1)
  }
}
