let subs: number | string = '1 Million'; // this is union i.e. we can assign multiple dataTypes to the variable

let apiRequestStatus: 'pending' | 'error' | 'success' = 'pending'; // gives us suggestion
apiRequestStatus = 'success';
// apiRequestStatus = 'done';

// any means we can assign any dataType to the the variable

const orders = ["12", "45", "70", "60", "100"];
let currentOrder: string | undefined;

for(let order of orders){
    if(order === "72"){
        currentOrder = order;
        break;
    }
}

console.log(currentOrder);