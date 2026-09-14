const identifiant = "";
const motDePasse = "";

// On crée une fonction asynchrone pour pouvoir attendre les réponses de l'API
async function connexionAPI() {

    // On envoie une requête HTTP POST avec l'identifiant et le mot de passe formatés en JSON
    const reponse = await fetch("https://lesgets.digisnow.app/v1/auth/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            name: identifiant,
            password: motDePasse
        })
    });

    // On transforme la réponse reçue du serveur en objet JavaScript
    const donnees = await reponse.json();

    // On vérifie si la connexion a réussi
    if (reponse.ok) 
    {
        // On affiche un message de succès en console et on renvoie le jeton d'accès
        console.log("Connexion à l'API réussie !");
        return donnees.accessToken;
    }

    // On affiche l'erreur en console si la connexion a échoué et on renvoie null
    console.log("Erreur de connexion à l'API :", donnees);
    return null;
}