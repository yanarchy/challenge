var Total=0;
var tax=0;
var tip=0;
function billTotal(subtotal)
{
	tip=0.2*subtotal;
	tax=subtotal*0.08
	Total=subtotal+tip+tax;
	return Total;
}

function animalNoise(animal,emotion){
	if(animal==="dog"&&emotion==="sad"){
		return "AAWWWWWW";
	}
	if(animal==="dog"&& emotion==="happy"){
		return "Aaaaw";
	}
	if(animal==="bird"&&emotion ==="happy"){
		return "bakbak";
	}
	if(animal==="bird"&& emotion==="sad")
	{
		return "baaaaaaak";
	}
	if(animal==="horse"&& emotion==="sad")
	{
		return "Sad";
	}
	if(animal==="horse"&& emotion==="happy")
	{
		return "happy";
	}
}

function digitalSum(n)
{
	if(n===0){
		return 0;
	}
	var result=n%10
	var result1=Math.floor(n/10);
	return result+digitalSum(result1);
}

function fib(n){
	if(n===0 ){
		return 0;
	}
	if(n===1){
		return 1;
	}
	return fib(n-1)+fib(n-2);
}

function fizzBuzzTwo(str,str1){
	var i=1;
	var result="";
	while(i<=100){
		if(i%3===0 && i%5===0)
		{
			result=result+"\n"+str+str1;
		}
		else if(i%3===0)
		{
			result= result+"\n"+str;
		}
		else if(i%5===0){
			result=result+"\n"+str1;
		}
		else{
		result=result+"\n"+i;}
		i++;
		
	}
return result
}

function factorial(n){
	if(n===0 || n===1){
		return 1;
	}
	return n*factorial(n-1);
}
