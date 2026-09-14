async function recupererOuvertures()
{
    const token = await connexionAPI();

    if (token === null)
    {
        return;
    }


    const reponseRemontees = await fetch(
        "https://lesgets.digisnow.app/v1/api/assets/all",
        {
            headers:
            {
                "Authorization": "Bearer " + token
            }
        }
    );


    const remontees = await reponseRemontees.json();

    console.log("Remontées :", remontees);


    // Récupérer toutes les remontées de tous les secteurs
    const toutesLesRemontees = [];

    for (const secteur of Object.values(remontees))
    {
        if (secteur.lifts)
        {
            toutesLesRemontees.push(...secteur.lifts);
        }
    }


    console.log("Toutes les remontées :", toutesLesRemontees);


    // Récupérer toutes les cellules du tableau
    const cellules = document.querySelectorAll(".ouverture-remontee");


    cellules.forEach(function(cellule)
    {
        const idRemontee = cellule.dataset.remontee;


        // Chercher la remontée correspondante
        const remontee = toutesLesRemontees.find(function(remontee)
        {
            return remontee.id === idRemontee;
        });


        // Si la remontée n'existe pas dans l'API
        if (!remontee)
        {
            console.log("Remontée introuvable :", idRemontee);
            return;
        }


        console.log(
            remontee.name,
            "=>",
            remontee.openingStatus
        );


        // Vider la cellule
        cellule.textContent = "";


        // Création de l'icône
        const image = document.createElement("img");

        image.classList.add("icone-ouverture");


        // Texte qui sera affiché à côté de l'icône
        let texteStatut = "";

        // Remontée ouverte
        if (remontee.openingStatus === "open")
        {
            image.src = "../../images/icone/valider/valider1_sf.png";
            image.alt = "Ouvert";

            texteStatut = "Ouvert";
        }


        // Remontée fermée
        else if (remontee.openingStatus === "closed")
        {
            image.src = "../../images/icone/croix/croix1_sf.png";
            image.alt = "Fermé";

            texteStatut = "Fermé";
        }

        // Autre statut
        else
        {
            image.src = "../../images/icone/triangle/triangle2_sf.png";
            image.alt = "Statut particulier";


            switch (remontee.openingStatus)
            {
                case "risk-of-closure":
                    texteStatut = "Risque de fermeture";
                    break;


                case "out-of-period":
                    texteStatut = "Hors période";
                    break;


                case "opening-forecast":
                    texteStatut = "Prévision d'ouverture";
                    break;


                case "closed-today":
                    texteStatut = "Fermé aujourd'hui";
                    break;


                case "reserved":
                    texteStatut = "Réservé";
                    break;


                case "temporary-stop":
                    texteStatut = "Arrêt momentané";
                    break;


                case "delayed-opening":
                    texteStatut = "Retard à l'ouverture";
                    break;


                case "closed-several-days":
                    texteStatut = "Fermé plusieurs jours";
                    break;


                default:
                    texteStatut = "Statut inconnu";
                    break;
            }
        }

        // Création du texte
        const texte = document.createElement("span");

        texte.classList.add("texte-ouverture");
        texte.textContent = texteStatut;

        // Ajouter l'icône dans la cellule
        cellule.appendChild(image);

        // Ajouter le texte à côté de l'icône
        cellule.appendChild(texte);
    });
}


// Lancer la récupération des ouvertures
recupererOuvertures();