function promiseMe(promise) {
    return new Promise((resolve, reject) => {
        resolve("I promise you to" + promise);
    });
}

// Call the promiseMe function and display the Promise in the console
promiseMe(" fly to the moon ").then((value) => {
    console.log(value);
});