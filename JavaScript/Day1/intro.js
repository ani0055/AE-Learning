// everything in the JS happens inside execution context(like a container
// in the EC there are two compartments 1 is Memory / Variable Enviroment and other is Code/Thread of execution)
// JS is a synchronous single threaded language

/* 
Execution context
| Memory | Code |
|        |      |
|               |
|               |
|               |
|               |
|               |
*/

// First phase in memory the variables and functions are defined. VAriables with undifined and Func with  whole code
// Phase 2 code executioon phase the values of variables is placed with the variables instead of undefined
// At the time of function calling a new execution context will becreated in code part and then the phase 1 will start in the new context
// then in the second phase the main part of the function will be executed it the new context code and then the value will be returned 
// after the execution the context gets deleted
// evreything is managed by the call stack which stores the execution contexts

var n = 51
function square (num) {
    var ans = num * num
    return ans
}

var sqn = square(n)
var sq19 = square(19)

console.log(sqn)
console.log(sq19)

// Hoisting is a JavaScript mechanism where variable and function declarations are moved to the top of their containing scope during the compilation phase, before code execution.
console.log(x)
getName()

var x = 7;

function getName(){
    console.log("Nichol Gupta")
}

console.log(getName)

// In phase 1 only variables and functions are scanned

var a ;
console.log(a)

if(a === undefined){
    console.log('a is undefined')
}else{
    console.log('a is defined')
}

// JS is a loosly typed language it assigns multiple datatypes to same variable eg. if a is int then later i can make it string