function checkFuel(fuel) {
    return new Promise((resolve, reject) => {
        if (fuel >= 9) {
            resolve("Ready to launch");
        } else {
            reject("Please refill fuel");
        }
    });
}

// Call the checkFuel function and handle the Promise
checkFuel(9)
    .then((message) => {
        console.log(message);
    })
    .catch((error) => {
        console.log(error);
    });