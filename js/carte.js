// On crée la carte interactive et on la centre sur les coordonnées
const map = L.map("carte").setView(
    [46.1591, 6.6667],
    13
);

// On charge et affiche le fond de carteOpenStreetMap
L.tileLayer(
    "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
    {
        attribution: "&copy; contributeurs OpenStreetMap",
        maxZoom: 18,
    }
).addTo(map);

// On place un repère visuel sur les coordonnées et on l'ajoute à la carte
const marker = L.marker(
    [46.1591, 6.6667]
).addTo(map);

// On attache une bulle d'information au marqueur et on l'ouvre directement
marker.bindPopup(
    "<strong>Les Gets</strong><br>1172 m d'altitude"
).openPopup();