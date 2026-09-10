// Scope is means a specific variable or function in the code
var e = 10
function a(){
    console.log(e) // this works because the b is stored in the parent/lexical context of a. This forms a chain
}
a()


d()
function d(){
    c()
    function c(){
        console.log(e);
    }
}