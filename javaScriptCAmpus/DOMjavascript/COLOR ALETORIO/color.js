//SELECCIONAR LOS ELEMENTOS DEL DOM
const boton = document.querySelector('button')
const  color = document.getElementById('color')
// variables locales y variables globlaes 


function generarColorAleatorio(){
    let digitos= '0123456789ABCDEF';
    let color = '#'
    for (let i = 0; i < 6; i++) {
        let indiceAleatorio =Math.floor(Math.random()*16) ;
        color += digitos[indiceAleatorio]
    }
    return color
}
boton.addEventListener('click',function(){
    let colorAleatorio = generarColorAleatorio();
    //actualizar texto
    color.textContent = colorAleatorio
    //actulizar fondo 
    document.body.style.backgroundColor = colorAleatorio
    // el signo de igual [=] asigna valores en este caso llama al estilo del cuerpo ene ste caso el body y le asigna el nuevo color
})