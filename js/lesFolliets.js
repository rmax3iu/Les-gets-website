// On définit les coordonnées des gares pour le télésiège des Folliets
const gareAval = [46.159389827490564, 6.6841585155838725];
const gareAmont = [46.16217833922179, 6.693734658793468];

// On crée la carte
const map = L.map('map').setView(gareAval, 15);

// On ajoute le fond de carte
L.tileLayer(
    'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
    {
        attribution: 'Tiles © Esri — Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
    }
).addTo(map);

// On ajoute les marqueurs
L.marker(gareAval)
    .addTo(map)
    .bindPopup("Gare aval du télésiège des Folliets");

L.marker(gareAmont)
    .addTo(map)
    .bindPopup("Gare amont du télésiège des Folliets");

// On ajoute la ligne du télésiège
const ligneFolliets = L.polyline(
    [
        gareAval,
        gareAmont
    ],
    {
        color: "#ffcc00",
        weight: 5,
        opacity: 1
    }
).addTo(map);

// On fait en sorte que la vue se mette à jour automatiquement
map.fitBounds(
    ligneFolliets.getBounds(),
    {
        padding: [50, 50]
    }
);