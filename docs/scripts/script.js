
let indice = 0;
const diapositivas = document.getElementById("diapositivas");
const total = diapositivas.children.length;
const monto = document.getElementById("donacion1");


// esta funcion a veces funciona y a veces pero es por l mucho que varia el tamanyo de la pantallas
window.onscroll = function () {
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (scrollTop / scrollHeight) * 100;
    document.getElementById("scroll-progress").style.width = scrolled + "%";

};

// estos se activa cuando la pantalla es chiquita
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
function confirmar() {
    // aqui estoy buscando los datos segun la id
    const nombre = document.getElementById("nombre").value.trim();
    const correo = document.getElementById("correo").value.trim(); 
    const pago = document.getElementById("metodo").value;
    const monto = document.getElementById("monto").value.trim();

    const mensaje = document.getElementById('mensaje');

    // Verifica si algún campo está vacío
    if (!nombre || !correo || !pago || !monto) {
        mensaje.innerHTML = `
            <p>Error en los datos: por favor rellene todos los campos.</p>
            <br>
            <button id='cerrar' class='btnFlotante' onclick='mostrarMensaje(3)'>Cerrar</button>
        `;
    } else {
        mensaje.innerHTML = `
            <p>¿Está seguro de realizar la donación?<br>Por favor confirme la acción.</p>
            <br>
            <button id='cerrar' class='btnFlotante' onclick='mostrarMensaje(1)'>Cerrar</button>
            <button id='confirmar' class='confirmar btnFlotante' onclick='mostrarMensaje(2)'>Confirmar</button>
        `;
    }

    mensaje.style.display = 'block';
}

// esta funcion es grandisima porque controla los mensajes y cuadros emergentes de todo el sitio web 
function mostrarMensaje(numero){
    // esto quiza es un poco raro, 
    // pero considere mas eficiente llamar a la misma funcion y ponerle diferentes mensajes segun el valor 
    // antes que hacer una funcion para cada mensaje

    if (numero==1){
        document.getElementById('mensaje').innerHTML="<p>no se puede forzar el altruismo en el corazon de la gente</p><br><button onclick='cerrar()'>Cerrar</button>";
    }
    else if(numero == 2){
        document.getElementById('mensaje').innerHTML="<p>agradecemos su colaboracion</p><br><button onclick='cerrar()'>Cerrar</button>";

    }
    else if(numero == 3){
        cerrar();
    }
    else if(numero == 4){
        
        document.getElementById('mensaje').innerHTML=`
        <img style='border-radius: 10px; width: 100px; height:auto' 
        src='img/otros/personas/jose.png' alt='monterrosa'>
        <p>
            mi nombre es jose roberto monterrosa bonilla, estudiante en el instituto tecnico ITCA FEPADE de la carrera
            tecnica de ingenieria en desarrollo de software
            tengo 22 años resido en el area zacatecoluca, me gustan los juegos de cartas, el pinpong y cocinar<br>
            redes:
        </p>
        <br>
        <a class="facebook" href="https://www.facebook.com/itca.fepade.zacatecoluca/" title="DPW">
            <img src="img/otros/iconos/facebook1.png" width="30px" height="30px" > </a>
        <br>
        <br>
        <button onclick='cerrar()'>Cerrar</button>`
        ;

        mensaje.style.display = 'block';
    }
    else if(numero == 5){
        
        document.getElementById('mensaje').innerHTML=`
        <img style="border-radius: 10px; width: 100px; height: auto" src="img/otros/personas/cristian.png" alt="cristian">
        <p>
        Soy Cristian Miguel Hernandez Amaya, futuro programador actualmente estudiando un técnico en ingeniería 
        en desarrollo de software.
        Tengo 21 años, resido en el área de Barrio El Centro, San Emigdio La Paz y me gustan los videojuegos de estrategia.<br>
        Redes:
        </p>
        <br>
        <a class="facebook" href="https://www.facebook.com/itca.fepade.zacatecoluca/" title="DPW">
            <img src="img/otros/iconos/facebook1.png" width="30px" height="30px" > </a>
        <br>
        <br>
        <button onclick="cerrar()">Cerrar</button>`;

        mensaje.style.display = 'block';
    }
    else if(numero == 6){
        
        document.getElementById('mensaje').innerHTML=`
        <img style='border-radius: 10px; width: 100px; height:auto' 
        src='img/otros/personas/jeremias.png' alt='jeremias'>
        <p>
            jeremias jeremias
            <br>
            redes:
        </p>
        <br>
        <a class="facebook" href="https://www.facebook.com/itca.fepade.zacatecoluca/" title="DPW">
            <img src="img/otros/iconos/facebook1.png" width="30px" height="30px" > </a>
        <br>
        <br>
        <button onclick='cerrar()'>Cerrar</button>`
        ;

        mensaje.style.display = 'block';
    }
    else if(numero == 7){
        
        document.getElementById('mensaje').innerHTML=`
        <img style='border-radius: 10px; width: 100px; height:auto' 
        src='img/otros/personas/anderson.png' alt='anderson'>
        <p>
            Soy Anderson Josué Urquilla Rivas, 
            futuro desarrollador de videojuegos actualmente 
            estudio un técnico en Ingeniería en desarrollo de Software en I.T.C.A, 
            Zacatecoluca, tengo 19 años, 
            resido en el Rosario, La Paz y me gusta la música, 
            el fútbol y los videojuegos de fútbol.<br>
            Redes: 
        </p>
        <br>
        <a class="facebook" href="https://www.facebook.com/itca.fepade.zacatecoluca/" title="DPW">
            <img src="img/otros/iconos/facebook1.png" width="30px" height="30px"> </a>
        <br>
        <br>
        <button onclick='cerrar()'>Cerrar</button>`
        ;

        mensaje.style.display = 'block';
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

function mostrarBusqueda(num) {
    if(num==1){
        const nav = document.getElementById('buscador');
        nav.classList.toggle('activeBuscar');
        nav.value = "";

    }
    else if(num==2){
        const nav = document.getElementById('buscadorSmall');
        nav.classList.toggle('activeBuscar');
        nav.value = "";
        
    }
    

}


