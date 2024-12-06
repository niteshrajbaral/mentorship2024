// Array destructuring
const [a, b, c = 10] = [1, 2];
console.log(a, b, c); // 1, 2, 10

// Object destructuring
const user1 = { name1: 'Alice', age: 25 };
const { name1, age } = user1;
console.log(name1, age); // Alice, 25

// Renaming
const user2 = { firstName: 'Bob', lastName: 'Smith' };
const { firstName: fName, lastName: lName } = user2;
console.log(fName, lName); // Output: Bob Smith

// Nested destructuring
const user3 = { name3: 'Alice', address: { city: 'Wonderland', zip: '12345' } };
const { name3, address: { city, zip } } = user3;
console.log(name3, city, zip); // Output: Alice Wonderland 12345