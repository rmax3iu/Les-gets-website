// On définit les coordonnées des gares pour le télésiège des Perrières
const gareAval = [46.14879314505529, 6.658114927150992];
const gareAmont = [46.137806768683156, 6.671680798931172];

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
    .bindPopup("Gare aval du télésiège des Perrières");

L.marker(gareAmont)
    .addTo(map)
    .bindPopup("Gare amont du télésiège des Perrières");

// On ajoute la ligne du télésiège
const lignePerrieres = L.polyline(
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
    lignePerrieres.getBounds(),
    {
        padding: [50, 50]
    }
);