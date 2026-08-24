
function calculateArea(length, breadth){
    return length*breadth;
}

console.log(calculateArea(12,6));

var a = function calcArea(length, breadth){
    return length*breadth;
}

console.log(a(13,6));

const b = (length,breadth) => {
    return length*breadth;
}

console.log(b(6,8));

function greet(name, greeting){
    if(greeting == null){
        console.log('Hello ' + name);
    } else{
        console.log(greeting + " " + name);
    }
}

greet("Animesh", "Good Morning");
greet("Sumit");


// Return returns a value which can be stored in a variable and console.log() prints the input data
function calculateArea(length, breadth){
    return length*breadth;
}

let x = calculateArea(16,9);
console.log(x);

function calA(l, b){
    console.log(l*b);
}
calA(16,9);

// Q.6 output will be 30 10
// Q.7 output 10 20 30
// Q.8 outputs 10 20 30 we get this output because the values are stored in the lexical context of the function
// Q.9 we get the values of a as undefined and get a reference error for the valur of b since the let variables are not stored in the global object
// Q.10 yes they behave the same 
// Q.11 x = 10 works but y = 20 don't because the let is block scoped
// Q.12 output: 20 10. if we change the let to var in the inner block it will give error because of illegal shadowing
// Q.13 
function add(a,b){
    return a+b;
}
function sub(a,b){
    return a-b;
}
function multiply(a,b){
    return a*b;
}
function divide(a,b){
    return a/b;
}
function calculator(a,b,c){
    return c(a,b);
}

console.log(calculator(10,15,add));
console.log(calculator(31,26,sub));
console.log(calculator(23,15,multiply));
console.log(calculator(360,15,divide));


// Q.14
function myForEach(p,q){
    q(p);
}

function q(p){
    for(let i = 0 ; i<p.length; i++){
        console.log(p[i]);
    }
}

myForEach([1,2,3,4,5,6], q);

//Q.15 
function myMap(i,j){
    j(i);
    myForEach(i, q);
}
function j(i){
    for(let c = 0; c<i.length; c++){
        i[c] = i[c]*2;
    }
}
myMap([3,5,7,9,11,13],j)

// Q.16
function myFilter(i,j){
    return j(i);
}
function j(i){
    const output = []
    for(let c = 0; c<i.length; c++){
        
        if(i[c]%2 === 1) output.push(i[c]);
    }
    return output;
}

console.log(myFilter([1,2,3,4,5,15,60,45,21],j));

//Q.17
var count = 0;
function counter(){
    return ++count;
}
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());

//Q.18
function counte() {
  let count = 0; 

  return function() {
    count++; 
    return count;
  };
}

let counter1 = counte();
let counter2 = counte();

console.log(counter1()); // 1
console.log(counter1()); // 2

console.log(counter2()); // 1
console.log(counter2()); // 2   

