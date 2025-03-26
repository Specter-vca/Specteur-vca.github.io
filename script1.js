document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Empêche le rechargement de la page

    // Récupérer les valeurs des champs
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value; // facultatif
    const password = document.getElementById('password').value;

    // Simuler le stockage des données (vous pouvez remplacer ceci par une requête AJAX pour un backend)
    console.log('Données enregistrées : ', {
        firstName,
        lastName,
        phone,
        email,
        password
    });

    // Vous pouvez ici ajouter du code pour afficher un message de succès ou rediriger l'utilisateur
    alert('Inscription réussie !'); // Message de confirmation

    // Rediriger vers la page 3 (remplacez 'page3.html' par l'URL de votre page)
    window.location.href = 'page3.html';
});