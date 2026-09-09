console.log(declaredGreet("Ana de Armas"))

// function declaration
function declaredGreet(name){
    return `Hello ${name}, Welcome to FoodDash`;
}

// function expression

const expressGreet = function(name){
    return `Hi ${name} your order is been prepared`;
};

const arrowGreet = (name) => `Hey ${name} order is on the way`;

console.log(expressGreet("Anne Hathaway"));
console.log(arrowGreet("Brad Pitt"));

const APP_Name = "FoodDash";
let totalOrders = 0;

function processOrder(price, dishName){
    let tax = 0;
    function calculateTax(){
        const gst = 0.18;
        const service = 0.15;
        tax = price*gst + price*service;
        return tax;
    }
    return `Tax on ${dishName} is `+ calculateTax() ;
}

// console.log(processOrder(1500, "1 KG Biryani"));
// console.log(calculateTax()); // this won't work because it is defined in the inner block of processOrder

// for(var i = 0; i<3 ; i++){
//     setTimeout(function(price, dishName){
//         let tax = 0;
//     function calculateTax(){
//         const gst = 0.18;
//         const service = 0.15;
//         tax = price*gst + price*service;
//         return tax;
//     }
//     console.log(i +` Tax on ${dishName} is `+ calculateTax()) ;
//     }, 3000, 1000, "somthing"); 

// }// output: three times 3 Tax on somthing is 330


// for(let i = 0; i<3 ; i++){
//     setTimeout(function(price, dishName){
//         let tax = 0;
//     function calculateTax(){
//         const gst = 0.18;
//         const service = 0.15;
//         tax = price*gst + price*service;
//         return tax;
//     }
//     console.log(i +` Tax on ${dishName} is `+ calculateTax()) ;
//     }, 3000, 1000, "somthing"); 

// } // output: 0 Tax on somthing is 330 1 Tax on somthing is 330 2 Tax on somthing is 330

// // this happens because var is global scoped and let is blocked scoped, so for each new iteration var value changes and after the setTimeout it prints on evalue and for let for each iteration unique i is defined

let initaialItems = [
    {name: "Chicken Tandoori ", quantity : 3, price:600},
    {name: "Paneer Tikka", quantity : 4, price:500},
    {name: "Mutton Biryani ", quantity : 4, price:720},
    {name: "Special Pulav Veg", quantity : 4, price:480},
    {name: "Biscoff ChessCake", quantity : 7, price:300}
]

function createOrder(Items){
    let totalCost = 0;
    function addItem(dish){
        initaialItems.push(dish);
        console.log(Items)
    }
    function removeItem(dishName){
        for(let i = 0; i<Items.length; i++){
            const Dish = Items[i];
            if(Dish.name == dishName){
                Items.splice(i,i);
            }
        }
        console.log(Items)
    }
    function getTotal(){
        
        for(let i = 0; i<Items.length; i++){
            const Dish = Items[i];
            function calculateTax(){
                let price = Dish.price*Dish.quantity;
                const gst = 0.18;
                const service = 0.15;
                tax = price*gst + price*service;
                return tax+price;
            }
            totalCost = totalCost + calculateTax();

        }
        return totalCost
    }
    addItem({name: "Veg Crispy", quantity : 4, price:320});
    // removeItem("Mutton Biryani 1 KG")
    console.log(getTotal());

}

createOrder(initaialItems);

const Stock = [
    {name : "Chicken Tandoori", quantity:20 },
    {name : "Mutton Biryani", quantity: 24},
    {name : "Paneer Tikka", quantity: 18},
    {name : "Biscoff CheesCake", quantity: 32},
    {name : "Veg Crispy", quantity: 12},
    {name : "Chicken Chilly", quantity: 21},   
    {name : "Egg Curry", quantity: 18},
    {name : "Special Pulav Veg", quantity: 21}
]

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));


async function checkStock(dish){

    await delay(800);

    for(let i = 0; i<Stock.length; i++){
        const DISH = Stock[i];
        if(DISH.name === dish && DISH.quantity > 0){

            const randomId = Math.floor(Math.random() * 90000) + 10000;   

            return {
            message: `${dish} is there in stock`,
            orderId: randomId
            };
        }
    }
    throw new Error(`${dish} doesn't exist in Stock`);
}
// async function run(){
//     try{
//         const result = await confirmPayment(34);
//         console.log(result);
//     }catch (error){
//         console.log("Failed : " + error);
//     }
// }
// run();

async function confirmPayment(orderId){
    await delay(600);

    if(orderId > 10000 && orderId < 99999){
        return {
            message : "payment successful",
            orderId : orderId
        };
    }

    throw new Error("OrderId in Valid");
}

async function riderDispatched(oredrId){
    await delay(1000);

    return `Rider is on the way for oredr ${oredrId}`
}

function ProcessOrder(dishName){
    return checkStock(dishName)
        .then((result) => {
            console.log("Step 1 : " + result.message);

            return confirmPayment(result.orderId);
        })
        .then((payRes) => {
            console.log("Step 2 :" + payRes.message);

            return riderDispatched(payRes.orderId);
        })
        .then((dispatchMess) => {
            console.log("Step 3 : " + dispatchMess);
        })
        .catch((error) => {
            console.error("Order Failed : " + error);
        })
        .finally(() => {
            console.log("Do write a review of your experience");
        })
}

ProcessOrder("Chicken Chilly")