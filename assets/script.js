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

// Initialisation des variables :
const nbImages = slides.length
const left = document.querySelector("#banner .arrow_left")
const right = document.querySelector("#banner .arrow_right")
const slider = document.querySelector("#banner") // en attente des autres étapes
const parentDot = document.querySelector("div .dots")
let img_selected = slides[0].image // en attente des autres étapes


// Ajoute les dots dynamiquement :
for (let i = 0; i < nbImages; i++) {
	let dotSpan = document.createElement("span")
		if (slides[i].image === img_selected) {
			dotSpan.classList.add("dot_selected")
		} else {
	 		dotSpan.classList.add("dot")
		}
	parentDot.appendChild(dotSpan)
}

// Évennements sur les flèches :
let e = 0

left.addEventListener("click", () => {
	e++
	console.log(e)
})

right.addEventListener("click", () => {
	e--
	console.log(e)
})
