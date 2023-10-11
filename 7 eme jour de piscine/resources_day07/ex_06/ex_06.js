document.addEventListener('DOMContentLoaded', function() {
    const robot = document.getElementById('robot');
    const screenText = document.getElementById('screen-text');
    const inputField = document.getElementById('robot-input');
    const speechBubble = document.getElementById('speech-bubble');
    const eyeLeft = document.querySelector('.eye-left-iris');
    const eyeRight = document.querySelector('.eye-right-iris');
    let eyeClickCount = 0;
    robot.addEventListener('mousemove', function(event) {
        const coordinates = `X: ${event.clientX}, Y: ${event.clientY}`;
        screenText.textContent = coordinates;
    });
    inputField.addEventListener('input', function() {
        screenText.textContent = "Don’t worry, I’ll take care of it!";
        setTimeout(function() {
            screenText.textContent = '';
        }, 2000);
    });
    function changeIrisColor() {
        const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
        eyeLeft.style.fill = randomColor;
        eyeRight.style.fill = randomColor;
    }
    robot.addEventListener('click', function(event) {
        const target = event.target;
        if (target.classList.contains('eye-left-iris') || target.classList.contains('eye-right-iris')) {
            eyeClickCount++;
            if (eyeClickCount >= 10) {
                eyeClickCount = 0;
                changeIrisColor();
            }
        }
    });
    robot.addEventListener('click', function(event) {
        if (event.target.id === 'robot') {
            speechBubble.textContent = "Ooch it hurts!";
            setTimeout(function() {
                speechBubble.textContent = 'Hello!';
            }, 2000);
        }
    });
});

