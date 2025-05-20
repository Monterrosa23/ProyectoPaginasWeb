
let indice = 0;
const diapositivas = document.getElementById("diapositivas");
const total = diapositivas.children.length;


window.onscroll = function () {
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (scrollTop / scrollHeight) * 100;
    document.getElementById("scroll-progress").style.width = scrolled + "%";

};


function menuBot() {
    const nav = document.getElementById('menu');
    nav.classList.toggle('active');

}




function moverCarrusel(direccion) {
    indice = (indice + direccion + total) % total;
    diapositivas.style.transform = `translateX(-${indice * 100}%)`;

}