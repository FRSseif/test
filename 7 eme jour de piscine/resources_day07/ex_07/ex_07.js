document.addEventListener('DOMContentLoaded', function() {
    const title = document.querySelector('h1');
    let isShuffling = true;
    function shuffleWords() {
        if (isShuffling) {
            const words = title.innerText.split(' ');
            for (let i = words.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [words[i], words[j]] = [words[j], words[i]];
            }
            title.innerText = words.join(' ');
        }
    }
    setInterval(shuffleWords, 2000);
    title.addEventListener('click', function() {
        isShuffling = false;
        const textToCopy = title.innerText;
        navigator.clipboard.writeText(textToCopy)
            .then(() => alert(Copied to clipboard: ${textToCopy}))
    .catch(err => console.error('Could not copy text: ', err));
    });
    title.addEventListener('mouseleave', function() {
        isShuffling = true;
    });
    document.addEventListener('keydown', function(event) {
        if (event.key === '!') {
            setTimeout(function() {
                alert('42!');
            }, 42000);
        }
    });
});