const priceRange = document.getElementById('priceRange');
const priceValue = document.getElementById('priceValue');

priceRange.addEventListener('input', (event) => {
    const selectedValue = event.target.value;
    priceValue.textContent = `$${selectedValue}`;
});