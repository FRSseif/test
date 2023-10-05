window.onload = function() {
    window.addEventListener('resize', function () {
        alert('Size matters');
   let imageElement = document.querySelector('img[src="../Iphone22.png"]')
        imageElement.addEventListener('mouseover',function () {
            alert('Pretty, isn t it?')
        })
    });
}