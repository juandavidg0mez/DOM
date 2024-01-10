//toma de DOM

const num7 = document.getElementById('N7')
const num8 = document.getElementById('N8')
const num9 = document.getElementById('N9')
const num4 = document.getElementById('N4')
const num5 = document.getElementById('N5')
const num6 = document.getElementById('N6')
const num1 = document.getElementById('N1')
const num2 = document.getElementById('N2')
const num3 = document.getElementById('N3')
const cero = document.getElementById('N0')
const punto = document.getElementById('Npunto')
const borrar = document.getElementById('Nborrar')

const result = document.getElementById('result')
// insertar numeros al input
document.addEventListener('click', (event)=>{
    result.value = num7.innerText
    event.stopPropagation
});
document.addEventListener('click', ()=>{result.value = num8.innerText});
// document.addEventListener('click', ()=>{result.value = num9.innerText});
// document.addEventListener('click', ()=>{result.value = num4.innerText});
// document.addEventListener('click', ()=>{result.value = num5.innerText});
// document.addEventListener('click', ()=>{result.value = num6.innerText});
// document.addEventListener('click', ()=>{result.value = num1.innerText});
// document.addEventListener('click', ()=>{result.value = num2.innerText});
// document.addEventListener('click', ()=>{result.value = num3.innerText});
// document.addEventListener('click', ()=>{result.value = cero.innerText});
// document.addEventListener('click', ()=>{result.value = punto.innerText});
// document.addEventListener('click', ()=>{result.value = borrar.innerText});