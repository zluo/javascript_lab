/**
Javascript has five types, test by typeof
Object
null
boolean
number
function
**/
(function(obj){
	var o={x:1, y:0};


	console.log(  "======Test typeof ========" +"\n" +
			"Type of String: " + (typeof "dsf") + "\n" +
	    	"Type of null: " + (typeof null) + "\n" +
	    	"Type of true|false: " + (typeof true) + "\n" +
	    	"Type of number:  " + (typeof 10) + "\n" +
	    	"Type of function:  " + (typeof a) + "\n" +
	    	"Type of x:  " + (typeof x) + "\n"

	);
	function a(){};
})();


console.log("=======Example for: Number() and new Number()=====");

var value = "25";
var number = Number(value)
console.log(typeof number, + "  " + number)

var number = new Number(value)
console.log(typeof number, + "  " + number)



console.log("=======Different between boolean primitive type and Bolean Object =====");
var falseObject = new Boolean(false);
var result = falseObject && true;
console.log("falseObject && true: " + result) //true


var falseValue = false
var result = falseValue && true;
console.log("falseValue && true: " + result) //false


console.log("falseValue instanceof Boolean: " + (falseValue instanceof Boolean)) //false
console.log("falseObject instanceof Boolean: " + (falseObject instanceof Boolean)) //true
