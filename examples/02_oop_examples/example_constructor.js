/**============== Factory Pattern ============*/
function createPerson(name,age,job){
    var o = new Object()
    o.name = name
    o.age = age
    o.job = job
    o.sayName = function(){
      console.log(this.name)
    }
    return o
}

console.log("===Factory pattern example===")
var person1 = createPerson("Nicholas",29, "Software Engineer")
var person2 = createPerson("Greg",27, "Doctor")
console.log(person1)
console.log(person2)


/**============== Constructor Pattern ============*/
/**
 * 1. Create a object
 * 2. Assign this value of constructor to the new object
 * 3. Execute the code inside the constructor
 * 4. Return the new object
 *
*/

function Person(name,age,job){
    this.name = name
    this.age = age
    this.job = job
    this.sayName = function(){
      console.log(this.name)
    }
}

console.log("===Constructor pattern example===")
var person1 = new Person("Nicholas",29, "Software Engineer")
var person2 = new Person("Greg",27, "Doctor")
console.log(person1)
console.log(person2)
console.log("=====Each instance has a constructor property")
console.log(person1.constructor==Person)
console.log(person1.constructor==Person)
console.log(person1.constructor==person2.constructor)
console.log("======The constructor property was orignally intended for use in identifying the object type")
console.log(person2 instanceof Person)//true
/**=========== Constructor as Functions ===========*/
console.log("=========== Constructor as Functions ===========")
// use as a constructor
var person = new Person("Nicolas",29,"Software Engineer")
person.sayName();

// use as a function
Person("Creg", 27,"Doctor")
sayName()

// call in the scope of another object
var o = new Object()
Person.call(o,"Kristen",35,"Nurse")
o.sayName()

console.log(o instanceof Person)//true

/**===== The prototype Pattern *========*/
console.log("========== The prototype Pattern =========")
console.log("The benefit of prototype is it only keep one instance")
function Person(){
}
Person.prototype.name = "
