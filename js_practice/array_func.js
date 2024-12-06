// Array functions
const numbers = [1, 2, 3, 4, 5];

// forEach
numbers.forEach((number) => console.log(number));
//output: 1 2 3 4 5

// map
const doubled = numbers.map((number) => number * 2);
console.log(doubled);
//output: [2, 4, 6, 8, 10]

// filter
const evens = numbers.filter((number) => number % 2 === 0);
console.log(evens);
//output: [2, 4]

// reduce
const sum3 = numbers.reduce((acc, number) => acc + number, 0);
console.log(sum3);
//output: 15

// find
const found = numbers.find((number) => number > 3);
console.log(found);
//output: 4

// findIndex
const foundIndex = numbers.findIndex((number) => number > 3);
console.log(foundIndex);
//output: 3

// some
const hasNegative = numbers.some((number) => number < 0);
console.log(hasNegative);
//output: false

// every
const allPositive = numbers.every((number) => number > 0);
console.log(allPositive);
//output: true

// sort
const sorted = numbers.slice().sort((a, b) => a - b);
console.log(sorted);
//output: [1, 2, 3, 4, 5]

// reverse
const reversed = numbers.slice().reverse();
console.log(reversed);
//output: [5, 4, 3, 2, 1]

// concat
const concatenated = numbers.concat([6, 7, 8]);
console.log(concatenated);
//output: [1, 2, 3, 4, 5, 6, 7, 8]

// slice
const sliced = numbers.slice(1, 3);
console.log(sliced);
//output: [2, 3]

// splice
const spliced = numbers.slice();
spliced.splice(1, 2, 10, 11);
console.log(spliced);
//output: [1, 10, 11, 4, 5]

// indexOf
const index = numbers.indexOf(3);
console.log(index);
//output: 2

// lastIndexOf
const lastIndex = numbers.lastIndexOf(3);
console.log(lastIndex);
//output: 2

// includes
const hasThree = numbers.includes(3);
console.log(hasThree);
//output: true

// Array.from
const arrayLike = { 0: 'a', 1: 'b', 2: 'c', length: 3 };
const array = Array.from(arrayLike);
console.log(array);
//output: ['a', 'b', 'c']

// Array.of
const arrayOf = Array.of(1, 2, 3);
console.log(arrayOf);
//output: [1, 2, 3]

// Array.isArray
const isArr = Array.isArray(array);
console.log(isArr);
//output: true

// Array.fill
const filled = Array(3).fill(0);
console.log(filled);
//output: [0, 0, 0]

// Array.keys
const keys = numbers.keys();
for (const key of keys) {
    console.log(key);
}
//output: 0 1 2 3 4


