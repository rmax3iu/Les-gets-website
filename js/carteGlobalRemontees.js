// On crée la carte
const map = L.map('map').setView([46.15, 6.68], 13);

// On ajoute le fond de carte
L.tileLayer(
    'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
    {
        attribution: 'Tiles © Esri — Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
    }
).addTo(map);


// Télésiège des Chavannes Express 
const gareAvalChavannesExpress = [46.156736542773054, 6.66836138233767];
const gareAmontChavannesExpress = [46.145059455116595, 6.694047230197449];

L.marker(gareAvalChavannesExpress)
    .addTo(map)
    .bindPopup("Gare aval du télésiège des Chavannes Express");

L.marker(gareAmontChavannesExpress)
    .addTo(map)
    .bindPopup("Gare amont du télésiège des Chavannes Express");

const ligneChavannesExpress = L.polyline(
    [
        gareAvalChavannesExpress,
        gareAmontChavannesExpress
    ],
    {
        color: "#ffcc00",
        weight: 5,
        opacity: 1
    }
).addTo(map);


// Télésiège Chéry Nord
const gareAvalCheryNord = [46.17078, 6.63298];
const gareAmontCheryNord = [46.16868454118696, 6.646949549128231];

L.marker(gareAvalCheryNord)
    .addTo(map)
    .bindPopup("Gare aval du télésiège Chéry Nord");

L.marker(gareAmontCheryNord)
    .addTo(map)
    .bindPopup("Gare amont du télésiège Chéry Nord");

const ligneCheryNord = L.polyline(
    [
        gareAvalCheryNord,
        gareAmontCheryNord
    ],
    {
        color: "#ffcc00",
        weight: 5,
        opacity: 1
    }
).addTo(map);


// Télésiège des Grains d'Or Express
const gareAvalGrains = [46.13635796921407, 6.683196666518904];
const gareAmontGrains = [46.13368896459802, 6.676456612769275];

L.marker(gareAvalGrains)
    .addTo(map)
    .bindPopup("Gare aval du télésiège des Grains d'Or Express");

L.marker(gareAmontGrains)
    .addTo(map)
    .bindPopup("Gare amont du télésiège des Grains d'Or Express");

const ligneGrains = L.polyline(
    [
        gareAvalGrains,
        gareAmontGrains
    ],
    {
        color: "#ffcc00",
        weight: 5,
        opacity: 1
    }
).addTo(map);


// Télésiège de la Grande Ourse
const gareAvalGrandeOurse = [46.166334138487215, 6.660057528283658];
const gareAmontGrandeOurse = [46.16947920304588, 6.650758537690191];

L.marker(gareAvalGrandeOurse)
    .addTo(map)
    .bindPopup("Gare aval du télésiège de la Grande Ourse");

L.marker(gareAmontGrandeOurse)
    .addTo(map)
    .bindPopup("Gare amont du télésiège de la Grande Ourse");

const ligneGrandeOurse = L.polyline(
    [
        gareAvalGrandeOurse,
        gareAmontGrandeOurse
    ],
    {
        color: "#ffcc00",
        weight: 5,
        opacity: 1
    }
).addTo(map);


// Télésiège de la Croix
const gareAvalCroix = [46.14954032822657, 6.685798108856202];
const gareAmontCroix = [46.14550107187693, 6.6934906643420025];

L.marker(gareAvalCroix)
    .addTo(map)
    .bindPopup("Gare aval du télésiège de la Croix");

L.marker(gareAmontCroix)
    .addTo(map)
    .bindPopup("Gare amont du télésiège de la Croix");

const ligneCroix = L.polyline(
    [
        gareAvalCroix,
        gareAmontCroix
    ],
    {
        color: "#ffcc00",
        weight: 5,
        opacity: 1
    }
).addTo(map);


// Télésiège de la Pointe 
const gareAvalPointe = [46.16452439762759, 6.657704635520732];
const gareAmontPointe = [46.16833077531693, 6.646819845479813];

L.marker(gareAvalPointe)
    .addTo(map)
    .bindPopup("Gare aval du télésiège de la Pointe");

L.marker(gareAmontPointe)
    .addTo(map)
    .bindPopup("Gare amont du télésiège de la Pointe");

const lignePointe = L.polyline(
    [
        gareAvalPointe,
        gareAmontPointe
    ],
    {
        color: "#ffcc00",
        weight: 5,
        opacity: 1
    }
).addTo(map);


// Télécabine des Chavannes
const gareAvalChavannes = [46.15694172271303, 6.668776577063392];
const gareAmontChavannes = [46.150333394692204, 6.685347821679936];

L.marker(gareAvalChavannes)
    .addTo(map)
    .bindPopup("Gare aval de la télécabine des Chavannes");

L.marker(gareAmontChavannes)
    .addTo(map)
    .bindPopup("Gare amont de la télécabine des Chavannes");

const ligneChavannes = L.polyline(
    [
        gareAvalChavannes,
        gareAmontChavannes
    ],
    {
        color: "#ffcc00",
        weight: 5,
        opacity: 1
    }
).addTo(map);


// Télésiège des Folliets 
const gareAvalFolliets = [46.159389827490564, 6.6841585155838725];
const gareAmontFolliets = [46.16217833922179, 6.693734658793468];

