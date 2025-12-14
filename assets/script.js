// Initialisation des constantes et variables :
const slides = [
	{
		image: "slide1.jpg",
		tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
	},
	{
		image: "slide2.jpg",
		tagLine:
			"Tirages haute définition grand format <span>pour vos bureaux et events</span>",
	},
	{
		image: "slide3.jpg",
		tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
	},
	{
		image: "slide4.png",
		tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
	},
]
const left = document.querySelector("#banner .arrow_left") // flèche gauche
const right = document.querySelector("#banner .arrow_right") // flèche droite
const pBanner = document.querySelector("#banner p") // paragraphe du carrousel
const imgBanner = document.querySelector(".banner-img") // image du carrousel
const parentDot = document.querySelector("#banner div") // conteneur parent des dots
const spans = [] // Tableau des dots
let i = 0 // index du tableau slides[]

// Création des dots normaux, puis celui sélectionné :
for (let i = 0; i < slides.length; i++) {
    spans.push(document.createElement("span"));
    spans[i].classList.add("dot");
    parentDot.appendChild(spans[i]);
}
spans[0].classList.add("dot_selected")

// Fonction qui gère les changements après click :
function clickFunction(i) {
	imgBanner.src = `./assets/images/slideshow/${slides[i].image}` // Change l'image
	pBanner.innerHTML = slides[i].tagLine // Change le contenu du paragraphe
	spans[i].classList.add("dot_selected") // Sélectionne le dot prévu
}

// Évènements après click sur les flèches :
right.addEventListener("click", () => {
	spans[i].classList.remove("dot_selected") // Dessélectionne le dot en cours
	i++
	if (i >= slides.length) {
		i = 0 // Retour à la première image
	}
	clickFunction(i)
})
left.addEventListener("click", () => {
	spans[i].classList.remove("dot_selected") // Dessélectionne le dot en cours
	i--
	if (i < 0) {
		i = slides.length-1 // Retour à la dernière image
	}
	clickFunction(i)
})