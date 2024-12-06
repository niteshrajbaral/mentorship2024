function greet(name = "Guest") {
    console.log(`Hello, ${name}!`);
}
greet(); // Hello, Guest!
greet("Alice"); // Hello, Alice!
greet(undefined); // Explicit undefined, so name = "Guest"
greet(null);
    // Output: Hello, null! (default is NOT used because null is
    //explicitly passed)
// null is an actual value that represents "no value" or "empty."
// undefined means "no value was provided."