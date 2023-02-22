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
        habilidades[5].classList.add("photoshop");
        habilidades[6].classList.add("comunicacion");
        habilidades[7].classList.add("trabajo");
        habilidades[8].classList.add("responsabilidad");
        habilidades[9].classList.add("creatividad");
        habilidades[10].classList.add("dedicacion");
        habilidades[11].classList.add("proactividad");
    }
}

//detecto el scrolling para aplicar la animacion

window.onscroll = function(){
    efectoHabilidades()
}

//funcion para descargar el cv
function descargarcv(){
    window.location.href='https://drive.google.com/uc?id=1AHr0ESabn_wqdlG1stz6N7-wSOc_kYhW&export=download'
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
