const button = document.createElement('button');
    button.id = 'myButton';
    button.innerText = 'Cliquez-moi !';
    
    // Ajout de l'événement de clic
    button.addEventListener('click', function() {
        alert('Bouton cliqué !');
