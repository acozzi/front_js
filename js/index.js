var pon_frase_en_span = function (data) {
    console.log(data);  // Revisa la estructura del objeto data
    var frase = data['parse'] && data['parse']['text'] && data['parse']['text']['*'];
    if (frase) {
        frase = frase.replace(/\/wiki\//g, "http://es.wikiquote.org/wiki/");
        document.getElementById('frase').innerHTML = frase;
    } else {
        console.error('No se encontró la frase en los datos.');
    }
};

var get_wikiquote = function () {
    var now = new Date();
    var day = now.getDay();
    var titulo = '';

    if (day == 0) titulo = 'Plantilla:Frase-domingo';
    if (day == 1) titulo = 'Plantilla:Frase-lunes';
    if (day == 2) titulo = 'Plantilla:Frase-martes';
    if (day == 3) titulo = 'Plantilla:Frase-miércoles';
    if (day == 4) titulo = 'Plantilla:Frase-jueves';
    if (day == 5) titulo = 'Plantilla:Frase-viernes';
    if (day == 6) titulo = 'Plantilla:Frase-sábado';

    var url = 'http://es.wikiquote.org/w/api.php?action=parse&text={{' + titulo + '}}&format=json&callback=pon_frase_en_span';

    var elem = document.createElement('script');
    elem.setAttribute('src', url);
    elem.setAttribute('type', 'text/javascript');
    document.getElementsByTagName('head')[0].appendChild(elem);
};

window.onload = function () {
    get_wikiquote();
};


const botonEnviar = document.getElementById("botonEnviarFormulario");

botonEnviar.addEventListener("click", (evento) => {
    evento.preventDefault();
    console.log("Formulario enviado");

    let fullname = document.getElementById("fullname").value;
    let email = document.getElementById("email").value;
    let mensaje = document.getElementById("comentario").value;
    console.log(fullname, email, mensaje);

    const fullnameRegex = /^[a-zA-Z\s]+$/;
    if (!fullnameRegex.test(fullname)) {
        alert("El nombre y apellido solo puede contener letras y espacios.");
        return;
    }

    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailRegex.test(email)) {
        alert("Email no válido.");
        return;
    }

    if (mensaje.trim() === "") {
        alert("Ingresá un comentario por favor.");
        return;
    }

    const mensajeEnviado = document.getElementById("mensajeEnviado");
    mensajeEnviado.style.display = "block";
});
