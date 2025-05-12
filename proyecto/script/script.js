let indice = 0;
// buscamos el elemento track, que es el que hara el movimiento del carrusel
const track = document.getElementById('track');
// buscamos los items del carrusel, que son las imagenes
const items = document.querySelectorAll('.carruselItem');

function mover(direccion) {
    // mover el carrusel a la izquierda o a la derecha, dependiendo de la dirección
    const total = items.length;
    indice += direccion;
    // si el indice que le damos desde el html es menor a 0 lo pondra en 0, osea no se movera mas a la izquierda
    if (indice < 0) indice = 0;
    // caso contrario, si el indice si es mayor lo qu ehace es recorrer el carrusel a la izquierda
    if (indice >= total) indice = total -1;
    // en resumen, la dos lineas de codigo de arriba son para la situacion de que quieras ir a la izquierda
    // una desde el caso de este en la posicion 0 para que no te muevas
    // y la otra por si estas en cualquier otra posicion que no sea cero
    const ancho = items[0].offsetWidth;
    // lo que hace lo de abajo vilmente es tomar el ancho de la imagen y multiplicarlo por el indice
    // y luego lo que hace es mover el carrusel esa cantidad de pixeles a la izquierda
    // osea si estas en la posicion 0 no se movera, si estas en la posicion 1 se movera el ancho de la imagen
    track.style.transform = `translateX(-${indice * ancho}px)`;
}


function seleccionar(direccion){
    inidice=0;
    const total = items.length;
    let i=0;

    let positionPoint = 0;
    let cadena ="";
    // esto es una funcion para poner botones de seleccion en el carrusel
    // dependiendo del boton que elijas pues te mandara a una imagen u otra


    // si el indice es diferente de la direccion que le pasamos por parametro
    // lo que hace es cambiar el indice a la direccion que le pasamos por parametro
    // y luego lo que hace es mover el carrusel a la izquierda o a la derecha, dependiendo de la dirección

    if (indice != direccion) {

        indice = direccion;
        positionPoint = direccion +1;
        cadena = "punto"+positionPoint;
        
        // esto es un seguro, porque quise meterle un apartado visual que te muestre en que item del carrusel estas
        // este ciclo recorre todos items del carrusel
        while (i < total) {
            // busca los items del carrusel
            const point = document.getElementById("punto"+(i+1));
            // y en caso de contener la clase actual, lo que hace es quitarla
            // classlist.cointains nos permite ver si el elemento tiene la clase actual
            if (point.classList.contains('actual')) {
                // y toggle lo que hace es que si la tiene la quita y si no la tiene la pone
                //normalmente lo que hace es quitarla, porque este ciclo se activa cada vez que se selecciona un item
                // y como el bucle va primero, lo que hara es quitar todos los puntos que tengan la clase actual
                
                point.classList.toggle('actual');
            }
            i++;
            // luego el if de abajo lo pondra de vuelta pero solo al que seleccionaste
        }

        
        const marca = document.getElementById(cadena);
        marca.classList.toggle('actual');

        const ancho = items[0].offsetWidth;
        track.style.transform = `translateX(-${indice * ancho}px)`;
    }

    
}
// esta funcion vilmente lo que hace es buscar el elemento con el id menu y le agrega o le quita la clase active

function menuBot() {
    const nav = document.getElementById('menu');
    nav.classList.toggle('active');

}
