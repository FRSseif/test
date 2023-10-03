

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
