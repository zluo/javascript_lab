var a1=[0,1,,3];
var a2= new Array(3);
console.log("array length: " + a1.length);

// test 'in' , this function return not null element in the array 
for(o in a1)
	{
	  console.log("element: "  + o);
	}

for(i=0; i< a1.length; i++){
	console.log("element: "  + a1[i]);
}

console.log(a1[2]==undefined);

/*alert (0 in a1);
alert (null in a1);
alert (0 in a2);
*/