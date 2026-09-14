// On définit les coordonnées des gares pour la télécabine des Chavannes
const gareAval = [46.15693524131906, 6.6687951449493355];
const gareAmont = [46.1503347976478, 6.685332037010672];

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
    .bindPopup("Gare aval de la télécabine des Chavannes");

L.marker(gareAmont)
    .addTo(map)
    .bindPopup("Gare amont de la télécabine des Chavannes");

// On ajoute la ligne de la télécabine
const ligneTelesiege = L.polyline(
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
    ligneTelesiege.getBounds(),
    {
        padding: [50, 50]
    }
);