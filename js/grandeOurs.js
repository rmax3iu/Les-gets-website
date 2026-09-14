// On définit les coordonnées des gares pour le télésiège de la Grande Ourse
const gareAval = [46.166334138487215, 6.660057528283658];
const gareAmont = [46.16947920304588, 6.650758537690191];

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
    .bindPopup("Gare aval du télésiège de la Grande Ourse");

L.marker(gareAmont)
    .addTo(map)
    .bindPopup("Gare amont du télésiège de la Grande Ourse");

// On ajoute la ligne du télésiège
const ligneGrandeOurse = L.polyline(
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
    ligneGrandeOurse.getBounds(),
    {
        padding: [50, 50]
    }
);