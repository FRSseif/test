function promiseMe(message) {
    return new Promise((resolve) => {
        resolve(`I promise you to ${message}`);
    });
}

function checkStatus(promise) {
    promise
        .then((message) => {
            console.log(message);
        })
        .catch((error) => {
            console.log(error);
        })
        .finally(() => {
            console.log("Checking status over");
        });
}

checkStatus(promiseMe("fly to the moon"));
function checkStatus(promise) {
    promise
        .then((message) => {
            console.log(message);
        })
        .catch((error) => {
            console.log(error);
        })
        .finally(() => {
            console.log("Checking status over");
        });
}

checkStatus(promiseMe("fly to the moon"));