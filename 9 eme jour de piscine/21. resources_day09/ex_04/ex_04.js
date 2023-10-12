document.addEventListener('mousemove', function(e) {
    let x = e.clientX / window.innerWidth - 0.5; // Calculate mouse position
    let y = e.clientY / window.innerHeight - 0.5;
    let parallaxLayers = document.querySelectorAll('.parallax-layer');

    parallaxLayers.forEach(function(layer, index) {
        let depth = index * 0.1 + 1; // Adjust the depth of each layer
        let translateX = x * depth * 100 + 'px'; // Calculate translation
        let translateY = y * depth * 100 + 'px';

        layer.style.transform = 'translate(' + translateX + ', ' + translateY + ')';
    });
});