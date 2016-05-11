function billTotal(subtotal)
{
	return subtotal + (subtotal*0.20) + (subtotal *0.08);
}
function animalNoise (animal,emotion)
{
	if(animal === "cat" && emotion === "angry")
		return "cat angry";
	else if(animal === "dog" && emotion ==="happy")
		return "dog happy";
}
function digitalSum(n)
{
	var sum =0
	var x = n.length;
	if (x <= n.length)
      sum = sum + n.slice(x-1);
  return sum;
}

function fizzBuzzTwo(wordA,wordB)
{
	var x= wordA;
	var y= wordB;
	for(var i =0;i<101;i++)
		if(i %3 ===0)
		return x + fizzBuzzTwo(wordA,wordB);
		else if(i % 5 === 0)
			return y + fizzBuzzTwo(wordA,wordB);
}
function factorial(n)
{
if(n ===0)
	return 1;
else return n * factorial(n-1);
}