function traduireMeteo(meteo)
{
    if (meteo === "sunny")
    {
        return "Ensoleillé";
    }

    if (meteo === "hazy")
    {
        return "Voilé";
    }

    if (meteo === "cloudy")
    {
        return "Nuageux";
    }

    if (meteo === "very-cloudy-with-sun")
    {
        return "Très nuageux avec éclaircies";
    }

    if (meteo === "rain")
    {
        return "Pluie";
    }

    if (meteo === "snow")
    {
        return "Neige";
    }

    if (meteo === "storm")
    {
        return "Orage";
    }

    if (meteo === "rain-sun")
    {
        return "Pluie et soleil";
    }

    return meteo;
}
traduireMeteo();



function afficherDate()
{
    const maintenant = new Date();

    const jour = String(maintenant.getDate()).padStart(2, "0");
    const mois = String(maintenant.getMonth() + 1).padStart(2, "0");
    const annee = maintenant.getFullYear();

    const heures = String(maintenant.getHours()).padStart(2, "0");
    const minutes = String(maintenant.getMinutes()).padStart(2, "0");

    document.getElementById("meteo-date").textContent =
        jour + "/" + mois + "/" + annee + " - " + heures + "h" + minutes;
}
afficherDate();



async function recupererMeteo() {

    const token = await connexionAPI();

    if (token === null) {
        return;
    }

    const reponse = await fetch(
        "https://lesgets.digisnow.app/v1/api/meteo/latest",
        {
            headers: {
                "Authorization": "Bearer " + token
            }
        }
    );

    const meteo = await reponse.json();

    const meteoVillageMatin = traduireMeteo(meteo.zones[0].report[0].icons.am);
    const meteoVillageApresMidi = traduireMeteo(meteo.zones[0].report[0].icons.pm);

    const meteoSommetMatin = traduireMeteo(meteo.zones[1].report[0].icons.am);
    const meteoSommetApresMidi = traduireMeteo(meteo.zones[1].report[0].icons.pm);

    document.getElementById("matin-etat-village").textContent = meteoVillageMatin;
    document.getElementById("apres-midi-etat-village").textContent = meteoVillageApresMidi;

    document.getElementById("matin-etat-sommet").textContent = meteoSommetMatin;
    document.getElementById("apres-midi-etat-sommet").textContent = meteoSommetApresMidi;

    const temperatureVillageMatin = meteo.zones[0].report[0].temperature.am;
    const temperatureVillageApresMidi = meteo.zones[0].report[0].temperature.pm;

    const temperatureSommetMatin = meteo.zones[1].report[0].temperature.am;
    const temperatureSommetApresMidi = meteo.zones[1].report[0].temperature.pm;

    document.getElementById("matin-temp-village").textContent = temperatureVillageMatin + " °C";
    document.getElementById("apres-midi-temp-village").textContent = temperatureVillageApresMidi + " °C";

    document.getElementById("matin-temp-sommet").textContent = temperatureSommetMatin + " °C";
    document.getElementById("apres-midi-temp-sommet").textContent = temperatureSommetApresMidi + " °C";

    const reponseNeige = await fetch(
        "https://lesgets.digisnow.app/v1/api/snow/latest",
        {
            headers: {
                "Authorization": "Bearer " + token
            }
        }
    );

    const neige = await reponseNeige.json();

    const hauteurNeigeVillage = neige[0].total_depth;
    const hauteurNeigeSommet = neige[1].total_depth;

    document.getElementById("hauteur-neige-village").textContent = hauteurNeigeVillage + " cm";
    document.getElementById("hauteur-neige-sommet").textContent = hauteurNeigeSommet + " cm";

    const reponseAvalanche = await fetch(
        "https://lesgets.digisnow.app/v1/api/avalancheRisk/default",
        {
            headers: {
                "Authorization": "Bearer " + token
            }
        }
    );

    const avalanche = await reponseAvalanche.json();

    const risqueAvalanche = avalanche.level;

    document.getElementById("risque-avalanche-sommet").textContent = risqueAvalanche + " / 5";
    document.getElementById("risque-avalanche-village").textContent = risqueAvalanche + " / 5";

    document.getElementById("image-avalanche-village").src = "../images/avalanche/risque" + risqueAvalanche + ".png";
    document.getElementById("image-avalanche-sommet").src = "../images/avalanche/risque" + risqueAvalanche + ".png";

}
recupererMeteo();