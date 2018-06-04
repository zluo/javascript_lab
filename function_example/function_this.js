/*
The other special object is called this. It is a reference to the context object that the function is operation on.
The value of this is not determined until the function is called.
*/
var color="red"
var o = {color: "blue"}

/** function is global**/
function sayColor(){
    return this.color;
}

console.log(sayColor()); //red

/** function attached to **/
o.sayColor = sayColor
console.log(o.sayColor()) // blue
