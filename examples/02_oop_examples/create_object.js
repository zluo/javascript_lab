/**
 * Create objects
 */

var person = new Object()
person.name="Nicholas"
person.age=29
person.job="Software Engineer"

person.sayName = function(){
    console.log(this.name)
}

person.sayName()

/**
 * Object literal notation
 */

var p = {
  name:"Nicholas",
  age:29,
  job:"Software Engineer",
  sayName: function(){
   console.log(this.name)
 }
}
console.log("==========Create object with literal notation ========")
p.sayName()

/**================Data Properties==================*/
/** [[Configurable]] , property maybe redefined by removing via delete, property attribute can be changed.
 *  [[Enumerable]],    If the property will be returned in a for-in loop.
 *  [[Writeable]],     If the property's value can be changed.
 *  [[Value]],         Contains the actual data value for the property.
 */

 /** To change property attribute, use Object.defineProperty() method  **/

 var person = {}
 Object.defineProperty(person, "name", {writable:false,value:"Nicholas"
 });//set property name read only

 console.log(person.name)
 person.name="Greg"
 console.log(person.name)

/**================Accessor Properties==================*/
/** [[Configurable]] , property maybe redefined by removing via delete, property attribute can be changed.
 *  [[Enumerable]],    If the property will be returned in a for-in loop.
 *  [[Get]],           The function to call when the property is read from.
 *  [[Set]],           The function to call when the property is written to.
 */

 /** To change property attribute, use Object.defineProperty() method  **/
 var book = {
    _year:2004,
    edition:1
 }

 Object.defineProperty(book, "year",{
    get:function(){
        return this._year
    },
    set:function(newValue){
        console.log("set() function is called")
        if (newValue >2004){
            this._year = newValue
            this.edition += newValue - 2004
        }
    }

 })
console.log("================Accessor Properties==================")
book.year = 2005
console.log("book.year: " + book.year +  "\nbook.edition: " + book.edition)

/**===========Defining Multiple Properties===========*/
var book1 = {_year:2004, edition:1}
Object.defineProperties(book1, {
   year:{
       get: function(){
         return this._year
       },

       set: function(newValue){
           if (newValue > 2004){
             this._year=newValue;
             this.edition +=newValue -2004
             console.log("set property is called")
           }
       }
   }
 }
)

console.log("================Define Multiple Properties==================")
console.log(book1)
book1.year = 2005
console.log(book1)
console.log("book1.year: " + book1.year +  "\nbook1.edition: " + book1.edition)

/**================ Legacy Accessor Methods =============*/
var book2 = {_year:2004, edition:1}
book2.__defineGetter__("year",function(){
    return this._year
})

book2.__defineSetter__("year", function(newValue){
   if (newValue >2004){
        this._year=newValue
        this.edition +=newValue -2004
   }
})

console.log("================Legacy Getter and Setter==================")
console.log(book2)
book2.year = 2005
console.log(book2)
console.log("book2.year: " + book2.year +  "\nbook2.edition: " + book2.edition)

/**==========Read Property Attributes===========*/
console.log("=============getOwnPropertyDescriptor===========")
var descriptor = Object.getOwnPropertyDescriptor(book, "_year");
console.log("property year descriptor", descriptor)
var descriptor1 = Object.getOwnPropertyDescriptor(book, "year");
console.log("property _year descriptor", descriptor1)

//This example demonstrate that if property is define by defineProperties, the property attribute can't modify.
var book1 = {}
Object.defineProperties(book1, {
   _year:{                //by default, this property is set to read only
       value:2004
   },
   edition:{
       value:1
   },
   year:{
       get: function(){
         return this._year
       },

       set: function(newValue){
           if (newValue > 2004){
             this._year=newValue;
             this.edition +=newValue -2004
             console.log("set property is called")
           }
       }
   }
 }
)

console.log("=============getOwnPropertyDescriptor, test if _year and edition if writtable===========")
var descriptor = Object.getOwnPropertyDescriptor(book1, "_year");
console.log("property year descriptor", descriptor)
var descriptor1 = Object.getOwnPropertyDescriptor(book1, "year");
console.log("property _year descriptor", descriptor1)
var descriptor1 = Object.getOwnPropertyDescriptor(book1, "edition");
console.log("property edition descriptor", descriptor1)


