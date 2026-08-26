const PI = 3.14
const g = 9.8

function add(a, b){
    return a+b;
}

function substract(a, b){
    return a-b;
}

function multiply(a, b){
    return a*b;
}

function divide(a, b){ // everything not exported is kept private by default
    return a/b;
}

export function toPower(a, b){ //named exports
    return a ** b;
}

export { add, multiply, PI };

