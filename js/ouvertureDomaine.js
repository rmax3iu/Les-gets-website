/* ================================================================
   Taux d'ouverture des remontées mécaniques - Les Gets
   (connexionAPI() est déjà définie dans main.js)
   ================================================================ */

const CHEMIN_ICONE_OUVERT = "../images/icone/valider/valider1_sf.png";
const CHEMIN_ICONE_FERME = "../images/icone/croix/croix1_sf.png";
const CHEMIN_ICONE_AUTRE = "../images/icone/triangle/triangle2_sf.png";

async function appelAPI(route)
{
    const token = await connexionAPI();
    if (token === null) return null;

    const reponse = await fetch(`https://lesgets.digisnow.app/v1/api/${route}`, {
        headers: { "Authorization": "Bearer " + token }
    });

    return reponse.json();
}

async function chargerStatuts()
{
    const statuts = await appelAPI("config/openingStatus/all");
    const table = {};

    for (const statut of statuts)
    {
        table[statut.codeAPI] = {
            nom: statut.name.fr,
            considereOuvert: statut.consideredAsOpen
        };
    }
    return table;
}

async function chargerTypesAppareils()
{
    const types = await appelAPI("config/assetType/all");
    const table = {};

    for (const type of types)
    {
        if (type.parent === "lifts")
        {
            table[type.code] = { nom: type.name.fr, picto: type.picto };
        }
    }
    return table;
}

async function chargerRemonteesLesGets()
{
    const donnees = await appelAPI("assets/all");
    const remontees = [];

    for (const secteur of Object.values(donnees))
    {
        if (secteur.domain === "lesgets" && secteur.lifts)
        {
            remontees.push(...secteur.lifts);
        }
    }
    return remontees;
}

function capitaliser(texte)
{
    return texte.charAt(0).toUpperCase() + texte.slice(1);
}

function determinerIconeStatut(infoStatut)
{
    if (infoStatut.considereOuvert)
    {
        return CHEMIN_ICONE_OUVERT;
    }
    if (infoStatut.nom.toLowerCase().includes("fermé"))
    {
        return CHEMIN_ICONE_FERME;
    }
    return CHEMIN_ICONE_AUTRE;
}

function creerDonut(pourcentage)
{
    const cercle = document.querySelector(".cercle-ouverture");
    cercle.style.background = `conic-gradient(#013c4c 0% ${pourcentage}%, #e2e5ea ${pourcentage}% 100%)`;
}

function creerLigneRemontee(remontee, tableStatuts, tableTypes)
{
    const infoStatut = tableStatuts[remontee.openingStatus]
        || { nom: "Statut inconnu", considereOuvert: false };

    const infoType = tableTypes[remontee.type]
        || { nom: remontee.type, picto: "" };

    const iconeStatut = determinerIconeStatut(infoStatut);

    const ligne = document.createElement("div");
    ligne.className = "remontee_ligne";

    ligne.innerHTML = `
        <div class="remontee_icone">${infoType.picto}</div>
        <span class="remontee_nom">${remontee.name}</span>
        <span class="remontee_statut">
            <img src="${iconeStatut}" alt="${infoStatut.nom}">
            ${capitaliser(infoStatut.nom)}
        </span>
    `;

    return ligne;
}

async function initOuvertureMecanique()
{
    const [remontees, tableStatuts, tableTypes] = await Promise.all([
        chargerRemonteesLesGets(),
        chargerStatuts(),
        chargerTypesAppareils()
    ]);

    if (remontees.length === 0) return;

    const nombreOuvertes = remontees.filter(r => tableStatuts[r.openingStatus]?.considereOuvert).length;
    const total = remontees.length;
    const pourcentage = Math.round((nombreOuvertes / total) * 100);

    document.getElementById("nombre-remontees-ouvertes").textContent = `${nombreOuvertes}/${total}`;
    document.getElementById("pourcentage-remontees-ouvertes").textContent = `${pourcentage}%`;

    creerDonut(pourcentage);

    const conteneurListe = document.getElementById("liste-remontees");
    conteneurListe.innerHTML = "";

    for (const remontee of remontees)
    {
        conteneurListe.appendChild(creerLigneRemontee(remontee, tableStatuts, tableTypes));
    }
}

document.addEventListener("DOMContentLoaded", initOuvertureMecanique);