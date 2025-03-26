document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Empêche l'envoi du formulaire par défaut
    const contact = document.getElementById('contact').value;
    const password = document.getElementById('password').value;

    // Simule une validation et stockage des informations
    if (contact && password) { // Vérifie que les deux champs sont remplis
        // Ici vous pouvez stocker les informations dans un stockage local ou une base de données
        localStorage.setItem('contact', contact);
        localStorage.setItem('password', password);
        document.getElementById('message').innerText = "Informations stockées avec succès.";
        document.getElementById('message').style.color = "green";

        // Rediriger vers page3.html après un délai de 2 secondes
        setTimeout(function() {
            window.location.href = 'page3.html'; // Redirige vers page3
        }, 2000); // Délai de 2 secondes avant la redirection
    } else {
        if (!contact) {
            document.getElementById('message').innerText = "Veuillez entrer un contact.";
        } else {
            document.getElementById('message').innerText = "Veuillez entrer un mot de passe.";
        }
        document.getElementById('message').style.color = "red";
    }
});

document.getElementById('homeButton').addEventListener('click', function() {
    window.location.href = 'index.html'; // Redirige vers la page d'accueil
});
