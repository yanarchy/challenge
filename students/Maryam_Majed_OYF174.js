function billtotal(subtotal)
{ 	return subtotal+((20*subtotal)/100) +((8*subtotal)/100);
}
function animalnoise(animal,emotion)
////////////////////////////////////////////////
{ if(emotion==="happy")
{return " *_* smile";
}
if (emotion==='sad')

{return ":( ";  }
if(emotion==="angry")
{
	return "^=^ awf";
}
}
///////////////////////////////////////////////
function digitalsum(n){
	var s=0;
	for(var i =1;i<n.length;i++)
{		s=s+(n(i)%10);
return s;
}
}
////////////////////////////////////////////////////////////
function fib(n){
	var i=0;

	var f=0;
	for(var j=1;j<=10;j++)

	f= i+(i+1);
	return n(i);
}
function fizzbuzztwo(wordA,wordB)
	{
		for(var i=1;i<=100;i++)
	 {
	 	if (i%3===0)
		{	console.log (wordA);
		}

		if (i%5===0)
		{
			return wordB;
		}
		if (i%3===0 && i%5===0)
		{	return wordA+wordB;
		}

	}
	return i;

	}
function fact(n)
{ var f=1;
	while(n>1)
	{	f=f*n
	n--;
}
return f;
}