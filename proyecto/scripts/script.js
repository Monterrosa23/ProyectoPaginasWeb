
let indice = 0;
const diapositivas = document.getElementById("diapositivas");
const total = diapositivas.children.length;

const items = document.querySelectorAll('.btnDonacion');

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



// funcion para mover el carrusel
function moverCarrusel(direccion) {
    indice = (indice + direccion + total) % total;
    diapositivas.style.transform = `translateX(-${indice * 100}%)`;

}
// funcion para confirmar
function confirmar(){
    document.getElementById('mensaje').innerHTML="<p>¿Esta seguro de realizar la donacion?<br>Por favor confirme la accion.</p><br><button id='cerrar' class='btnFlotante' onclick='mostrarMensaje(1)'>Cerrar</button> <button id='confirmar'  class='confirmar btnFlotante' onclick='mostrarMensaje(2)'>Confirmar</button>";
    document.getElementById('mensaje').style.display = 'block';

}
function mostrarMensaje(numero){

    if (numero==1){
        document.getElementById('mensaje').innerHTML="<p>no se puede forzar el altruismo en el corazon de la gente</p><br><button onclick='cerrar()'>Cerrar</button>";
    }
    else if(numero == 2){
        document.getElementById('mensaje').innerHTML="<p>agradecemos su colaboracion</p><br><button onclick='cerrar()'>Cerrar</button>";

    }
    

}

function cerrar() {
    
    document.getElementById('mensaje').style.display = 'none';

}

// funcion para que el boton de la donacion se mantenga seleccionado
function keep(opcion){
    const total = items.length;
    let cadena = "donacion"+opcion;
    let i=0;
    while (i<total){
        const point = document.getElementById("donacion"+(i));
            // y en caso de contener la clase actual, lo que hace es quitarla
            // classlist.cointains nos permite ver si el elemento tiene la clase actual
        if (point.classList.contains('actual')) {
                // y toggle lo que hace es que si la tiene la quita y si no la tiene la pone
                //normalmente lo que hace es quitarla, porque este ciclo se activa cada vez que se selecciona un item
                // y como el bucle va primero, lo que hara es quitar todos los puntos que tengan la clase actual
            point.classList.toggle('actual');
        }
            i++;

    }
    const marca = document.getElementById(cadena);
    marca.classList.toggle('actual');


}

