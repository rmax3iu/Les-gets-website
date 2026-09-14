// On définit les coordonnées des gares
const gareAval = [46.135915451354, 6.683378839444524];
const gareAmont = [46.13004508841131, 6.6781663977239525];

// On crée la carte
const map = L.map('map').setView(gareAval, 15);

// On ajoute le fond de carte
L.tileLayer(
    'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
    {
        attribution: 'Tiles © Esri'
    }
).addTo(map);

// On ajoute les marqueurs
L.marker(gareAval)
.addTo(map)
.bindPopup("Gare aval du télésiège de la Rosta");

L.marker(gareAmont)
.addTo(map)
.bindPopup("Gare amont du télésiège de la Rosta");

// On ajoute la ligne du télésiège
const ligneRostaExpress = L.polyline(
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

// Ajustement automatique
map.fitBounds(
    ligneRostaExpress.getBounds(),
    {
        padding: [50, 50]
    }
);

// Images pour la section construction
const carouselEtapes = [
    {
        image: "../../images/remontees/telesiege/debrayable/rostaExpress/construction/image1.png",
        description: "Image des fondations en gare aval"
    },
    {
        image: "../../images/remontees/telesiege/debrayable/rostaExpress/construction/image2.png",
        description: "Gare amont en cours de montage"
    },
    {
        image: "../../images/remontees/telesiege/debrayable/rostaExpress/construction/image3.png",
        description: "Gare amont en cours de montage vue sous un autre angle"
    },
    {
        image: "../../images/remontees/telesiege/debrayable/rostaExpress/construction/image4.png",
        description: "Image de la gare aval et du local technique"
    },
    {
        image: "../../images/remontees/telesiege/debrayable/rostaExpress/construction/image5.png",
        description: "Image du pylône 3"
    },
    {
        image: "../../images/remontees/telesiege/debrayable/rostaExpress/construction/image6.png",
        description: "Image du pylône 4"
    },
    {
        image: "../../images/remontees/telesiege/debrayable/rostaExpress/construction/image7.png",
        description: "Image de la gare amont en cours de construction"
    },
    {
        image: "../../images/remontees/telesiege/debrayable/rostaExpress/construction/image8.png",
        description: "Image de la gare amont vue sous un autre angle"
    },
    {
        image: "../../images/remontees/telesiege/debrayable/rostaExpress/construction/image9.png",
        description: "Vue de la ligne depuis la gare amont"
    },
    {
        image: "../../images/remontees/telesiege/debrayable/rostaExpress/construction/image10.png",
        description: "Avancement de la gare aval"
    },
    {
        image: "../../images/remontees/telesiege/debrayable/rostaExpress/construction/image11.png",
        description: "Avancement de la gare amont"
    },
    {
        image: "../../images/remontees/telesiege/debrayable/rostaExpress/construction/image12.png",
        description: "Vue arrière de la gare amont et du local technique"
    },
    {
        image: "../../images/remontees/telesiege/debrayable/rostaExpress/construction/image13.png",
        description: "Progression de la gare aval et vue sur le tapis d'embarquement"
    },
    {
        image: "../../images/remontees/telesiege/debrayable/rostaExpress/construction/image14.png",
        description: "Autre vue du tapis d'embarquement en gare aval"
    },
    {
        image: "../../images/remontees/telesiege/debrayable/rostaExpress/construction/image15.png",
        description: "Vue de la gare amont avec vue sur les pylônes 9 et 10"
    },
    {
        image: "../../images/remontees/telesiege/debrayable/rostaExpress/construction/image16.png",
        description: "Vue arrière de la gare amont et du local technique"
    },
    {
        image: "../../images/remontees/telesiege/debrayable/rostaExpress/construction/image17.png",
        description: "Mise en place des couvertures en gare aval"
    },
    {
        image: "../../images/remontees/telesiege/debrayable/rostaExpress/construction/image18.png",
        description: "Autre vue ede la gare aval"
    },
    {
        image: "../../images/remontees/telesiege/debrayable/rostaExpress/construction/image19.png",
        description: "Image du tympan de la gare aval"
    },
    {
        image: "../../images/remontees/telesiege/debrayable/rostaExpress/construction/image20.png",
        description: "Vue latérale de la gare aval avec mise en place des couvertures"
    },
    {
        image: "../../images/remontees/telesiege/debrayable/rostaExpress/construction/image21.png",
        description: "Image de la gare amont avec les couvertures en place"
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