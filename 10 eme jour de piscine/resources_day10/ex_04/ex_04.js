function initializeMachine(machineName, timeRequired) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`${machineName} initialized`);
        }, timeRequired * 1000);
    });
}

// Example usage:
initializeMachine("Computer", 3).then((value) => {
    console.log(value);
});