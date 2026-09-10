// Browser contains a JS engine which is responsiblse for running the frontend
// We use Web APIs to access the resources needed by the JS e.g.: setTimeout(), DOM APIs, fetch(), LocalStorage, console, location
/*
Web APIs
--------------------------------
|                              | 
[window]                       |
|                              |
|  -> setTimeout()             |
|  -> DOM APIs                 |
|  -> fetch()                  |
|  -> LocalStorage             |
|                              |
|                              |
|                              |
--------------------------------
*/

// DOM(Document Object Model) access the html 


console.log("Start");

setTimeout(function cb(){
    console.log("CallBack");
},5000);

document.getElementById("btn")
.addEventListener("click", function cb(){
    console.log("CallBack from Button");
});

console.log('End')

// As we can see that the set timeout is not the part of JS(Execution Context) it is the part of window(Browser)
// so the setBack timer tiks in the browser and once timer is finished then the CallBack function is passed into the callBack Queue
// EventLoop's function is to check the callback queue and pass the functions in it to the call stack(JS) 

/*
The event loop is a mechanism in JavaScript that allows the single-threaded language to handle asynchronous operations in a non-blocking manner.  
It works by continuously monitoring the call stack (which processes synchronous code) and the event queue (which holds asynchronous tasks like timers, API calls, and user events). 
*/

// EventLoop only sends a function in to the class stack when it is empty.
// Before the CallBAck Queue the priority is given to the microtask queue(list the functions which comes from promises or mutation observer)

// Macrotask queue 