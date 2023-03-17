let menuVisible = false

//Funcion que oculta o muestra el menú
function mostrarOcultarMenu(){
    if (menuVisible) {
        document.getElementById("nav").classList="";
        menuVisible = false;
    } else {
        document.getElementById("nav").classList="responsive"
        menuVisible = true;
    }

}

function seleccionar(){
    //oculto el menu una vez de que selecciono una opcion
    document.getElementById("nav").classList="";
    menuVisible = false;

}

//Función para aplicar las animaciones a las habilidades (Skills)
function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if (distancia_skills >=300) {
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("java");
        habilidades[1].classList.add("html");
        habilidades[2].classList.add("css");
        habilidades[3].classList.add("javascript");
        habilidades[4].classList.add("kotlin");
        habilidades[5].classList.add("mysql");
        habilidades[6].classList.add("php");
        habilidades[7].classList.add("react");
        habilidades[8].classList.add("comunicacion");
        habilidades[9].classList.add("trabajo");
        habilidades[10].classList.add("responsabilidad");
        habilidades[11].classList.add("creatividad");
        habilidades[12].classList.add("dedicacion");
        habilidades[13].classList.add("proactividad");
    }
}

//detecto el scrolling para aplicar la animacion

window.onscroll = function(){
    efectoHabilidades()
}

//funcion para descargar el cv
function descargarcv(){
    window.location.href='https://drive.google.com/uc?export=download&id=1AHr0ESabn_wqdlG1stz6N7-wSOc_kYhW'
}

//funcion enviar mail
const btn = document.getElementById('enviarmensaje');

document.getElementById('contactoenviar')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   const serviceID = 'service_16y5j3k';
   const templateID = 'template_279vpsg';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      alert('Mensaje Enviado Correctamente!');
    }, (err) => {
      alert(JSON.stringify(err));
    });
})

//Funcion certificados emergentes 

document.getElementById('show-modal').addEventListener('click', function(event){
    document.getElementById('background-modal').classList.remove('modal-inactive')
    document.getElementById('background-modal').classList.add('modal-active')
}) 

document.getElementById('close-modal').addEventListener('click', function(event){
    document.getElementById('background-modal').classList.remove('modal-active')
    document.getElementById('background-modal').classList.add('modal-inactive')
}) 

document.getElementById('show-modal1').addEventListener('click', function(event){
    document.getElementById('background-modal1').classList.remove('modal-inactive')
    document.getElementById('background-modal1').classList.add('modal-active')
}) 

document.getElementById('close-modal1').addEventListener('click', function(event){
    document.getElementById('background-modal1').classList.remove('modal-active')
    document.getElementById('background-modal1').classList.add('modal-inactive')
})


//Función para cambiar imagenes en proyectos
function cambiarImagenes(idElementoImagen, imagenes) {
    let currentIndex = 0;
    const imgElement = document.querySelector(`#${idElementoImagen}`);
  
    setInterval(() => {
      currentIndex = (currentIndex + 1) % imagenes.length;
      imgElement.style.opacity = 0; // Ajustar la opacidad a 0
      setTimeout(() => {
        imgElement.src = imagenes[currentIndex];
        imgElement.style.opacity = 1; // Ajustar la opacidad a 1
      }, 250); // Esperar 500ms antes de cambiar la imagen
    }, 5000);
  }
  
  // Llamada a la función para cambiar las imágenes de un elemento con ID "TelemetriaIMG" y un arreglo de imágenes específico.
  const imagenesTelemetria = ["img/login.png", "img/relojes.png", "img/graficos.png", "img/registro.png"];
  cambiarImagenes("TelemetriaIMG", imagenesTelemetria);
  
  const imagenesBiblioteca = ["img/historial.png", "img/gestionLibros.png", "img/verAlumnos.png", "img/verLibros.png", "img/BibliotecaEscolar.png"];
  cambiarImagenes("BibliotecaIMG", imagenesBiblioteca);

  function onSubmit(token) {
    document.getElementById("contactoenviar").submit();
  }