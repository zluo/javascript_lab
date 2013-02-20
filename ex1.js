(function(obj){
	var o={x:1, y:0};

	
	alert(  "======Test typeof ========" +"\n" +
			"Type of String: " + (typeof "dsf") + "\n" +
	    	"Type of null: " + (typeof null) + "\n" +
	    	"Type of true|false: " + (typeof true) + "\n" + 
	    	"Type of number:  " + (typeof 10) + "\n" +
	    	"Type of function:  " + (typeof a) + "\n" +
	    	"Type of x:  " + (typeof x) + "\n" 
			
	);
	function a(){};
})(this);