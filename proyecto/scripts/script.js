
let indice = 0;
const diapositivas = document.getElementById("diapositivas");
const total = diapositivas.children.length;
const monto = document.getElementById("donacion1");

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
    const nombre = document.getElementById("nombre").value;
    const correo = document.getElementById("correo").value;
    const pago = document.getElementById("metodo").value;
    alert("Texto ingresado: " + nombre);

    if((nombre == "")){
        alert("Texto ingresado: " + nombre);
        document.getElementById('mensaje').innerHTML="<p>¿Esta seguro de realizar la donacion?<br>Por favor confirme la accion.</p><br><button id='cerrar' class='btnFlotante' onclick='mostrarMensaje(1)'>Cerrar</button> <button id='confirmar'  class='confirmar btnFlotante' onclick='mostrarMensaje(2)'>Confirmar</button>";
        document.getElementById('mensaje').style.display = 'block';
    }
    else if ((nombre != null)){
        alert("Texto ingresado: " + correo);
        document.getElementById('mensaje').innerHTML="<p>error en los datos por favor rellene los campos.</p><br><button id='cerrar' class='btnFlotante' onclick='mostrarMensaje(3)'>Cerrar</button>";
        document.getElementById('mensaje').style.display = 'block';
    }
    else{
        alert("Texto ingresado: " + pago);

    }



}
function mostrarMensaje(numero){

    if (numero==1){
        document.getElementById('mensaje').innerHTML="<p>no se puede forzar el altruismo en el corazon de la gente</p><br><button onclick='cerrar()'>Cerrar</button>";
    }
    else if(numero == 2){
        document.getElementById('mensaje').innerHTML="<p>agradecemos su colaboracion</p><br><button onclick='cerrar()'>Cerrar</button>";

    }
    else if(numero == 3){
        cerrar();
    }
}

function cerrar() {
    
    document.getElementById('mensaje').style.display = 'none';

}



// funcion para que el boton de la donacion se mantenga seleccionado
function keep(opcion,num){
    const items = document.querySelectorAll('.btnDonacion');
    items.forEach(b => b.classList.remove('activo'));
      // Agrega la clase 'activo' solo al botón presionado
    opcion.classList.add('activo');
    monto = document.getElementById("donacion"+num);


}

