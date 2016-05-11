function billTotal(subtotal) {
  // TODO: your code here
  subtotal = subtotal*(1+0.2+0.8);
  return subtotal;
}

function animalNoise(animal,emotion)
{
 if (animal === "cat")
 {
  if (emotion="happy") return "Prrr";
else if (emotion="sad") return "Mew";
else return "MEYAW"
 }
   if (animal==="duck")
   {
    return "KWAK";
   }
}


function digitalSum(n) {
  // TODO: your code here
    var   r = n% 10;
    var sum = r;
    if(n>= 10) {
        var rest = Math.floor(n / 10);
        sum =sum+ digitalSum(rest);
    }
    return sum;
}

function fib(n) {
  // TODO: your code here
 if (n == 0)
  return 0;
    else if (n == 1)
      return 1;
    else
      return (n-1)+(n-2);
}

function fizzBuzzTwo(wordA, wordB) {
  // TODO: your code here
  for (var i = 100; i >= 0; i--)
  {
    if (i%3===0) {
      return i+wordA;
  if (i%5===0) {}
    return i+wordB
  return i;
}
}
  }

fact=1;
function factorial(n)
{
if (n>0) {
  fact= n* factorial(n-1);
  n=n-1;
}
return fact;
}