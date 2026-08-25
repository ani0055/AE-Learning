const cart = ["MacBook M-5 pro", "Iphone 17 pro", "Apple Earbuds", "Charger"];

createOrder(cart).then(function(orderId){
    console.log(orderId);
    return orderId;
    // proceedToPayment(orderId);
})
.then(function(orderId){
    return proceedToPayment(orderId);
})
.then(function(paymentInfo){
    console.log(paymentInfo);
})
.catch(function (err){
    console.log(err.message); //gracefully handling the error
}) // Catch handle all er ror which will be above him 
.then(function(){
    console.log("No matters what happens I will be called")
})

function createOrder(cart){
    const pr = new Promise(function (resolve, reject){
        // createOrder
        // validateCart
        //orderId
        if(!validateCart(cart)){
            const err = new Error("Cart is not valid");
            reject(err);
        }

        //Logic to create OrderId
        const orderId = "12345"
        if(orderId){
            resolve(orderId);
        }
    });

    return pr;
}

function proceedToPayment(orderId){
    // Logic
    return new Promise(function(resolve, reject){
        resolve("Payment Successfull");
    });
}

function validateCart(cart){
    return true;
}



//TimeOuts handeling
// Event Handler
// Modules

// drawback of 