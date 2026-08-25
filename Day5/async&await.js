// async and await are used to handle promises


const p1 = new Promise((resolve, reject) => {
    setTimeout(function (){
        resolve("Promise p1");
    }, 10000);
    
})

const p2 = new Promise((resolve, reject) => {
    setTimeout(function (){
        resolve("Promise p2");
    }, 5000);
    
})

//async function always return promise and if we don't return promise then it will
// async function getData(){
//     return p;
// }

async function handlePromise(){
    // JS engine waits for promise to resolve
    console.log(" Something ")
    const val1 = await p1;
    console.log("Hola JS1")
    console.log(val1);
    // they both will print simultaneously after 5 secs prove of async in JS 
    const val2 = await p2;
    console.log("Hola JS2")
    console.log(val2);
    // awaits work in sequential order like if we call promise1 which takes 10 sec and promise2 which takes 5 secs
    // then both will work after 10 secs but if p1 is 5sec and p2 is 10sec then pi will work in 5sec and p2 after 10sec

    
}

// without using await the nothing waits evrything happens but when we use the await the engine waits for the promise to resolve

handlePromise();

// const data = getData();
// console.log(data);

// data.then(res => console.log(res)); // to get data out of the promise

// await is a keyword that can only be used inside a async function 

// Real-World Example:
const API_URL = "https://api.github.com/users/ani0055";

async function handlePromise1(){

    try{
        const data = await fetch(API_URL);
        const jsonValue = await data.json();  
        console.log(jsonValue);
      
    }catch(err){
        console.log(err.message);
    }


    
}

handlePromise1();