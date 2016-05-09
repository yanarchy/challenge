function billTotal(subtotal) {
	return subtotal+(subtotal*(20/100))+(subtotal*(8/100));

}
​
function animalNoise(anemal,emotion) {if((anemal==="dog"|| anemal==="cat")&&emotion==="happy")
return anemal +"will run and play so it is happy";
else if((anemal==="dog"|| anemal==="cat")&& emotion==="sad")
 return anemal+" is sad so it lazy and sleepy";
//actually i don't know a lot about animales
}
var x=0;
function digitalSum(n) {if(n%10===0)return x;
x=x+n%10;
return digitalSum(Math.floor(n/10));
}
​
function fib(n) {if (n==0) return 0;
	else if (n===1) return 1;
​
return fib(n-1)+fib(n-2);
}
​
function fizzBuzzTwo(wordA, wordB) {for(var i=1;i<=100;i++)
	{if(i%3===0) console.log(wordA);
		else if(i%5===0) console.log(wordB)
			else console.log(i);}

}
​
function factorial(n) {var x=1;
for (var i=1;i<=n;i++)
	x=x*i;
return x;
}
