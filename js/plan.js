const anneePlan = document.getElementById("plan_annee");
const anneeAffichee = document.getElementById("annee_affichee");

const planDisponible = {
    "2025-2026": "../images/plan/plan_2025_2026.png",
    "2024-2025": "../images/plan/plan_2024_2025.png",
    "2023-2024": "../images/plan/plan_2023_2024.png",
    "2020-2021": "../images/plan/plan_2020_2021.png",
    "2019-2020": "../images/plan/plan_2019_2020.png",
    "2017-2018": "../images/plan/plan_2017_2018.png",
    "2016-2017": "../images/plan/plan_2016_2017.png",
    "2015-2016": "../images/plan/plan_2015_2016.png",
    "2013-2014": "../images/plan/plan_2013_2014.png",
    "2012-2013": "../images/plan/plan_2012_2013.jpg",
    "2011-2012": "../images/plan/plan_2011_2012.png",
    "2010-2011": "../images/plan/plan_2010_2011.png",
    "2007-2008": "../images/plan/plan_2007_2008.jpg"
};

const messageInitial = "Veuillez sélectionner une année pour afficher son plan";

anneePlan.selectedIndex = 0;
anneeAffichee.innerHTML = messageInitial;

anneePlan.addEventListener("change", () =>
{
    const anneeChoisie = anneePlan.value;

    if (anneeChoisie === "")
    {
        anneeAffichee.innerHTML = messageInitial;
        return;
    }

    const chemin = planDisponible[anneeChoisie];

    if (!chemin)
    {
        anneeAffichee.innerHTML = `Aucun plan disponible pour la saison ${anneeChoisie}`;
        return;
    }

    const testImage = new Image();

    testImage.onload = () =>
    {
        anneeAffichee.innerHTML = `<img src="${chemin}" alt="Plan du domaine skiable ${anneeChoisie}">`;
    };

    testImage.onerror = () =>
    {
        anneeAffichee.innerHTML = `Aucun plan disponible pour la saison ${anneeChoisie}`;
    };

    testImage.src = chemin;
});