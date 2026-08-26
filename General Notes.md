1. Syntax

a. semicolons are optional
b. case sensitive

2. We can use the console.log() method to debug the code by printing the output in the console.

3. Variables 

-> Variables are used to store data that can be changed later
-> var key word is used to declare the variables in JS before ES6
-> JavaScript is a untyped language/loosely typed language which means variable can hold a value of any data type

4. Errors
-> Syntax: when we try to redeclare a let/const(error while writing syntax)
-> Reference : Can't access the variable either because it is not defined/ not initialized

5. DataTypes
-> string + anyDatatype here the JS converts anyDatatype to string and gives the result
-> JavaScript is a dynamically typed language like Python and Ruby. So, it decides the variable's data type at the runtime but not at the compile time. 
-> The typeof operator allows you to check the type of the variable. eg : typeof a 

6. Operators
-> Arethrmatic basic +, -, *, /, %, ** (to power), ++, --.
-> Comparision ==, !=, === (checks value and the type), !==, >, <, >=, <=.
-> Logocal &&, ||, !
-> BitWise &, |, ^(XOR), ~(NOT), <<(left shift), >>(right shift).


7. for in loop
-> A while statement in JavaScript creates a loop that executes a block of code repeatedly, as long as the specified condition is true
-> Syntax:
    for (variableName in object) {
    statement or block to execute
    }

8. for of loop
-> The for...of loop in JavaScript is used to traverse elements of the iterable object.
-> Syntax:
    for (element of iterable) { 
        // loop body
    }
9. fetch()
-> The global fetch() method takes a URL as its primary argument and returns a Promise that resolves to a Response object.
-> fetch() => Response.json() => jsonValue

10. await and async
-> async is a keyword used before function declaration which has 2 works 1. return promise and 2. allows use of await inside it
-> await keyword pauses a async function until the promise is settled then returns its result
-> eg:
        function fetchUser(id) {
        return new Promise(resolve => {
            setTimeout(() => resolve({ id, name: "Alice" }), 1000);
        });
        }

        async function main() {
        console.log("Start");
        const user = await fetchUser(1);   // ⏸ pauses here ~1 second
        console.log(user);                 // { id: 1, name: "Alice" }
        console.log("End");
        }

        main();
-> await is essentially syntax sugar over .then() chaining, but written like synchronous code.

11. Microtask and MacroTask(callback queue) Queue
-> priority order:
                    Synchronous code → ALL Microtasks → ONE Macrotask → ALL Microtasks → ...
-> MicroTask Queue:
Tasks here are processed immediately after the current script/sync code finishes 
includes:
.then(), .catch(), .finally(), await, MutationObserver, etc

-> Macrotask Queue(Callback Queue):
Callbacks here wait until the current macrotask and all microtasks are done.
includes:
setTimeouts(), setInterval(), fetch(), Node.js, UI Rendering, etc

-> Example:
console.log("1"); // sync

setTimeout(() => console.log("2"), 0);       // macrotask

Promise.resolve()
  .then(() => console.log("3"))              // microtask
  .then(() => console.log("4"));             // microtask

console.log("5");                            // sync

output: 1 5 3 4 2

12. Event Handlers:
-> An event handler is a function that executes in response to an event such as user click, keypress, page load, etc
-> Working:
The browser (or Node.js) detects something happening → creates an event object → looks for registered handler functions → calls them.
-> e.g.:
// Three ways to register event handlers

// 1. addEventListener (recommended)
const button = document.querySelector("#myBtn");

button.addEventListener("click", function handleClick(event) {
  console.log("Button clicked!", event.target);
});

// 2. Property assignment
button.onclick = () => console.log("clicked");

// 3. Inline HTML (not recommended)
// <button onclick="alert('hi')">Click</button>

13. Modules
-> A module is simply a file containing reusable code that has its own scope — its variables, functions, and classes are private by default unless explicitly exported.
-> Modules solve the problem of organizing code as applications grow, replacing the old practice of dumping everything into global scope with multiple <script> tags.
-> A module's code runs only once, no matter how many times it's imported:
Even imported by 10 files → executed once → everyone shares the same instance. This makes modules perfect for shared state:
-> Imports are live views of the exported variable, not snapshots:
-> Import/export statements must be at the top level — they can't be inside if blocks or functions:

