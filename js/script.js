const pokemon001 = "Bulbasaur";
const botao = document.querySelector("button");
const section = document.querySelector("section");

function verificaPokemon() {
    const h3 = document.querySelector("h3");
    const chute = document.querySelector("input").value;

    section.classList.add("active");
    if (pokemon001 == chute) {
        h3.textContent = "Certa!!";
        h3.classList.remove("error");
    } else {
        h3.classList.add("error");
        h3.textContent = "Errada!!";
    }
}

function fechaModal() {
    section.classList.remove("active");
}

function clicaForaFechaModal(event) {
    console.log(event.target);

    if (event.target.tagName == "section") {
        section.classList.remove("active");
    }
}

window.onload = function imageOption() {
    document.getElementById("imageoption").src = "images/pokemon/001.png";
}

botao.onclick = verificaPokemon;

section.querySelector("button").onclick = fechaModal;
section.onclick = clicaForaFechaModal;