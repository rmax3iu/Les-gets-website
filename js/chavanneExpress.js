// On définit les coordonnées des gares pour le télésiège des Chavannes Express
const gareAval = [46.156736542773054, 6.66836138233767];
const gareAmont = [46.145059455116595, 6.694047230197449];

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
    .bindPopup("Gare aval du télésiège des Chavannes Express");

L.marker(gareAmont)
    .addTo(map)
    .bindPopup("Gare amont du télésiège des Chavannes Express");

// On ajoute la ligne du télésiège
const ligneChavannesExpress = L.polyline(
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
    ligneChavannesExpress.getBounds(),
    {
        padding: [50, 50]
    }
);