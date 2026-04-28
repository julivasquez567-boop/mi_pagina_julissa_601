function mostrarMensaje() {

    let mensaje = document.getElementById("mensaje");
    let boton = event.target;

    if (mensaje.style.opacity === "1") {

        mensaje.style.opacity = "0";
        mensaje.style.transform = "translateY(30px)";

        boton.innerText = "Mostrar mensaje";

    } else {

        mensaje.innerHTML =
        "🐾 Cuida y protege a los animales 🐾";

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

        mensaje.style.opacity = "0";
        mensaje.style.transform = "translateY(30px)";

        boton.innerText = "Algo sobre mí";

    } else {

        mensaje.innerHTML =
        "🎧 Mi pasatiempo favorito es escuchar música 🎧";

        mensaje.style.display = "block";

        setTimeout(() => {

            mensaje.style.opacity = "1";
            mensaje.style.transform = "translateY(0)";
            mensaje.style.textAlign = "center";

        }, 50);

        boton.innerText = "Ocultar mensaje";
    }
}

/* =========================
   MODO OSCURO
========================= */

function toggleModo() {

    document.body.classList.toggle("dark-mode");

    let boton = document.getElementById("modo-btn");

    if(document.body.classList.contains("dark-mode")){

        boton.innerHTML = "☀️";

        localStorage.setItem("modo", "oscuro");

    } else {

        boton.innerHTML = "🌙";

        localStorage.setItem("modo", "claro");
    }
}

/* =========================
   GUARDAR MODO
========================= */

window.onload = function () {

    let modo = localStorage.getItem("modo");

    if (modo === "oscuro") {

        document.body.classList.add("dark-mode");

        document.getElementById("modo-btn").innerHTML = "☀️";
    }

    /* =========================
       PARTICLES
    ========================= */

    particlesJS("particles-js", {

        particles: {

            number: {
                value: 60
            },

            color: {
                value: "#ffffff"
            },

            shape: {
                type: "circle"
            },

            opacity: {
                value: 0.5
            },

            size: {
                value: 3
            },

            move: {
                enable: true,
                speed: 2
            }

        }

    });

}