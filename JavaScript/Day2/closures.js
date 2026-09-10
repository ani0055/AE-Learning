// A function bind together with its lexical scope is a Closures

// A closure is a function bundled together with references to its surrounding state, or lexical environment, 
// allowing an inner function to access variables from its outer scope even after the outer function has finished executing.

// We can pass a function as a parameter/argument inside another function, we can assign a variable with a function
// also we can return the functions from function

function x(){
    var a = 7;
    function y(){
        console.log(a);
    }

    return y; //not only the function but also its clouser was returned
}

var z = x();
console.log(z);

z(); // functions when returned from the function it maintains its lexical scope

// Uses of Clousers 
/*
-> Module Design patterns
-> Currying
-> Functions like once
-> memoize
-> maintaning state in async world
-> setTimeouts
-> Iterators
-> etc.
*/

// setTimeout() schedules a one time execution of a function or code snippet after a specified delay in milliseconds
// we have to pass a callback function in the setTimeout

function a(){
    var i = "Kaise ho";

    setTimeout(function() {
        console.log(i); // Printed after 3 secs    
    }, 2000);

    console.log("Hello") // this printed immedeatly after we run the program because JS doesn't wait for execution
}

a();

function greet(name) {
  console.log(`Hello, ${name}!`);
}
setTimeout(greet, 3000, "Tejas");

for(var i = 1; i<=5 ; i++){{ 
    setTimeout(function(){
        console.log(i); // this prints 6 5 times beacuse of i valuses keep on changing before the timer is executed
    },i*1000);
}}

// to solve this we will use closures 
for(var i = 1; i<=5 ; i++){{ 
    function m(i){
        setTimeout(function(){
        console.log(i); //  here for each changing i we are createing new block 
    },i*1000 + 6000);
    }
    m(i);
}}

for(let i = 1; i<=5 ; i++){{ 
    setTimeout(function(){
        console.log(i); // this works cause let uses block scope so each time a loop is run each time we get a new block for i 
    },i*1000);
}}

