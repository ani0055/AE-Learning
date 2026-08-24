// Arrow function are shorter syntax for writing  functions in JS, introduced in ES6
// Basic Syntax
const functionName = (parameters) => {
    // body
};

// Function
// function add(a,b){
//     return a+b;
// }

//Arrow Function
const add = (a,b) => {
    return a+b;
}
console.log(add(81,62));

// If there is single parameter then it will be implicitl returned 
const sq = x => x*x;

console.log(sq(8));

// Arrow function do not have their own 'this' instead they inherit from the surrounding lexical scope(lexical this)

const stud = {
    name: "Animesh",

    greet: function() {
        console.log(this.name);
    }
};

stud.greet();

const student = {
    name: "Animesh",

    greet: () => {
        console.log(this.name);
    }
};

student.greet();

// In execution context
/*
    Outer Execution Context
    │
    │ this → something
    │
    └── Arrow Function Execution
        │
        └── this
                ↓
            inherited from outer context
*/


// Arrow functions don't have there own arguments

function testN(a,b){
    console.log(arguments)
}
// const test = (a,b) => {
//     console.log(arguments)
// }

testN(10,20)
// test(10,20)// give error uncaught reference

const a = function (){
    
}