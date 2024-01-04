const insputRojo = document.getElementById('rojo');
const insputGreen= document.getElementById('green');
const insputBlue = document.getElementById('blue');
const textoRojo = document.getElementById('red-text');
const textoGreen = document.getElementById('green-text');
const textoBlue= document.getElementById('blue-text');
let rojo = insputRojo.value;
let verde = insputGreen.value;
let azul= insputBlue.value;
textoRojo.innerText = rojo
textoGreen.innerText = verde;
textoBlue.innerText = azul
function actualizarColor (rojo , verde , azul){
    const colorRGB = `rgb(${rojo}, ${verde}, ${azul})`;
    document.body.style.backgroundColor = colorRGB;

}
insputRojo.addEventListener('change', e=>{ 
     rojo =e.target.value;
     textoRojo.innerText = rojo
     actualizarColor(rojo, verde, azul)
    })

insputGreen.addEventListener('change', e=>{ 
     verde =e.target.value;
     textoGreen.innerText = verde
     actualizarColor(rojo, verde, azul)
    })
    
insputBlue.addEventListener('change', e=>{ 
    azul =  e.target.value;  
    textoBlue.innerText = azul;
    actualizarColor(rojo, verde, azul)
   })