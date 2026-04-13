function mostrarmensaje (){
    let mensaje = document.getElementById("mensaje") 


    mensaje.innerHTML="🐶cuida a las mascotas 🐾";
    mensaje.style.display="block";

    
setTimeout(() => {

    mensaje.style.opacity = "1";
    mensaje.style.transform="traslateY(0)";
}, 50);
}