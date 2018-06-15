/**==== Prototype Review =====**/
/**
 * Each function have a prototype */

function Bee(name){
}

Bee.prototype={
    constructor: Bee,
    name:"little"
}

console.log("\n1.----Bee.prototype:")
console.log(Bee.prototype)
console.log("\n2.----Bee.prototype.constructor:")
console.log(Bee.prototype.constructor)

/** How a instance access prototype */
var bee = new Bee()
console.log ("\n3.---- bee.contructor----")
console.log(bee.constructor)
console.log ("\n4.---- bee.prototype----")
console.log(bee.prototype)
console.log ("\n5.---- bee.contructor.prototype----")
console.log(bee.constructor.prototype)
console.log ("\n6.---- Bee.contructor----")
console.log(Bee.constructor)
console.log ("\n7.---- Object.getPrototypeOf----")
console.log(Object.getPrototypeOf(bee))

/** ======== Test property Exist ==========*/
/**
 * 1. If property exist? if (name in bee)
 * 2. If instance has his own property (Object.hasownProperty(bee))
 * 3. If property is come from prototype?
 ===========================================*/
 var littleBee = new Bee()
 var bigBee = new Bee()
 bigBee.name="big"
 console.log ("\n 8.----- If name in bee ----")
 console.log("name" in bigBee)

 console.log ("\n 9.----- hasOwnProperty() ----")
 console.log(littleBee.hasOwnProperty("name"))
 console.log(bigBee.hasOwnProperty("name"))

function hasPrototypeProperty(object, property){
   return !object.hasOwnProperty(property)&&(property in object)
}

