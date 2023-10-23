function check_route(url) {
    fetch(url)
        .then(response => {
            if (response.ok) {
                console.log('All is good');
            } else {
                throw new Error('Response status not OK');
            }
        })
        .catch(error => {
            console.error('Shit happens:');
        });
}
check_route('https://dog.ceo/api/breeds/image/random');