// Issues are because setTimeout will only execute after the callstack is empty so if there are functions in the callstack while the setTimeouts time is excausted it will have to wait until the stack in empty
console.log("Start");


setTimeout(function () {
    console.log('TimeOut');
},1000);

let startDate = new Date().getTime();
let endDate = startDate;

while(endDate <= startDate + 10000) {
    endDate = new Date().getTime();
}

console.log("End");

/*
What will be the output?

console.log("Start");

setTimeout(function(){
console.log("Something");
}, 0);

console.log("End");
*/