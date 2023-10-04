function fillBus(peopleAtBusStops, busSeats) {
    let totalPeople = 0;
    let currentStop = 0;

    while (currentStop < peopleAtBusStops.length) {
        totalPeople += peopleAtBusStops[currentStop];

        if (totalPeople > busSeats) {
            return currentStop;
        }

        currentStop++;
    }

    return -1;
}

let peopleAtBusStops = [10, 5, 3, 2, 7];
let busSeats = 15;

let fullStopIndex = fillBus(peopleAtBusStops, busSeats);
console.log(fullStopIndex);