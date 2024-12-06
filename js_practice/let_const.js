let x = 5;
var y=6;
const z=7;

console.log(x);//5
console.log(y);//6
console.log(z);//7

x=8;
y=9;
//z=10; //TypeError: Assignment to constant variable.

console.log(x);//8
console.log(y);//9
console.log(z);//7