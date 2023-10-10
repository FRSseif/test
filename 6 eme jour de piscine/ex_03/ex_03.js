function addCar(agent, car) {
    if (!agent.firstName || !agent.lastName || !agent.age || !agent.code) {
        console.error("Error: One of the keys is missing or incorrectly typed in the agent object.");
        return null;
    }
    if (!car.color || !car.brand || !car.model || !car.power) {
        console.error("Error: One of the keys is missing or incorrectly typed in the car object.");
        return null;
    }
    agent.car = car;
    shareThatBeauty(agent);
    return agent;
}
let agent = {
    firstName: "James",
    lastName: "Bond",
    age: 57,
    code: "007"
};
let car = {
    color: "silver",
    brand: "Aston Martin",
    model: "DB5",
    power: "282 HP"
};
addCar(agent, car);