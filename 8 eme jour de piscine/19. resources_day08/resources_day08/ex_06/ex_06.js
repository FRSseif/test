new Vue({
    el: '#app',
    data: { // You shouldn't change the "data" part
        pet: 'Cat',
        number1: 6,
        number2: 7,
        sentence1: 'Be or not to be in uppercase that is the question.',
        sentence2: 'txet siht daer nac I',
        sentence3: 'I am not in lowercase and certainly not reversed',
    },
    methods: {
        dividedBy2 (number) {
            return number / 2
        }
    },
    filters: {
        capitalize (string) {
            return string.toUpperCase()
        }
    },
})
function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

function reverse(str) {
    return str.split("").reverse().join("");
}

function pow3(num) {
    return num ** 3;
}

document.addEventListener('DOMContentLoaded', function() {
    const elements = document.querySelectorAll('p');

    elements[0].textContent = elements[0].textContent.replace("BLANK1", instanceData.petName);
    elements[1].textContent = elements[1].textContent.replace("BLANK2", instanceData.number1 * instanceData.number2);
    elements[2].textContent = elements[2].textContent.replace("BLANK3", instanceData.number1 / 2);
    elements[3].textContent = elements[3].textContent.replace("BLANK4", pow3(instanceData.number2));
    elements[4].textContent = elements[4].textContent.replace("BLANK5", capitalize(instanceData.sentence1));
    elements[5].textContent = elements[5].textContent.replace("BLANK6", reverse(instanceData.sentence2));
    elements[6].textContent = elements[6].textContent.replace("BLANK7", reverse(capitalize(instanceData.sentence3)));
});