const promise = new Promise((resolve, reject) => {
    // Asynchronous operation here
    let success = true;

    if (success) {
        resolve("Operation successful!");
    } else {
        reject("Something went wrong.");
    }
});
promise
    .then(result => {
        console.log(result); // Logs: "Operation successful!"
    })
    .catch(error => {
        console.error(error); // Logs: "Something went wrong."
    })
    .finally(() => {
        console.log("Operation is complete!");
    });
// Output:
// Operation successful!
// Operation is complete!