// Initialisation des constantes et des variables :
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
const parentDot = document.querySelector("div .dots") // conteneur parent des dots
let i = 0 // index du tableau slides[]
let img_selected = slides[i].image // Image sélectionnée du carrousel

// Fonction qui ajoute les dots :
function dotsFunction() {
	for (let i = 0; i < slides.length; i++) {
		const dotSpan = document.createElement("span")
			if (slides[i].image === img_selected) {
				dotSpan.classList.add("dot_selected")
			} else {
				dotSpan.classList.add("dot")
			}
		parentDot.appendChild(dotSpan)
	}
}

// Fonction qui gère tous les changements après click :
function clickFunction(i) {
	imgBanner.src = `./assets/images/slideshow/${slides[i].image}` // Change l'image
	img_selected = slides[i].image
	pBanner.innerHTML = slides[i].tagLine // Change le paragraphe
	const spans = parentDot.querySelectorAll("span")
		spans.forEach(span => {
			parentDot.removeChild(span) // Efface les dots
	})
	dotsFunction() // Remet les dots
}

dotsFunction()

// Évennements après click sur les flèches :
right.addEventListener("click", () => {
	i++
	if (i >= slides.length) {
		i = 0 // Retour à la première image
	}
	clickFunction(i)
})
left.addEventListener("click", () => {
	i--
	if (i < 0) {
		i = slides.length-1 // Retour à la dernière image
	}
	clickFunction(i)
})