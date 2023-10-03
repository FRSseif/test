function getIndexFromName(name){
    let pos = fruits.indexOf(name)

    if (pos === -1){
        return null
    } else {
        return pos
    }
}