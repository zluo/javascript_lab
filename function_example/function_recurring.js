/** Recurring function avoid directly using its name **/
function factorial(num){
    if (num <=1){
        return 1;
    } else {
        return num * arguments.callee(num -1); // right way to call recurring
    }
}

var trueFactorial = factorial;

factorial = function(){
  return 5;
}

console.log(trueFactorial(5))
console.log(factorial(5))
