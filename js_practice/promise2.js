const fetchData = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const success = true; // Simulate success or failure
            if (success) {
                resolve("Data fetched successfully!");
            } else {
                reject("Failed to fetch data.");
            }
        }, 2000); // Simulate a delay
    });
};

fetchData()
    .then(data => console.log(data)) // Logs: "Data fetched successfully!" after 2 seconds
    .catch(error => console.error(error)) // If failed
    .finally(() => console.log("Fetch attempt finished!"));

// Output:
// Data fetched successfully!
// Fetch attempt finished!
-