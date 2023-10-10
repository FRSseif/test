function displayAgentInfo(agentInfo) {
    let age = agentInfo.age;
    let code = agentInfo.code;
    let firstName = agentInfo.firstName;
    let lastName = agentInfo.lastName;
    let infoString = <p>My name is ${lastName}, ${firstName} ${lastName}! I'm the agent ${code}, and I'm ${age} years old.</p>;
    let container = document.getElementById('container');

    container.innerHTML = infoString;
}

let agent = {
    age: 57,
    code: "007",
    firstName: "James",
    lastName: "Bond"
};

window.onload = () => {
    displayAgentInfo(agent);
}

