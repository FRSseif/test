function reduceOpacity() {
    var square = document.getElementById("square");
    square.style.opacity = 0.5;
}
function resetOpacity() {
    var square = document.getElementById("square");
    square.style.opacity = 1;
}

var squareElement = document.getElementById("square");
squareElement.addEventListener("mouseenter", reduceOpacity);
squareElement.addEventListener("mouseleave", resetOpacity);