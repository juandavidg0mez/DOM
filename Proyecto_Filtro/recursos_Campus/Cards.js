


function agregarCard() {
    const Card = document.getElementById("falshCardFirst");
    //el fragmet es un dom en memeoria que tenemos y hacemos y cuando este listo lo mandamos al template
    //tener cuidado con los espacios en los [id]
    const frag = document.createDocumentFragment();
    const tmpl = document.getElementById("flaschCards").content;
    // tmpl.getElementById("card").textContent;
    const clone = tmpl.cloneNode(true);
    frag.appendChild(clone);
    Card.appendChild(frag);
}
function eliminarCardAll() {

    const div = document.getElementById("falshCardFirst");
    div.remove();
}

function guardarFlashCard(){
  
    const Card = document.getElementById("prueba1");
    //el fragmet es un dom en memeoria que tenemos y hacemos y cuando este listo lo mandamos al template
    //tener cuidado con los espacios en los [id]
    const frag = document.createDocumentFragment();
    const tmpl = document.getElementById("CardUnitaria").content;
    // tmpl.getElementById("card").textContent;
    Card.ariaReadOnly = true
    const clone = tmpl.cloneNode(true);
    frag.appendChild(clone);
    Card.appendChild(frag);
    const respuesta = document.getElementById("respuesta")
    const pregunta = document.getElementById("pregunta")
    console.log(respuesta.value)
    console.log(pregunta.value)
    const imprimirPregunta = document.getElementById("presguntaCard")
    const imprimirRespuesta = document.getElementById("respuestaCard")
    imprimirPregunta.innerHTML = pregunta.value
    imprimirRespuesta.innerHTML= respuesta.value
    
}


