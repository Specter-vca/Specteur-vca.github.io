document.getElementById('networkForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Empêche l'envoi du formulaire par défaut
    const network = document.getElementById('network').value;
    const phoneNumber = document.getElementById('phoneNumber').value;

    // Validation du numéro de téléphone selon le réseau choisi
    let isValid = false;

    if (network === 'orange' && phoneNumber.startsWith('07') && phoneNumber.length === 10) {
        isValid = true;
    } else if (network === 'moov' && phoneNumber.startsWith('01') && phoneNumber.length === 10) {
        isValid = true;
    } else if (network === 'mtn' && phoneNumber.startsWith('05') && phoneNumber.length === 10) {
        isValid = true;
    }

    if (isValid) {
        localStorage.setItem('network', network);
        localStorage.setItem('phoneNumber', phoneNumber);
        document.getElementById('message').innerText = "Votre choix a été mémorisé avec succès.";
        document.getElementById('message').style.color = "green";

        // Redirection vers la page4 après un délai
        setTimeout(function() {
            window.location.href = 'page4.html'; // Remplacez par l'URL de votre page de destination
        }, 2000); // Délai de 2 secondes avant la redirection
    } else {
        document.getElementById('message').innerText = "Numéro de téléphone invalide. Veuillez vérifier.";
        document.getElementById('message').style.color = "red";
    }
});

// Fonctionnalité des boutons supplémentaires (si nécessaire)
document.getElementById('prevButton')?.addEventListener('click', function() {
    window.location.href = 'accueil.html'; // Redirige vers la page d'accueil
});
