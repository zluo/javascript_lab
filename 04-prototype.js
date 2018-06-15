
/**====== Parasitic Constructor Pattern ====
 *The parasitic pattern is a fallback pattern when the other patterns fail.
 */

function Person(name, age, job){
  var o = new Object()
  o.name = name;
  o.age = age;
  o.jbo = job;
  o.sayName = function () {
    console.log(this.name)
  }

  return o
}

/** This pattern will allow you to create constructors for objects that may not be possilbe access */

function SpecialArray(){
    //Create the array
    var values = new Array()
    values.push.apply(values, arguments);

    //assign the method
    values.toPipedString = function (){
      return this.join("|")
    }
    return values;
}

var colors = new SpecialArray("red","blue","green")
console.log("---- SpecialArray.toPipedString()-----")
console.log(colors.toPipedString())


