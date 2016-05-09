function billTotal(subtotal) {
  var tip = subtotal * 0.2
  var tax = subtotal * 0.08
  return subtotal + tip + tax
}

function animalNoise(animal, emotion) {
  if (animal === "cat"){
  	if (emotion === "happy"){
  		return "Meow"
  	} else if (emotion === "Angry"){
  		return "Growl"
  	}
  } else if (animal === "dog"){
  	if (emotion === "Happy"){
  		return "Bark"
  	} else if (emotion === "Sad"){
  		return "Howl"
  	}
  }

}

function digitalSum(n) {
  if(Math.floor(n/10) < 1){
  	return n
  }
  return (n - (Math.floor(n/10) * 10)) + digitalSum(Math.floor(n/10))
}

function fib(n) {
	if (n === 0){
		return 0
	} else if (n === 1){
    return 1
  } 

	return fib(n - 1) + fib(n - 2)
}

function fizzBuzzTwo(wordA, wordB) {
	for (var i = 0; i < 100; i++){
		if(i % 15 === 0){
			console.log(wordA + wordB)
		} else if (i % 5 === 0){
			console.log(wordB)
		} else if (i % 3 === 0){
			console.log(wordA)
		}
	}
}

function factorial(n) {
  if (n === 0){
  	return 1
  }
  return n * factorial(n - 1)
}

