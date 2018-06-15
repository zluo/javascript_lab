/**===== Prototype Chaining ====*/
function SuperType(){
    this.property=true
}

SuperType.prototype.getSuperValue=function(){
    return this.property
}

// nherit from SuperType
function SubType(){
    this.subProperty=false
}

SubType.prototype= new SuperType()

SubType.prototype.getSubValue = function(){
    return this.subProperty
}

var instance = new SubType()
console.log(instance.getSuperValue())
console.log(instance.getSubValue())
console.log("1.---- Object.prototype ----")
console.log(Object.prototype)

/**==== Prototype and Instance relationships ====**/

/**==== Constructor Stealing ====*/

function SuperType(){
  this.colors=["red","blue","green"]
}

function SubType(){
  SuperType.call(this)
}

var instance1 = new SubType()
instance1.colors.push("black")
console.log(instance1.colors)

var instance2 = new SubType()
console.log(instance2.colors)

/**==== Passing Arguments ====*/

/**==== Combination Inheritance ====*/

function SuperType(name){
   this.name = name
   this.colors = ["red","blue","green"]
}

SuperType.prototype.sayName =function(){
        console.log(this.name)
   }

function SubType(name, age){
  SuperType.call(this,name)
  this.age =age
}

SubType.prototype.sayAge=function(){
    console.log(this.age)
}

console.log("\n---- Combination Inheritance ----")
var instance1 = new SubType("Nicholas", 29)
instance1.colors.push("black")
console.log(instance1.colors)
instance1.sayName()
instance1.sayAge()

var instance2 = new SubType("Greg", 27)
console.log(instance2.colors)
instance2.sayName()
instance2.sayAge()

/**==== Prototypal Inheritance ====*/
function object(o){
    function F(){}
    F.prototype = o;
        return new F();
}

var person = {
    name: "Nicholas",
    friends: ["Shelby", "Court", "Van"]
}

var anotherPerson = object(person)
anotherPerson.name = "Greg"
anotherPerson.friends.push("Rob")

var yetAnotherPerson = object(person)
yetAnotherPerson.friends.push("Barbie")

console.log("---- Prototypal Patten -----")
console.log(person.friends)

/**===== Object.create() offically support prototpyal pattern ====*/

var anotherPerson = Object.create(person)
anotherPerson.name="Greg"
anotherPerson.friends.push("Rob")

var yetAnotherPerson = Object.create(person)
yetAnotherPerson.name ="Greg"
yetAnotherPerson.friends.push("Barbie")
console.log("\n---- Prototypal Patten  Object.create()-----")
console.log(person.friends)
