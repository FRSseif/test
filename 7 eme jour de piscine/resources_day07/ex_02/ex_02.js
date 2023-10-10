function rotateCircle(step) {
    let circle = document.getElementById("circle");
    let currentRotation = circle.style.transform;
    let currentAngle = 0;
    if (currentRotation) {
        let matches = currentRotation.match(/rotate\((-?\d+)deg\)/);
        if (matches && matches.length > 1) {
            currentAngle = parseInt(matches[1]);
        }
    }
    let newAngle = currentAngle + step;
    circle.style.transform = "rotate(" + newAngle + "deg)";
}
let buttons = document.getElementsByClassName("top-button");
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function(event) {
        let step = parseInt(event.target.dataset.step);
        rotateCircle(step);
    });
}