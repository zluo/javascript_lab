/**
 * Examples of manipulate subString
 * such as slice(), substr(), subString
 * for slice() and subString(), the second arguments is the stop position( exclude the stop position)
 * for substr(), the second arguments is the length of substring.
 */

var stringValue = "Hello world";
console.log("======Examples of Manipulate subStrings=====")
console.log("slice(3): " + stringValue.slice(3));//"lo world"
console.log("substring(3): " + stringValue.substring(3));//"lo world"
console.log("sbustr(3): " + stringValue.substr(3)); //"lo world"

console.log("slice(3,7): " + stringValue.slice(3,7));//"lo wo"
console.log("substring(3,7): " + stringValue.substring(3,7));//"lo wo"
console.log("sbustr(3,7): " + stringValue.substr(3,7)); //"lo worl"


console.log("======For slice, negative means from right side=====")
console.log("slice(-3): " + stringValue.slice(-3));//"lo world"
console.log("slice(-3,7): " + stringValue.slice(-3,-7));//"lo world"
console.log("======For substring, negative means 0 =====")
console.log("substring(-3): " + stringValue.substring(-3));//"lo world"
