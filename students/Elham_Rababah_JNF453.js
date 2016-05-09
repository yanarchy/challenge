function billTotal(subtotal) {
  var tip =.20  ;
  var tax =.08 ;
  var total =subtotal + tip*subtotal +subtotal*tax ;
   
   return total;

}


var DogHppyeSuond="hoooooooHppy";
var DogAngrySuond="hoooooooAngry";
var catHppyeSuond="moooooooHppy";
var catAngrySuond="moooooooAngry";


function animalNoise(animal, emotion) {
	if (animal==="cat" )
		{if( emotion ==="happy" )
           return catHppyeSuond;
           else if( emotion ==="angry" )
           return catAngrySuond;
       }
     
   if (animal==="dog" )
		{if( emotion ==="happy" )
           return DogHppyeSuond;
           else if( emotion ==="angry" )
           return DogAngrySuond ;
       }
  

}

function digitalSum(n) {
	var sum=0 ;
  if (n===0){
  	return 0;
                     }
  else 
  	{sum = n%10 + digitalSum (Math.floor(n/10));}
    return sum ;




}

function fib(n) {
	var fibsum
  if (n===0 || n===1)
    {
    	return 1;
    }
   else
   	return  fib(n-1)+fib(n-2);

}

function fizzBuzzTwo(wordA, wordB) {
   var str="";
  for (var i=1; i<=100;i++)
  {

  	  if (i% 3  ===0 && i % 5 === 0)
        str=str + wordB+wordA;

     else if (i% 3  ===0)
     	str=str+ wordA;
     
     else if (i % 5 === 0) 
     	str=str+ wordB;

       else
       	str=str+ i;

     }
     return str;
  }




function factorial(n) {
       if (n===1)
       	  return 1;
       	else
       		return n*factorial(n-1);

 }
