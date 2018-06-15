/**===========The Prototype Pattern==========*/
/** The benefit of prototype is type all its properties and methods are shared */
function Person(){}

Person.prototype.name="Nicholas"
Person.prototype.age = 29
Person.prototype.job = "Software Engineer"
Person.prototype.sayName= function(){
    console.log(this.name)
}

var person = new Person()
console.log("----Person.prototype-----------")
console.log(Person.prototype)
console.log("----Person.prototype.constructor-----------")
console.log(Person.prototype.constructor)
console.log("----Person.prototype.constructor-----------")
person.sayName()

//console.log(Object.getOwnPropertyDescriptor(person))

/**============= How Prototype Work ============*/
/**When a function is Created, */
console.log("====Get Prototype====");
console.log(Object.getPrototypeOf(person))

person.name = "Greg"
console.log("====Get Property====");
console.log(person.name)
delete person.name  // delete person.name
console.log("====Get Property====");
console.log(person.name)
console.log("====hasOwnProperty====");
var person1 = new Person()
var person2 = new Person()
person1.name = "Greg"
console.log("person1.name has own property:" + person1.hasOwnProperty("name"));
console.log("person2.name has own property:" + person2.hasOwnProperty("name"));
delete person1.name  // delete person.name
console.log("delete person1.name");
console.log("person1.name has own property:" + person1.hasOwnProperty("name"));
console.log(person1)
console.log(person1 instanceof Person)
console.log("========= Prototype and in operation============")
console.log("name in person1: " + ("name" in person1))
console.log("name in person2: " + ("name" in person2))

/** Test if a property is prototype */
function hasPrototypeProperty(object,name){
    return !object.hasOwnProperty(name)&&(name in object)
}

/**============== Object.keys=================*/
var keys = Object.keys(Person.prototype)
console.log("------Person.property keys -------------");
console.log(keys);
var p1 = new Person()
p1.name = "Rob"
p1.age = 31
console.log(Object.keys(p1))
console.log("------Object.getOwnPropertyNames(Person.property) -------------");
keys = Object.getOwnPropertyNames(Person.prototype)
console.log(keys);
/**======= Combine Constructor and ProtoType Pattern ====*/
/*
 * The constructor pattern define instance properties
 * The prototype pattern define methods and shared properties
 *
 */

function Person(name, age, job){
    this.name = name;
    this.age = age;
    this.job = job;
    this.friends = ["Shelby","Court"];
}

Person.prototype = {
    constructor: Person,
    sayName: function(){
        return this.name;
    }
}

var person1 = new Person("Nicholas",28,"Software Developer");
var person2 = new Person("Grey",27,"Doctor");
person1.friends.push("van")
console.log("----- Combine Constructor and Prototype ---------")
console.log(person1)
console.log(person2)

/** ======Dynamic Prototype =====*/
function Person(name, age, job){
    //properties
    this.name = name;
    this.age = age;
    this.job = job;
    this.friends =["Shelby","Court"]
    //methods
    if (typeof this.sayName != "function"){
       Person.prototype.sayName = function() {
          console.log("---" + this.name)
       }

    }
}

console.log("---- Dyanmic Prototype ----")

var person1 = new Person("Nicholas",28,"Software Developer");
var person2 = new Person("Grey",27,"Doctor");
person1.friends.push("van")
console.log(person1)
console.log(person2)
console.log("-------Call sayName-------")
person1.sayName()
person2.sayName()

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


