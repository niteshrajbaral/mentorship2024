//scope of let, var and const
//let and const are block scoped
//var is function scoped
//let and const are not hoisted
//var is hoisted
//let and const are not initialized
//var is initialized with undefined

let x=5;
var y=6;
const z=7;
function test(){
    console.log(x);//5
    console.log(y);//6
    console.log(z);//7
}
test();
