window.onload = function() {
    let newCartButton = document.querySelector('.cart-btn');
    if (newCartButton) {
        newCartButton.textContent = "CHANGE COLOR";
    }

    newCartButton.addEventListener("click", function() {
        let randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);
        document.body.style.backgroundColor = randomColor;
    });
};