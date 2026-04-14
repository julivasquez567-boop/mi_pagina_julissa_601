function mostrarMensaje() {
    let mensaje = document.getElementById("mensaje");

    mensaje.innerHTML = "🐾 Cuida y protege a los animales 🐾";
    mensaje.style.display = "block";

    setTimeout(() => {
        mensaje.style.opacity = "1";
        mensaje.style.transform = "translateY(0)";
        mensaje.style.textAlign = "center";
    }, 50);
}

function mostrarMensaje2() {
    let mensaje = document.getElementById("mensaje2");

    mensaje.innerHTML = "🎧 Mi pasatiempo favorito es escuchar música 🎧";
    mensaje.style.display = "block";

    setTimeout(() => {
        mensaje.style.opacity = "1";
        mensaje.style.transform = "translateY(0)";
        mensaje.style.textAlign = "center";
    }, 50);
}