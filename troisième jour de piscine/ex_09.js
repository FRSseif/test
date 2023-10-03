function operationSplit(argument) {
    let array = argument.split(" ")
    let firstNumber = parseInt(array[0])
    let secondNumber= array[1]
    let thirdNumber= parseInt(array[2])
    return [firstNumber , secondNumber , thirdNumber]

}