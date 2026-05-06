function mostrarMensaje(event) {
  let mensaje = document.getElementById("mensaje");
  let boton = event.target;

  if (mensaje.innerHTML !== "") {
    mensaje.innerHTML = "";
    boton.innerText = "Mostrar mensaje";
  } else {
    mensaje.innerHTML = "🐾 Cuida y protege a los animales 🐾";
    boton.innerText = "Ocultar mensaje";
  }
}

function mostrarMensaje2(event) {
  let mensaje = document.getElementById("mensaje2");
  let boton = event.target;

  if (mensaje.innerHTML !== "") {
    mensaje.innerHTML = "";
    boton.innerText = "Algo sobre mí";
  } else {
    mensaje.innerHTML = "🎧 Me gusta escuchar música";
    boton.innerText = "Ocultar mensaje";
  }
}

/* FAQ */
document.querySelectorAll(".faq-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    let texto = btn.nextElementSibling;
    texto.style.maxHeight =
      texto.style.maxHeight ? null : texto.scrollHeight + "px";
  });
});

/* Slider */
let slides = document.querySelectorAll(".slide");
let index = 0;

setInterval(() => {
  slides[index].classList.remove("active");
  index = (index + 1) % slides.length;
  slides[index].classList.add("active");
}, 3000);