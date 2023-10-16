async function asyncFunc() {
    return new Promise((resolve, reject) => {
        resolve("Hello World!");
    });
}

// Call the asyncFunc and display the Promise in the console
asyncFunc().then((result) => {
    console.log(result);
});