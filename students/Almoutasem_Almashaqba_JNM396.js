function billTotal(subtotal) {

return "Total Bill =" + subtotal + subtotal *0.2 + subtotal * 0.08;

          }


function animalNoise(animal, emotion) {
          
         if(animal === "Dog" && emotion === happy) {

         	return ":)";
         }

         if(animal === "Dog" && emotion === "Sad")

         	{
         		return ":(";
         	}
          

          if(animal === "Cat" && emotion === "Sleepy" ) {

          	return ":'O";
          }
          if (animal === "cat" && emotion === "Happy") {

          	return ":)";
          }
       }


 var sum=0;
 function digitalSum(n) {

 if(n<10) {
 	return	sum+ n;
 } else {
 	sum = sum + n %10;
 	return  digitalSum(Math.floor(n/10));
 }
}
 	

 ///4
function fib(n) {
var x=1;
result=0;
var counter = 3;

if(n===1) {

	result ===result + 0;
}
if(n === 2) {

	result = result + 1;
}
if(n === 3) {

	return result = result + 1;
}
while(counter!=n)
{
	 result = result + x;
	 counter ++;

	}
	return result;
}




 ///5
 function fizzBuzzTwo(wordA, wordB) {
           // TODO: your code here
           var counter=1;
           while (counter <=100) {

         		if (counter%3 === 0) {

         			console.log(wordA);
         		}
         		if (counter%5 === 0) {

         			console.log(wordB);
         		}
           
         		counter = counter +1;
           }

           return 0;

          }

function factorial (n) {

var result=1;
	
	while (n!=0) {

		result = result * n;
		n=n-1;
	}

	return result;
}