L.marker(gareAvalFolliets)
    .addTo(map)
    .bindPopup("Gare aval du télésiège des Folliets");

L.marker(gareAmontFolliets)
    .addTo(map)
    .bindPopup("Gare amont du télésiège des Folliets");

const ligneFolliets = L.polyline(
    [
        gareAvalFolliets,
        gareAmontFolliets
    ],
    {
        color: "#ffcc00",
        weight: 5,
        opacity: 1
    }
).addTo(map);


// Télésiège des Planeys 
const gareAvalPlaneys = [46.17244217340355, 6.661963393807725];
const gareAmontPlaneys = [46.16951752348187, 6.6507594432716655];

L.marker(gareAvalPlaneys)
    .addTo(map)
    .bindPopup("Gare aval du télésiège des Planeys");

L.marker(gareAmontPlaneys)
    .addTo(map)
    .bindPopup("Gare amont du télésiège des Planeys");

const lignePlaneys = L.polyline(
    [
        gareAvalPlaneys,
        gareAmontPlaneys
    ],
    {
        color: "#ffcc00",
        weight: 5,
        opacity: 1
    }
).addTo(map);


// Télécabine du Mont Chéry
const gareAvalMontChery = [46.160795294616456, 6.669722783842929];
const gareAmontMontChery = [46.165494726924756, 6.658705838485143];

L.marker(gareAvalMontChery)
    .addTo(map)
    .bindPopup("Gare aval de la télécabine du Mont Chéry");

L.marker(gareAmontMontChery)
    .addTo(map)
    .bindPopup("Gare amont de la télécabine du Mont Chéry");

const ligneMontChery = L.polyline(
    [
        gareAvalMontChery,
        gareAmontMontChery
    ],
    {
        color: "#ffcc00",
        weight: 5,
        opacity: 1
    }
).addTo(map);


// Télésiège des Nauchets Express
const gareAvalNauchets = [46.13801184708825, 6.683249315993843];
const gareAmontNauchets = [46.14027372187512, 6.695072209467294];

L.marker(gareAvalNauchets)
    .addTo(map)
    .bindPopup("Gare aval du télésiège des Nauchets Express");

L.marker(gareAmontNauchets)
    .addTo(map)
    .bindPopup("Gare amont du télésiège des Nauchets Express");

const ligneNauchets = L.polyline(
    [
        gareAvalNauchets,
        gareAmontNauchets
    ],
    {
        color: "#ffcc00",
        weight: 5,
        opacity: 1
    }
).addTo(map);


// Télésiège du Ranfoilly
const gareAvalRanfoilly = [46.136927087412346, 6.68355009418269];
const gareAmontRanfoilly = [46.131006586785915, 6.704181855498783];

L.marker(gareAvalRanfoilly)
    .addTo(map)
    .bindPopup("Gare aval du télésiège du Ranfoilly");

L.marker(gareAmontRanfoilly)
    .addTo(map)
    .bindPopup("Gare amont du télésiège du Ranfoilly");

const ligneRanfoilly = L.polyline(
    [
        gareAvalRanfoilly,
        gareAmontRanfoilly
    ],
    {
        color: "#ffcc00",
        weight: 5,
        opacity: 1
    }
).addTo(map);


// Télésiège de la Rosta
const gareAvalRosta = [46.135915451354, 6.683378839444524];
const gareAmontRosta = [46.13004508841131, 6.6781663977239525];

L.marker(gareAvalRosta)
    .addTo(map)
    .bindPopup("Gare aval du télésiège de la Rosta");

L.marker(gareAmontRosta)
    .addTo(map)
    .bindPopup("Gare amont du télésiège de la Rosta");

const ligneRosta = L.polyline(
    [
        gareAvalRosta,
        gareAmontRosta
    ],
    {
        color: "#ffcc00",
        weight: 5,
        opacity: 1
    }
).addTo(map);


// Télésiège de Perrière
const gareAvalPerriere = [46.1487874143649, 6.658147155969807];
const gareAmontPerriere = [46.13779825942554, 6.671681176916357];

L.marker(gareAvalPerriere)
    .addTo(map)
    .bindPopup("Gare aval du télésiège de Perrière");

L.marker(gareAmontPerriere)
    .addTo(map)
    .bindPopup("Gare amont du télésiège de Perrière");

const lignePerriere = L.polyline(
    [
        gareAvalPerriere,
        gareAmontPerriere
    ],
    {
        color: "#ffcc00",
        weight: 5,
        opacity: 1
    }
).addTo(map);


// Affichage de toutes les remontées
const toutesLesLignes = L.featureGroup([
    ligneChavannesExpress,
    ligneCheryNord,
    ligneGrains,
    ligneGrandeOurse,
    ligneCroix,
    lignePointe,
    ligneChavannes,
    ligneFolliets,
    lignePlaneys,
    ligneMontChery,
    ligneNauchets,
    ligneRanfoilly,
    ligneRosta,
    lignePerriere
]);


// Ajustement automatique de la vue
map.fitBounds(
    toutesLesLignes.getBounds(),
    {
        padding: [50, 50]
    }
);