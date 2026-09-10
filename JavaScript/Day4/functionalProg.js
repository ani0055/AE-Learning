// A function which takes another function as an argument or returns another function is known as an Higher Order Function

//Functional programming (FP) in JavaScript is a declarative programming paradigm that treats computation as the evaluation of mathematical functions, prioritizing code that is pure, predictable, and easier to test. 

function x(){
    console.log("Hello, Good Morning");
}

function y(x){ // Higher Order Function
    x();
}

y(x);

const radii = [3,7,14,6];

// const calculateArea = function (radius){
//     const output = [];
//     for(let i = 0; i<radii.length; i++){
//         output.push(Math.PI * radii[i] * radii[i]);
//     }
//     return output
// }

// console.log(calculateArea(radii));
// The above code is to lenthy and doesn't follow DRY(Don't Repeat Yourself)

const area = function (radius){
    return Math.PI*radius*radius;
}

const circumference = function (radius){
    return 2*Math.PI*radius;
}

const diameter = function (radius){
    return 2*radius;
}

Array.prototype.calculate = function (logic){ // by using the Array.prototype we get to use calculate as an inbuilt function
    const output = [];
    for(let i = 0; i<this.length ; i++){ // this points to the Array we will be implementing function on
        output.push(logic(this[i]));
    }
    return output;
}

console.log(radii.calculate(area));
console.log(radii.map(area)); //  same as what we didi in calculate
// console.log("Circumference : " + calculate(radii, circumference));
// console.log("Diameters : " + calculate(radii, diameter));


// map()
// Map transforms every element in an array and returns a new array of the same length.
const arr = [4,9,16,72,38,128,61,55,111];

function double(x){
    return x*2;
}
console.log(arr.map(double));
console.log(arr);

function triple(x){
    return x*3;
}
console.log(arr.map(triple))

function binary(x){
    return x.toString(2);
}
console.log(arr.map(binary));

console.log(arr.map(function binary(x){
    return x.toString(2); // totally valid syntax in JS
}));

// fliter()
// Filter tests each element against a condition and returns a new array containing only the elements that pass.

function isOdd(x) {
    return x%2 == 1;
}

const output = arr.filter(isOdd);
console.log(output);

console.log(arr.filter((x) => x%2 === 0));

// reduce()
// Reduce executes a reducer function on each element to reduce the array to a single value, such as a sum, object, or string.

function findSum(arr){
    let sum = 0;
    for(let i = 0 ; i<arr.length; i++){
        sum = sum + arr[i];
    }
    return sum;
}

console.log(findSum(arr));

const Output = arr.reduce(function (acc, curr){ // here current(curr) is arr[i] and accumulator(acc) is the output result like sum, maxElement, etc 
    acc = acc + curr;
    return acc;
}, 0)

console.log(Output)

console.log(arr.reduce(function(max, curr){
    if(max < curr) max = curr;
    return max;
}))

const user = [
    {firstName : "Utkarsh", lastName : "Warekar", age : 32},
    {firstName : "Komal", lastName : "Shriwastav", age : 27},
    {firstName : "Sujata", lastName : "Patil", age : 43},
    {firstName : "Aamir", lastName : "Ashfaq", age : 24},
    {firstName : "Sam", lastName : "Joshep", age : 24}
]

const OutPut = user.reduce(function (acc, curr){
    if(acc[curr.age]){ //It checks if the current user's age (curr.age) already exists as a key in the accumulator object.
        acc[curr.age] = ++acc[curr.age];
    }else{
        acc[curr.age] = 1;
    }
    return acc;
},{}) // {} initializes the acc

console.log(OutPut);

console.log(user
    .filter((x) => x.age <30)
    .map((x) => x.firstName)); // Chaning of filter and map

