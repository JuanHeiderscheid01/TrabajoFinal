const comoInscribirse = document.querySelector("#botonf");
const info = document.querySelector(".info");

comoInscribirse.addEventListener("click", () => {
    info.classList.toggle("mostrar");
});