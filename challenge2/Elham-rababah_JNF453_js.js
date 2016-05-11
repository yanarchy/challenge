// FAMILY

/* TODO:

  Use JS to represent 2 people in your family. Please include the below:
  - Name
  - Relationship to you
  - Age
  - Occupation

*/

var family = [{name:"Ali",age:50,Relationship:"father",Occupation:"nirc" },
			   {name:"maryam",age:46,Relationship:"mother",Occupation:"mother" }

]; 







// RANGE

function range (start, end) {
    var arr =[];
    while(start < end ){
         arr.push(start);
          
    	start++;
    }
    return arr;

}

range(0, 4); // => [0, 1, 2, 3]
range(2, 7); // => [2, 3, 4, 5, 6]
range(10, 10); // => []
range(10, 2); // => []

// LAST

function last (arr) {
	var x=arr.length-1;
      return arr[x];
}

// ADD ONE

function addOne (arr) {
   var addarr=[];
    for (var x=0 ;x< arr.length; x++){
    	
    		addarr.push (arr[x]+1);
    	

    }

     return addarr;
    	}

