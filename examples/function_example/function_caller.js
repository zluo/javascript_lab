/*
The function object has a special property: caller, means who called this function
*/
function outer () {
    inner();
}

function inner() {
   console.log("Caller is " + arguments.callee.caller);
}

outer();
inner();

