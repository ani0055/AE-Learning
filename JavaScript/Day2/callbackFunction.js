// A function passed into another function is a callback function
// A callback function is a function that is passed as an argument to another function and executed later.

setTimeout(function (){
    console.log('timer');
}, 3000);

function x(y){
    console.log('function x');
    y();
}

x(function y(){
    console.log('callback function y');
})

// Blocking the main thread means when we have a function/operation which needs alot of time to execute it is called as blocker

/*An event listener in JavaScript is a function that waits for a specific event (such as a click, keypress, or page load)
to occur on a DOM element and then executes a designated callback function in response. 
syntax: element.addEventListener(eventType, callbackFunction, useCapture)
*/

function attachEventListener(){
    let count = 0;
    document.getElementById("clickMe")
    .addEventListener("click", function xyz(){
        console.log('Buttom Clicked ' + ++count);
    });
}

attachEventListener()

