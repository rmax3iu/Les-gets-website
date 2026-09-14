// On définit les coordonnées des gares pour la télécabine des Chavannes
const gareAval = [46.15694172271303, 6.668776577063392];
const gareAmont = [46.150333394692204, 6.685347821679936];

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
const ligneChavannes = L.polyline(
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
    ligneChavannes.getBounds(),
    {
        padding: [50, 50]
    }
);