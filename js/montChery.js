// On définit les coordonnées des gares pour la télécabine du Mont Chéry
const gareAval = [46.160795294616456, 6.669722783842929];
const gareAmont = [46.165494726924756, 6.658705838485143];

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
    .bindPopup("Gare aval de la télécabine du Mont Chéry");

L.marker(gareAmont)
    .addTo(map)
    .bindPopup("Gare amont de la télécabine du Mont Chéry");

// On ajoute la ligne de la télécabine
const ligneMontChery = L.polyline(
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
    ligneMontChery.getBounds(),
    {
        padding: [50, 50]
    }
);