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

/** ==== named function expressions ==== **/

var factorial = (function f(num){
    if (num <=1){
        return 1;
    }else {
        return num * f(num - 1)
    }
  })

console.log(factorial(5))

/** ===== Closures ===== */
/** Closures are functions that have access to variables from another funcion's scope. */

function createComparisonFunction (propertyName){

    return function(object1, object2){
       var value1 = object1[propertyName];
       var value2 = object2[propertyName];

       if (value1 < value2){
          return -1;
       } else if (value1 > value2){
          return 1;
       } else {
          return 0;
       }

    }
}

/** ====== Closures and Variable ====== */
function createFunctions(){
   var result = new Array()

   for (var i=0; i<10; i++){
      result[i] = function(){
        return i;
      };
   };

   return result;
}


/** ====== Closures and Variables ====== */

function createFunctions1(){
   var result = new Array()

   for (var i=0; i<10; i++){
      result[i] = function(num){
          return function(){
            return num;
          }
      }(i)
   };

   return result;
}
console.log("----------- Closures and Variables ----------")
console.log(createFunctions()[0].call())
console.log(createFunctions1()[0].call())


/**====== The this object =====**/
var name = "The Window"

var object = {
    name : "My Object",
    getNameFunc : function(){
        return function(){
            return this.name
        }
    }
}
console.log("------- This object --------")
console.log(object.getNameFunc()())


/**====== The this object =====**/
var name = "The Window"

var object = {
    name : "My Object",
    getNameFunc : function(){
        var that = this
        return function(){
            return that.name
        }
    }
}
console.log("------- That object --------")
console.log(object.getNameFunc()())


/** ======= Memory Leaks ======= */

























