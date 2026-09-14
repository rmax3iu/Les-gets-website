// On définit la coordonnées des gares
const gareAval = [46.136927087412346, 6.68355009418269];
const gareAmont = [46.131006586785915, 6.704181855498783];

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
    .bindPopup("Gare aval du télésiège du Ranfoilly");

L.marker(gareAmont)
    .addTo(map)
    .bindPopup("Gare amont du télésiège du Ranfoilly");

// On ajoute la ligne du télésiège
const ligneRanfoilly = L.polyline(
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
    ligneRanfoilly.getBounds(),
    {
        padding: [50, 50]
    }
);

// Images pour la section construction
const carouselEtapes = [
    {
        image: "../../images/remontees/telesiege/debrayable/ranfoillyExpress/construction/image1.png",
        description: "Dépose de l'ancien télésiège 4 places"
    },
    {
        image: "../../images/remontees/telesiege/debrayable/ranfoillyExpress/construction/image2.png",
        description: "Gare amont en cours de montage"
    },
    {
        image: "../../images/remontees/telesiege/debrayable/ranfoillyExpress/construction/image3.png",
        description: "État du chantier en gare aval"
    },
    {
        image: "../../images/remontees/telesiege/debrayable/ranfoillyExpress/construction/image4.png",
        description: "Vue d'ensemble du chantier en gare aval"
    },
    {
        image: "../../images/remontees/telesiege/debrayable/ranfoillyExpress/construction/image5.png",
        description: "Bâtiment en gare aval abritant au sous-sol la nouvelle usine à neige"
    },
    {
        image: "../../images/remontees/telesiege/debrayable/ranfoillyExpress/construction/image6.png",
        description: "Les différentes têtes de pylônes montés"
    },
    {
        image: "../../images/remontees/telesiege/debrayable/ranfoillyExpress/construction/image7.png",
        description: "Pose du pylône 14 et début de la gare amont"
    },
    {
        image: "../../images/remontees/telesiege/debrayable/ranfoillyExpress/construction/image8.png",
        description: "Pose du pylône 14 et début de la gare amont"
    },
    {
        image: "../../images/remontees/telesiege/debrayable/ranfoillyExpress/construction/image9.png",
        description: "Héliportage des pylônes du télésiège"
    },
    {
        image: "../../images/remontees/telesiege/debrayable/ranfoillyExpress/construction/image10.png",
        description: "Héliportage du pylône 13 du télésiège"
    },
    {
        image: "../../images/remontees/telesiege/debrayable/ranfoillyExpress/construction/image11.png",
        description: "Pylône 2 et vue sur la suite de la ligne"
    },
    {
        image: "../../images/remontees/telesiege/debrayable/ranfoillyExpress/construction/image12.png",
        description: "Gare aval en cours de montage"
    },
    {
        image: "../../images/remontees/telesiege/debrayable/ranfoillyExpress/construction/image13.png",
        description: "Évolution de la gare amont"
    },
    {
        image: "../../images/remontees/telesiege/debrayable/ranfoillyExpress/construction/image14.png",
        description: "Pose des contours de la gare amont"
    },
    {
        image: "../../images/remontees/telesiege/debrayable/ranfoillyExpress/construction/image15.png",
        description: "Évolution de la gare aval et pose du pylône 1"
    },
    {
        image: "../../images/remontees/telesiege/debrayable/ranfoillyExpress/construction/image16.png",
        description: "Vue aérienne de la gare amont"
    },
    {
        image: "../../images/remontees/telesiege/debrayable/ranfoillyExpress/construction/image17.png",
        description: "Vue latérale de la gare amont quasiment terminée"
    },
    {
        image: "../../images/remontees/telesiege/debrayable/ranfoillyExpress/construction/image18.png",
        description: "Mise en place des dernières couverture sur la gare amont"
    },
    {
        image: "../../images/remontees/telesiege/debrayable/ranfoillyExpress/construction/image19.png",
        description: "Gare amont et pylône 14"
    },
    {
        image: "../../images/remontees/telesiege/debrayable/ranfoillyExpress/construction/image20.png",
        description: "Montage des couvertures sur la gare en gare aval"
    },
    {
        image: "../../images/remontees/telesiege/debrayable/ranfoillyExpress/construction/image21.png",
        description: "Construction du garage à côté de la gare aval"
    },
    {
        image: "../../images/remontees/telesiege/debrayable/ranfoillyExpress/construction/image22.png",
        description: "Image de la gare aval"
    },
    {
        image: "../../images/remontees/telesiege/debrayable/ranfoillyExpress/construction/image23.png",
        description: "Image de la gare aval avant l'ouverture officiel"
    },
    {
        image: "../../images/remontees/telesiege/debrayable/ranfoillyExpress/construction/image24.png",
        description: "Image d'un siège Leitner en gare aval"
    }
];

let carouselIndex = 0;

const carouselImage = document.getElementById("carousel_image");
const carouselDescription = document.getElementById("carousel_description");
const flecheGauche = document.getElementById("fleche_gauche");
const flecheDroite = document.getElementById("fleche_droite");

function afficherEtape(index)
{
    const etape = carouselEtapes[index];

    carouselImage.src = etape.image;
    carouselImage.alt = etape.description;
    carouselDescription.textContent = etape.description;
}

if (flecheGauche)
{
    flecheGauche.addEventListener("click", () =>
    {
        carouselIndex = (carouselIndex - 1 + carouselEtapes.length) % carouselEtapes.length;
        afficherEtape(carouselIndex);
    });
}

if (flecheDroite)
{
    flecheDroite.addEventListener("click", () =>
    {
        carouselIndex = (carouselIndex + 1) % carouselEtapes.length;
        afficherEtape(carouselIndex);
    });
}