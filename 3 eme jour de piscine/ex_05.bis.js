function getBasketContent(nbrOfFruit) {
    if (nbrOfFruits > fruits.length) {
        console.log("Too many fruit(s) selected.");
    } else {
        console.log(nbrOfFruits + " fruit(s) selected")
        return fruits.slice(0, nbrOfFruits);
    }
}