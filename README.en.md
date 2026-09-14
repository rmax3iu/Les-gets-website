<!-- |-------------------------------------------------------------------------------------------| -->
<!-- |                                         LANGUAGE                                          | -->
<!-- |-------------------------------------------------------------------------------------------| -->
<div align="right">
  <a href="README.md">
    <img src="https://img.shields.io/badge/🇫🇷 Français-555555?style=for-the-badge" alt="Français"/>
  </a>
  <a href="README.en.md">
    <img src="https://img.shields.io/badge/🇬🇧 English-1e3a5f?style=for-the-badge" alt="English"/>
  </a>
</div>

<!-- |-------------------------------------------------------------------------------------------| -->
<!-- |                                          HEADER                                           | -->
<!-- |-------------------------------------------------------------------------------------------| -->
<h1 align="left">🏔️ Les Gets Website</h1>

<p align="justify">
This project is a personal website dedicated to the ski resort of Les Gets, in Haute-Savoie, France. It presents the resort through several pages: its geographic location, the history of its ski area maps, its ski lifts, real-time weather, the ski area's opening rate, and its webcams.
</p>

> **This project is under development and is not finished yet.** In addition, some features rely on private APIs whose credentials are not included in this repository for confidentiality reasons. If you clone and test the site, the weather and opening-rate pages will therefore not work under real conditions. Screenshots are provided to illustrate the expected result.

<!-- |-------------------------------------------------------------------------------------------| -->
<!-- |                                       ABOUT                                               | -->
<!-- |-------------------------------------------------------------------------------------------| -->
## ❄️ About the project

<p align="justify">
The site consists of a home page presenting a few photos and a short history of the resort, followed by six pages accessible from a shared navigation menu:
</p>

- **Geographic location**: presentation of the resort through a few key pieces of information such as altitude, ski area size and population, along with an interactive map of the region.
- **Old ski area maps**: browse the ski area maps by year.
- **Ski lifts**: detailed reports on fixed-grip and detachable chairlifts as well as gondolas.
- **Weather**: temperature, snow depth and avalanche risk in the village and at the summit of the resort, via a private API.
- **Ski area opening rate**: opening status of each lift, via a private API.
- **Webcams**: browse the resort's webcams.

<br>
<p align="justify">
The map on the geography page is built with the Leaflet library. The rest of the site is developed in HTML, CSS and JavaScript.
</p>

| Technology | Usage |
|:---:|---|
| ![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white&style=for-the-badge) | Page structure |
| ![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white&style=for-the-badge) | Styling and animations |
| ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black&style=for-the-badge) | Interactivity and API calls |
| ![Leaflet](https://img.shields.io/badge/Leaflet-199900?logo=leaflet&logoColor=white&style=for-the-badge) | Interactive map on the geography page |

<!-- |-------------------------------------------------------------------------------------------| -->
<!-- |                                        PREVIEW                                            | -->
<!-- |-------------------------------------------------------------------------------------------| -->
## 📸 Preview

**Home page:**
<div align="center">
  <img src="images/readme/image1.png" alt="Home page" width="700"/>
</div>
<br>

**Geography page:**
<div align="center">
  <img src="images/readme/image2.png" alt="Geography page" width="700"/>
</div>
<br>

**Old maps page:**
<div align="center">
  <img src="images/readme/image3.png" alt="Old ski area maps" width="700"/>
</div>
<br>

**Ski lifts page:**
<div align="center">
  <img src="images/readme/image4.png" alt="Ski lifts" width="700"/>
</div>
<br>

**Weather page:**
<div align="center">
  <img src="images/readme/image5.png" alt="Weather" width="700"/>
</div>
<br>

**Opening rate page:**
<div align="center">
  <img src="images/readme/image6.png" alt="Ski area opening rate" width="700"/>
</div>
<br>

**Webcams page:**
<div align="center">
  <img src="images/readme/image7.png" alt="Webcams" width="700"/>
</div>
<br>

<!-- |-------------------------------------------------------------------------------------------| -->
<!-- |                                        USAGE                                              | -->
<!-- |-------------------------------------------------------------------------------------------| -->
## 🚀 Run the project

<p align="justify">
To view the site, simply open the <code>index.html</code> file in a browser. The geography, maps, ski lifts and webcams pages work normally. However, the weather and ski area opening rate pages will not be able to display real data, as the credentials for the private APIs used are not included in this repository.
</p>

<!-- |-------------------------------------------------------------------------------------------| -->
<!-- |                                    PROJECT STRUCTURE                                      | -->
<!-- |-------------------------------------------------------------------------------------------| -->
## 📁 Project structure

```text
Les-gets-website/
├── css/                         # Stylesheets
├── images/
│   ├── avalanche/               # Icons and images related to avalanche risk
│   ├── carte/                   
│   ├── icone/                   # Site icons 
│   ├── logo/                    # Site logo
│   ├── paysage/                 # Resort landscape photos
│   ├── piste/                   # Ski slope icons
│   ├── plan/                    # Old ski area maps
│   ├── remontees/               # Ski lift images
│   └── readme/                  # Images used in the README
├── js/                          # JavaScript scripts
├── pages/
│   ├── remontees/               # Detailed ski lift pages
│   ├── geographie.html          # Geographic location page
│   ├── meteo.html               # Weather page
│   ├── ouvertureDomaine.html    # Ski area opening rate page
│   ├── plan.html                # Old ski area maps page
│   └── webcam.html              # Webcams page
├── index.html                   # Home page
├── README.md                    # Project documentation (French)
└── README.en.md                 # Project documentation (English)

```

<!-- |-------------------------------------------------------------------------------------------| -->
<!-- |                                       TO DO                                               | -->
<!-- |-------------------------------------------------------------------------------------------| -->
## 🛠️ To do

<p align="justify">
The site is still under development. Here are the main points that still need improvement:
</p>

```
- Write reports for the T-bar and platter lifts.
- Set up responsive design so the site adapts to tablets and phones.
- Find a way to secure the passwords used in the JavaScript so the full source
  code can be made public.

- Finish the ski area opening rate page.
- Build a contact page with a form sending an email containing the name, first name
  and the information entered.
- Improve the footer.

- Update the pages dedicated to ski lifts to reflect recent removals and replacements
  of installations, notably the Pointe chairlift, the Grande Ourse chairlift and the
  Grains d'Or chairlift.
```

<!-- |-------------------------------------------------------------------------------------------| -->
<!-- |                                       CONTRIBUTORS                                        | -->
<!-- |-------------------------------------------------------------------------------------------| -->
## 👥 Contributors

Work carried out individually as part of a personal project.

<div align="center">

[![rmax3iu](https://img.shields.io/badge/rmax3iu-1e3a5f?style=for-the-badge&logo=github&logoColor=white)](https://github.com/rmax3iu)

</div>
