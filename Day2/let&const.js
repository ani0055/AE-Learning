// console.log(b)

let a = "Manmath"

{var a = 10
    console.log(a)
}

console.log(a)
var b = 100

const c = 3.14
console.log(c)

// let and const are not stored in the global object 
// temporal dead zone is the time from the hoisting of the let/const till the value allocation. Hence we can't access it with window and this
// let and const can be redecleared (Can be redeclared inside a different block)
// const has to be declared in the same line as the line of initialization

/* 
                 GLOBAL ENVIRONMENT
                         │
             ┌───────────┴───────────┐
             │                       │
             ▼                       ▼
    Object Environment       Declarative Environment
         Record                     Record
             │                       │
             ▼                       ├── b → 20
          window                    └── c → 30
             │
             └── a → 10
*/

// Block (Also known as Compound Statement)
{} // a block (mainly used to grouping multiple js statement together)
//Example:
if(true){
    console.log('Somthing');
    console.log('Anything');
    let c = "Buenos Dias";
    // alert(c);
}

// Block Scope is the all variables and functions that we can access inside this block
let q = 60

{
    var p = 10;
    let q = 20;
    const r = 30;
    console.log(q)// 20 example of shadowing
}

console.log(q) // 60 
console.log(r)

// let and const are block scoped i.e we can't access them outside the block

//Shadowing
// When a variable is initialized globally and at the same time in a block the, block variale shadows the global variable
// i.e. it takes the value defined in block when in the block

// When we try to shadow a let variable with var we get error which is a illegal shadowing but vice verse is ok