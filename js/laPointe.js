// On définit les coordonnées des gares pour le télésiège de la Pointe
const gareAval = [46.16452439762759, 6.657704635520732];
const gareAmont = [46.16833077531693, 6.646819845479813];

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
    .bindPopup("Gare aval du télésiège de la Pointe");

L.marker(gareAmont)
    .addTo(map)
    .bindPopup("Gare amont du télésiège de la Pointe");

// On ajoute la ligne du télésiège
const lignePointe = L.polyline(
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
    lignePointe.getBounds(),
    {
        padding: [50, 50]
    }
);