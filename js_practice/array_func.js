// Regular function
function sum(a, b) {
    return a + b;
}
sum(2,3);
// Arrow function
const sum2 = (a, b) => a + b;
// Arrow function and `this`
const person = {
    name: 'John',
    sayHi: () => {
       /* console.log(`Hi, I'm ${this.name}`);  'this' does NOT refer to person
    } */
//};
//person.sayHi();
// Because `arrow function` doesnot create its own `this`. It gets from where it is
//defined i.e `person` and scope for `person` is global or undefined
// Correction
const person = {
    name: 'John',
    sayHi: function() {
        console.log(`Hi, I'm ${this.name}`); // 'this' refers to person
    }
};
person.sayHi();

const user={name1:" nrb",address:{street:"23",tole:"shivalaya"}}}}
