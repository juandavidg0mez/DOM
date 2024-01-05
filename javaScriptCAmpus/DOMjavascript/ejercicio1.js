const aumentar = document.getElementById('Aumentar');
const disminuir = document.getElementById('disminuir');
const contadorPadre = document.getElementById('contador');
let contadorHijo = 0;
function aumentarContador(){
    contadorHijo+=1
    contadorPadre.textContent = `Contador : ${contadorHijo}`
}
function disminuirContador(){
    contadorHijo-=1
    contadorPadre.textContent = `Contador : ${contadorHijo}`
}
aumentar.addEventListener('click', aumentarContador )
disminuir.addEventListener('click', disminuirContador )

