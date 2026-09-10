const cart = ["MacBook M-5 pro", "Iphone 17 pro", "Apple Earbuds", "Charger"];

// CallBack Hell
// api.createOrder(cart, function(){

//     api.proceedPayment(function(){
        
//         api.showOrderSummary(); // This is risky cause how knows what will happen like the function could have bugs, is called more than once, etc
                                   // This is unreliable
    
//     });

// })

// createOrder(cart, function(){
//     proceedToPayment(orderId);
// }); // orderId

// const promise = createOrder(cart); // promise is a empty object that will hold the data of what the createOrder(cart) will return
// Promise object is placeholder until we recive values from a asynchronous operation or A promise is an object representing the eventual completion or failure of an asynchronus operation  

// // Gives a control, and assurence that when as soon as a promise will have data it will call the proceedToPayment and will only call it once
// promise.then(function (orderId){
//     proceedToPayment(orderId);
// })

// const GITHUB_API = "https://api.github.com/users/ani0055";
// const user = fetch(GITHUB_API);

// A Promise has three states:
// 1.Pending – initial state, operation not finished
// 2.Fulfilled – operation completed successfully (resolve called)
// 3.Rejected – operation failed (reject called)

// user.then(function(data){
//     console.log(data);
// })
// promise brings trust 


// To replace the callback hell we can use promise chaining  example:
// createOrder(cart)
// .then(oredrId => proceedToPayment(oredrId))
// .then(paymentInfo => showOrderSummary(paymentInfo))
// .then(paymentInfo => updateBalance(paymentInfo));
console.log("a")
setTimeout(function(){
    console.log("ABC");
},5000)
function p(){
    const pr = new Promise(function(resole, reject){
        const message = "Hello";
    });
    return pr;
}

p().then(console.log("hello"));

console.log("fgh");


