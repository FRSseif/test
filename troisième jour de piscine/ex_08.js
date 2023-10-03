fruits = ["Blackberries", "Mango", "Kiwi", "Peaches", "Strawberry"];

function getFruit(paramater) {
    if (typeof paramater === 'string') {
        return fruits.indexOf(paramater);
    }
    if(typeof paramater === 'number' && paramater >= 0 && paramater < fruits.length)
    {
        return fruits[paramater];
    }
    return null;
}
let inputPar = "Mango";
let result = getFruit(inputPar);
displayResult(result);