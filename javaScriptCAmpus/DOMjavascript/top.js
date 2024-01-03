// const titulo = document.getElementById("title")
// // esto devulve una cadena de caracteres
// // texto interno inner de interno
// // tag name retorna la etiqueta
// console.log( titulo.tagName)
// // seleccionar a varios elementos por la calse dado que la clase puede darse para varios elementos o nodos en este caso
// const toppings = document.getElementsByClassName('Toping')
// console.log(toppings[0].id)
// // esto funciona como arreglo que en escencia es un objeto con su valor indexzado

// const etiquetas = document.getElementsByTagName('li')
// console.log(etiquetas.length)

// const fondoMarron= document.getElementsByClassName('fondo-naranja')
// console.log(fondoMarron.length)
// // // selectores por criterio o por caracteristicas especificas del selector queryselector y queryselectorall
// // podemos hacer el selector mucho mas elaborados com opor ejemplo tener dos clases en un selector


// // generar estilos desde el DOM-- son objetos teniendo la notacion de puntos podemos acceder a propiedades de los mismos y atributos
// const asignacionDeStililo = document.querySelector('.Topping')
// console.log(asignacionDeStililo)

// // ACCEDER AL TEXTO
// const listToppings = document.getElementById('topping list')
// console.log('textContent')//incluye los espacios del HTML
// console.log(listToppings.textContent)
// console.log('innerText')
// console.log(listToppings.innerText)

// Retorna una cadena de caracteres
//MODIFICAR EL TEXTO
const titulo = document.getElementById('title')
console.log(titulo.innerText)
//Una de Las maneras de acceder al texto para modificarlo
// titulo.innerText='Sabores de la monda'

const agregarClase = document.querySelector('.Toping')
agregarClase.classList.add('claseNueva')
console.log(agregarClase.classList.contains('fondo-azul'))
//esto se utiliza mucho en los condicionales
agregarClase.style.backgroundColor = 'blue'
//en este caso yo puedo agragar un boton que me agregue una clase que me cambie el color de algo cuando se asigne
//ELIMINAR UNA CLASE
agregarClase.classList.remove('claseNueva')
// INFORMACION DE APIS Y TRANFORMACIONDE ELEMENTOS HTML

// function Agregar() {
//     const listaDeTop = document.getElementById('topping list');
//     const crearTopping = document.createElement('li');
//     crearTopping.classList.add('Toping', 'fondo-marron');
//     crearTopping.innerText = 'Trust in God';
//     listaDeTop.remove()
// }

// //todo funciona dentro de un contexto
// recordad eso tio
// Evento y un funcion especifia que maneja ese evente en ese elemento

//Me ubico en el elemento donde queremos aplicar el evento
const albahaca = document.getElementById('albahaca')

// function MostrarClick(e){
//     console.log(e.target.innerText)
// }
// e = se representan como eventos Objetos
//targer es el elemnto com olatl recordemos que innertext accede al texto del elemento

// albahaca.addEventListener('click', MostrarClick)

//El Evento Toma dos parametros uno el evento ensi yuu la funcion de dice evento que es la accion por asi decirlo no se colocan parentesis en el la funcion toca RECORDARLO

//ciclo for of podriamos interpretarlo de la manera = para cada uno de esta lista
const toppings = document.getElementsByClassName('Toping')
console.log(toppings)


// function MostrarClick(e){
//     console.log(e.target.innerText)
// }


//target me devuleve el elemento en este caso un [li]
//digamos que ARROW funcions son peque;as u precisas ESRECOMENDABLE CUANDO SE TRABAJEN CICLO MANEJAR LAS FUNCIONES APARTE
for (const topping of toppings) {
    topping.addEventListener('click', e => console.log(e.target.innerText))
}


//en esste caso pasamos un parametro, en este caso el toping y el parametro cuando llamamos la funcion pues que imprima textualmente eso
//Metodos Funcionales Para Los Eventos En Este Caso .addEventLisetener()

