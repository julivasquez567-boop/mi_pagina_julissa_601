function mostrarMensaje(event) {
  let mensaje = document.getElementById("mensaje");
  let boton = event ? event.target : null;

  if (mensaje.style.opacity === "1") {
    mensaje.style.opacity = "0";
    mensaje.style.transform = "translateY(30px)";

    if (boton) boton.innerText = "Mostrar mensaje";
  } else {
    mensaje.innerHTML = "🐾 Cuida y protege a los animales 🐾";
    mensaje.style.display = "block";

    setTimeout(() => {
      mensaje.style.opacity = "1";
      mensaje.style.transform = "translateY(0)";
      mensaje.style.textAlign = "center";
    }, 50);

    if (boton) boton.innerText = "Ocultar mensaje";

    mostrarToast("✨ Mensaje mostrado");
  }
}

function mostrarMensaje2(event) {
  let mensaje = document.getElementById("mensaje2");
  let boton = event ? event.target : null;

  if (mensaje.style.opacity === "1") {
    mensaje.style.opacity = "0";
    mensaje.style.transform = "translateY(30px)";

    if (boton) boton.innerText = "Algo sobre mí";
  } else {
    mensaje.innerHTML = "🎧 Mi pasatiempo favorito es escuchar música 🎧";
    mensaje.style.display = "block";

    setTimeout(() => {
      mensaje.style.opacity = "1";
      mensaje.style.transform = "translateY(0)";
      mensaje.style.textAlign = "center";
    }, 50);

    if (boton) boton.innerText = "Ocultar mensaje";

    mostrarToast("🌸 Gracias por visitar mi perfil");
  }
}

function toggleModo() {
  document.body.classList.toggle("dark-mode");

  let boton = document.getElementById("modo-btn");

  if (document.body.classList.contains("dark-mode")) {
    boton.innerHTML = "☀️";
    localStorage.setItem("modo", "oscuro");
  } else {
    boton.innerHTML = "🌙";
    localStorage.setItem("modo", "claro");
  }
}

const faqBtns = document.querySelectorAll(".faq-btn");

faqBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const texto = btn.nextElementSibling;
    const icon = btn.querySelector(".icon");

    texto.classList.toggle("activo");

    if (texto.classList.contains("activo")) {
      texto.style.maxHeight = texto.scrollHeight + "px";

      if (icon) icon.innerHTML = "−";
    } else {
      texto.style.maxHeight = null;

      if (icon) icon.innerHTML = "+";
    }
  });
});

let slides = document.querySelectorAll(".slide");
let index = 0;

function cambiarSlide() {
  if (slides.length === 0) return;

  slides[index].classList.remove("active");

  index++;

  if (index >= slides.length) {
    index = 0;
  }

  slides[index].classList.add("active");
}

if (slides.length > 0) {
  setInterval(cambiarSlide, 3000);
}

function mostrarToast(texto) {
  const toast = document.createElement("div");

  toast.className = "toast";
  toast.innerText = texto;

  document.body.appendChild(toast);

  setTimeout(() => {
    toast.classList.add("show");
  }, 100);

  setTimeout(() => {
    toast.classList.remove("show");

    setTimeout(() => {
      toast.remove();
    }, 500);
  }, 3000);
}

const cards = document.querySelectorAll(".card");

window.addEventListener("scroll", () => {
  cards.forEach((card) => {
    const top = card.getBoundingClientRect().top;

    if (top < window.innerHeight - 100) {
      card.style.opacity = "1";
      card.style.transform = "translateY(0)";
    }
  });
});

window.addEventListener("load", () => {
  let modo = localStorage.getItem("modo");

  if (modo === "oscuro") {
    document.body.classList.add("dark-mode");
    document.getElementById("modo-btn").innerHTML = "☀️";
  }

  if (typeof particlesJS !== "undefined") {
    particlesJS("particles-js", {
      particles: {
        number: { value: 60 },
        color: { value: "#ffffff" },
        shape: { type: "circle" },
        opacity: { value: 0.5 },
        size: { value: 3 },
        move: { enable: true, speed: 2 },
      },
    });
  }

  cards.forEach((card) => {
    card.style.opacity = "1";
    card.style.transform = "translateY(0)";
  });
});