function findClosestResult(functionsObj, inputNumber, outputNumber) {
    let closestFunction = null;
    let closestDifference = Infinity;

    for (const key in functionsObj) {
        if (functionsObj.hasOwnProperty(key) && typeof functionsObj[key] === 'function') {
            const result = functionsObj[key](inputNumber);
            const difference = Math.abs(result - outputNumber);

            if (difference < closestDifference) {
                closestFunction = key;
                closestDifference = difference;
            }
        }
    }

    return closestFunction;
}

const fObj = {};
fObj.multipleByEight = (x) => x * 8;
fObj.square = (x) => x * x;
fObj.addSixty = (x) => x + 60;

const result = findClosestResult(fObj, 5, 26);
console.log(result); // should log: 'square'

console.log(findClosestResult(fObj, 10, 5));

console.log(findClosestResult(fObj, 5, 45));