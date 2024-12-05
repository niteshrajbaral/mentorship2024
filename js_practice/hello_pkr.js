// Before ES6
var name = "Pokhara";
function greet() {
    console.log("Hello " + name);
}
// ES6
const name1 = "Pokhara";
const greet2 = () => console.log(`Hello ${name1}`);
greet2();
greet();