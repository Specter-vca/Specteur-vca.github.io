<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Récupération des données du formulaire
    $firstName = htmlspecialchars($_POST['firstName']);
    $lastName = htmlspecialchars($_POST['lastName']);
    $phone = htmlspecialchars($_POST['phone']);
    $email = htmlspecialchars($_POST['email']); // Facultatif
    $password = htmlspecialchars($_POST['password']);

    // Traitement des données (par exemple, sauvegarde dans une base de données)
    // Ici, vous pouvez ajouter votre logique pour enregistrer les données

    // Affichage des données pour vérification
    echo "<h1>Données soumises :</h1>";
    echo "<p>Prénom : $firstName</p>";
    echo "<p>Nom : $lastName</p>";
    echo "<p>Téléphone : $phone</p>";
    echo "<p>Email : $email</p>";
    echo "<p>Mot de passe : $password</p>"; // Ne jamais afficher le mot de passe en clair dans une application réelle

} else {
    // Redirection ou message d'erreur si la méthode n'est pas POST
    echo "Aucune donnée soumise.";
}
?>
