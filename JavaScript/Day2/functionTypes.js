a();
// b(); // gives an Uncaught error

// Function Statement aka Function Declaration
function a(){ // This function is defined hoistically by JS engine
    console.log('a called');
}

//Function Expression 
var b = function(){  // This function is defined as a variable hence it isn't allocated hoistically
    console.log('b called'); 
}

// Anonymous Function (Functions without any name mainly are assigned as the values) (Can't be used in function statemen) 
// function () { // Gives a error
// }

// Named Function Expression
// when an function expression has a named function 
var c = function x(){
    console.log('Named Function Expression c'); // iif we call x() we get error Uncaught reference error because the x() is not a function in outer scope
}
c();

// Difference between Parameters and Arguments 
// parameters are the local variable in a function
// arguments are the values of parameter passed in a function

// First Class Functions
/* first-class functions are functions treated as first-class citizens, meaning they are treated exactly like any other variable 
or value in the language.  This capability allows functions to be assigned to variables, passed as arguments to other functions, 
returned from other functions, and stored in data structures like arrays or objects. */
