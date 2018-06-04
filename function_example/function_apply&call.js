/*
The apply() pass arguments or a Array to the funciton
*/
function sum(num1, num2) {
  return num1 + num2;
}

function callSum1(num1, num2){
   sum.apply(this, arguments);
}

function callSum2(num1, num2){
    return sum.apply(this, [num1, num2])
}

console.log(callSum1(10,10))
console.log(callSum2(10,10))

/**
The call() method exhibits the same behavior as apply(), but arguments are passed to it differently.
The first argument is the this value, the remaining arguments  are passed directly into the function
**/

function callSum(num1, num2){
   return sum.call(this, num1, num2)
}

console.log(callSum(10,10));

/**
The decision to use either apply() or call() depends solely on the easiest way for you to pass into the function.
The true power is pass the this object.
**/

color ="red"
var o = {color: "blue"};

function sayColor(){
  console.log(this.color)
}

sayColor();          // red
sayColor.call(this)  // red
sayColor.call(o)     // blue

/**
bind() method creates a new function instance whose

