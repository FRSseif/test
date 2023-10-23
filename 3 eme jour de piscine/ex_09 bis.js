function splitOperation(operation) {
    let parts = operation.split(' ');
    let firstNumber = parseInt(parts[0]);
    let secondNumber = parseInt(parts[2])
    let result = [firstNumber, parts[1], secondNumber];
    return result;
}

console.log(splitOperation("5 + 5"));

function doOperation(operation) {
    let stockage = splitOperation(operation);

    let firstNumber = stockage[0]
    let operateur = stockage[1]
    let secondNumber = stockage[2]

    let result2 ;

    switch (operateur) {
        case "+":
            result2 = firstNumber + secondNumber;
            break;
        case"-":
            result2 = firstNumber - secondNumber;
            break;
        case "":
            result2 = firstNumber * secondNumber
            break ;
        case "/":
            if (secondNumber === 0) {
                console.log("Can't divide by 0");
                return null;
            }
            result2 = firstNumber / secondNumber ;
            break;
        default :
            console.log("Opérateur pas reconnu")
            return null
    }

    return result2;
}

console.log(doOperation("5 + 5"));