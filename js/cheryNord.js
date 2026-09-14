// On définit les coordonnées des gares
const gareAval = [46.17078, 6.63298];
const gareAmont = [46.16868454118696, 6.646949549128231];

// On crée la carte
const map = L.map('map').setView(gareAval, 15);

// On ajoute le fond de carte
L.tileLayer
(
    'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
    {
        attribution: 'Tiles © Esri — Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
    }
).addTo(map);

// On ajoute les marqueurs
L.marker(gareAval)
.addTo(map)
.bindPopup("Gare aval du télésiège Chéry Nord");

L.marker(gareAmont)
.addTo(map)
.bindPopup("Gare amont du télésiège Chéry Nord");

// On ajoute la ligne du télésiège
const ligneCheryNord = L.polyline
(
    [
        gareAval,
        gareAmont
    ],
    {
        color:"#ffcc00",
        weight:5,
        opacity:1
    }
).addTo(map);

// On fait en sorte que la vue se mette à jour automatiquement
map.fitBounds
(
    ligneCheryNord.getBounds(),
    {
        padding:[50,50]
    }
);