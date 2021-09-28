const bouton = document.querySelector("input");
const text = document.querySelectorAll(".text");
const dark = document.querySelectorAll(".dark");
const reseausocial = document.querySelectorAll(".reseausocial");
const tuile = document.querySelectorAll(".flex2")

let darkTheme = "dark";

bouton.addEventListener("click", function () {
	if (darkTheme == "dark") {
		document.body.style.backgroundColor = "black";
		document.body.style.color = "white";
		for (let i = 0; i < dark.length; i++) {
			dark[i].style.color = "#9297B5";
		}
		for (let i = 0; i < text.length; i++) {
			text[i].style.color = "white";
		}
		for (let i = 0; i < reseausocial.length; i++) {
			reseausocial[i].style.backgroundColor = "#242B43";
		}
		for (let i = 0; i < tuile.length; i++) {
			tuile[i].style.backgroundColor = "#242B43";
			tuile[i].style.border = "none";
		}
		darkTheme = "light";
	}
	else {
		document.body.style.backgroundColor = "";
		document.body.style.color = "";
		for (let i = 0; i < dark.length; i++) {
			dark[i].style.color = "";
		}
		for (let i = 0; i < text.length; i++) {
			text[i].style.color = "";
		}
		for (let i = 0; i < reseausocial.length; i++) {
			reseausocial[i].style.backgroundColor = "";
		}
		for (let i = 0; i < tuile.length; i++) {
			tuile[i].style.backgroundColor = "";
			tuile[i].style.border = "";
		}
		darkTheme = "dark";
	}
});