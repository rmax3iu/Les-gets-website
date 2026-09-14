// On définit la coordonnées des gares
const gareAval = [46.13801184708825, 6.683249315993843];
const gareAmont = [46.14027372187512, 6.695072209467294];

// On créer la carte
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
    .bindPopup("Gare aval du télésiège des Nauchets Express");

L.marker(gareAmont)
    .addTo(map)
    .bindPopup("Gare amont du télésiège des Nauchets Express");

// On ajoute la ligne du télésiège
const ligneNauchet = L.polyline(
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
    ligneNauchet.getBounds(),
    {
        padding: [50, 50]
    }
);