// Salah Alomari JNM 677

function billTotal(subtotal) {
  // TODO: your code here
  var total
  var retMSG = "Your bill total including 8% tax and 20% tip is "
  total = (subtotal * 1.28)
  retMSG = retMSG + total
  return retMSG;

}

function animalNoise(animal, emotion) {
  // TODO: your code here
  var sound
  if (emotion === "angry") {
  	if (animal === "cat") {
  		sound = "hiss"
  	}
  	else if (animal === "human") {
  		sound = "shout"
  	}
  	else if (animal === "dog") {
  		sound = "bark 8|"
  	}
  }
  else if (emotion === "happy") {
  	if (animal === "cat") {
  		sound = "meow :)"
  	}
  	else if (animal === "human") {
  		sound = "laugh :)"
  	}
  	else if (animal === "dog") {
  		sound = "bark :)"
  	}

  }
  return sound
}

function digitalSum(n) {
  // TODO: your code here
  if (n === 0) {
  	return 0
  }
  return (n % 10) + digitalSum (Math.floor (n/10));
}

function fib(n) {
  // TODO: your code here
  if (n === 1) {
  	return 0;
  }
  if (n === 2) {
  	return 1;
  }
  return fib (n-1) + fib (n-2)

}

var comma = ", "
function fizzBuzzTwo(wordA, wordB) {
  // TODO: your code here
  var print = "";
  for (var count = 1; count <=100; count ++) {
  	if ((count % 3 === 0) && (count % 5 === 0)) {
  		print = print + wordA + wordB + comma
  	} 
  	else if (count % 3 === 0) {
  		print = print + wordA + comma
  	}
  	else if (count % 5 === 0) {
  		print = print + wordB + comma
  	}
  	else {
  		print = print + count + comma;
  	}
  }
  return print;
}

function factorial(n) {
  // TODO: your code here
  if (n === 0) {
  	return 1;
  }
  return n * factorial (n-1)
}

function factorialWhile (n) {
	var fac = 1;
	while (n > 0)
	{
		fac = fac * n
		n --;
	}
return fac;
}
