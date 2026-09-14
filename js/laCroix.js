// On définit les coordonnées des gares pour le télésiège de la Croix
const gareAval = [46.14954032822657, 6.685798108856202];
const gareAmont = [46.14550107187693, 6.6934906643420025];

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
    .bindPopup("Gare aval du télésiège de la Croix");

L.marker(gareAmont)
    .addTo(map)
    .bindPopup("Gare amont du télésiège de la Croix");

// On ajoute la ligne du télésiège
const ligneCroix = L.polyline(
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
    ligneCroix.getBounds(),
    {
        padding: [50, 50]
    }
);