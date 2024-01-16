function makeCardRopa(valoresJson){
    const {nombrePrenda, coleccion, rutaprenda, precio, tallas} = valoresJson
    const contenedor = document.querySelector('#contenedor-Primario');
    const name = document.createElement('h1')
    name.textContent= nombrePrenda
    const colec = document.createElement('h2')
    colec.textContent = coleccion
    const characterImage = document.createElement('img')
    characterImage.src = rutaprenda;
    characterImage.width = 200;
    const precioprenda = document.createElement('h3')
    precioprenda.textContent = precio
    const tallasValues = document.createElement('li')
    tallasValues.textContent = tallas
    const ventas = document.createElement('button')
    ventas.textContent= 'ADD-to'





    // esto se utiliza para inyectar las cartas acada una de ellos
    const Card = document.createElement('div');
    Card.appendChild(name)
    Card.appendChild(colec);
    Card.appendChild(characterImage);
    Card.appendChild(precioprenda)
    Card.appendChild(tallasValues)
    Card.appendChild(ventas)
    Card.style.backgroundColor = '#e4e4e4'
    Card.style.width= '20%'
    Card.style.borderRadius= '20px'
    Card.style.textAlign = 'center'; // Centrar el contenido del div
    Card.style.margin = '20px'; 
    ventas.style.padding = '10px'
    ventas.style.borderRadius= '10px'// Añadir un margen para mayor separación
    
    contenedor.style.display = 'flex'; 
    // contenedor.style.flex = 'flex-direction' // Aplicar flexbox al contenedor
    contenedor.appendChild(Card);



}






async function lecturaDataShop (){
    const dataShop = await fetch(`https://fantastic-spoon-pjgrj5pqj7rh7rv9-5500.app.github.dev/Proyecto_Filtro/data/prendasJSON.json`)
    const json = await dataShop.json();
    
    for (let i = 0; i < json.length; i++) {
        makeCardRopa(json[i])
        
    }



}
lecturaDataShop()



// async function obtenerDatos(){
//     const response = await fetch('http://127.0.0.1:5500/PromesasAndJson/practicaJSON.json');
//     // const json = await response.text();
    
//     console.log(json)
//     console.log(json.nombre)