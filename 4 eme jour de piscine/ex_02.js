function findHousing(housingToFind, housingList) {
    let sameCaseHousingToFind=  housingToFind.toLowerCase()
    let index = 0

    while (index < housingList.length) {
        let sameCaseHousingList=  housingList[index].toLowerCase()
        if (sameCaseHousingList === sameCaseHousingToFind){
            return[index,housingList[index]]
        }
        index ++

    }
    return null
}