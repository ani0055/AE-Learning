function getChai(kind: string | number){
    if(typeof kind === 'string'){
        return `Making ${kind} chai...`;
    }
    return `Chai Order: ${kind}`;
} 
// Above is the example of type narrowing i.e. we know the dataType of variable so that we can apply the required functions/ methods
// and the example used is exhaustive checks

function serveChai(msg? : string){ // msg is optional it can be or can't be
    if(msg){
        return `Serving ${msg}`;
    }
    return `Serving default chai`;
}

// Custom Type
type ChaiOrder = {
    type : string
    sugar : number
}

// user-defined type guard using a type predicate — obj is ChaiOrder
function isChaiOrder(obj:any):obj is ChaiOrder{
    return(
        typeof obj == "object" &&
        obj != null &&
        typeof obj.type === "string" &&
        typeof obj.sugar === "number"
    )
} // type guard if returns true then the obj can be treated as ChaiOrder and the .type and .sugar can be used

function serveOrder(item : ChaiOrder | string){
    if(isChaiOrder(item)){
        return `Serving ${item.type} chai with ${item.sugar} sugar`
    }
    return `Serving custom chai: ${item}`
}

const SpecialChai: ChaiOrder = {
    type : "Special",
    sugar : 2
}

console.log(serveOrder(SpecialChai));


// User Defined types
type MasalaChai = {type: "Masala"; spiceLeve : number};
type GingerChai = {type: "Ginger"; amount : number};
type ElaichiChai = {type: "Elaichi"; aroma : number};

type chai = MasalaChai | GingerChai | ElaichiChai;

function MakeChai(order: chai){
    switch (order.type) {
        case "Masala":
            return `Masala Chai`
            break;

        case "Ginger":
            return `Ginger Chai`
            break;

        case "Elaichi":
            return `Elaichi Chai`
            break;
    
        default:
            break;
    }
}