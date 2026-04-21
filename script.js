function mostrarMensaje() {
    let mensaje = document.getElementById("mensaje");
    let boton = event.target;

    if (mensaje.style.opacity === "1") {
        // OCULTAR
        mensaje.style.opacity = "0";
        mensaje.style.transform = "translateY(30px)";
        boton.innerText = "Mostrar mensaje";
    } else {
        // MOSTRAR
        mensaje.innerHTML = "🐾 Cuida y protege a los animales 🐾";
        mensaje.style.display = "block";

        setTimeout(() => {
            mensaje.style.opacity = "1";
            mensaje.style.transform = "translateY(0)";
            mensaje.style.textAlign = "center";
        }, 50);

        boton.innerText = "Ocultar mensaje";
    }
}

function mostrarMensaje2() {
    let mensaje = document.getElementById("mensaje2");
    let boton = event.target;

    if (mensaje.style.opacity === "1") {
        // OCULTAR
        mensaje.style.opacity = "0";
        mensaje.style.transform = "translateY(30px)";
        boton.innerText = "Algo sobre mí";
    } else {
        // MOSTRAR
        mensaje.innerHTML = "🎧 Mi pasatiempo favorito es escuchar música 🎧";
        mensaje.style.display = "block";

        setTimeout(() => {
            mensaje.style.opacity = "1";
            mensaje.style.transform = "translateY(0)";
            mensaje.style.textAlign = "center";
        }, 50);

        boton.innerText = "Ocultar mensaje";
    }
}

function abrirModal() {
    let modal = document.getElementById("modal");
    let img = document.getElementById("imagenModal");

    modal.style.display = "block";
    img.src = "img/tarjeta.png"; // cambia por la imagen que quieras
}

function cerrarModal() {
    document.getElementById("modal").style.display = "none";
}