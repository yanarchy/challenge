function billTotal(subtotal) {
  // TODO: your code her
  return subtotal + subtotal*(8/100)+ subtotal*(20/100);
}

function animalNoise(animal, emotion) {
  // TODO:your code here
  if (animal === "dog" && emotion === "angry"){
  	return "wooooooooooowowoowowoowoo";
  }
  	else if (animal === "cat" &&  emotion === "sad"){
		return "myaaaaaaaaaaaw"
  }
}

function digitalSum(n) {
  // TODO: your code here
 if (n < 10) {
        return n
    }
    return n % 10 + Math.floor( n / 10 )
}

function fib(n) {
  // TODO: your code here
}

function fizzBuzzTwo(wordA, wordB) {
  // TODO: your code here
}

function factorial(n) {
  // TODO: your code here
  if (n === 1){
  	return 1
  }
  return n * sum(n - 1)
}
