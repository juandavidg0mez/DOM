let listaDePrecios = []
function addToFactur(){
    
}


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
    const precioprenda = document.createElement('button')
    precioprenda.textContent = precio
    const tallasValues = document.createElement('li')
    tallasValues.textContent = tallas
    





    // esto se utiliza para inyectar las cartas acada una de ellos
    const Card = document.createElement('div');
    Card.appendChild(name)
    Card.appendChild(colec);
    Card.appendChild(characterImage);
    Card.appendChild(precioprenda)
    Card.appendChild(tallasValues)
    Card.style.backgroundColor = '#e4e4e4'
    // Card.style.width= '20%'
    Card.style.width = '15%'
    Card.style.borderRadius= '20px'
    Card.style.textAlign = 'center'; // Centrar el contenido del div
    Card.style.margin = '20px'; 
    Card.style.padding = '20px'; 
    //boton
    precioprenda.style.padding = '10px'
    precioprenda.style.fontSize = '20px'
    precioprenda.style.margin='20px'
    precioprenda.style.borderRadius= '10px'
    precioprenda.style.border = 'none'// Añadir un margen para mayor separación
    
    // let acomuladorTotal = 0
    // precioprenda.addEventListener('click',()=>{
    //     const UbicacionFactura = document.querySelector('.factuacion')
    //     const nuevo = document.createElement('div')
    //     UbicacionFactura.innerText= parseFloat(precio)
    //     nuevo.appendChild(UbicacionFactura)
    // })


    let acomunladorPrecios = 0;
    const div = document.createElement('div');

    // console.log(listaDePrecios)
    precioprenda.addEventListener('click', () => {
        // Suma el precio al acumulador
        acomunladorPrecios += parseFloat(precio);

        
        // Muestra el total acumulado en el elemento creado (div)
        div.textContent = `Total: ${acomunladorPrecios}`;
        
        // Agrega el elemento creado (div) al documento
        document.body.appendChild(div);
        
    });    

    //responsive Por carta
    contenedor.style.display = 'flex'
     // La tarjeta se expandirá para llenar el contenedor
    Card.style.minWidth = '250px'; // Evitar que la tarjeta se expanda demasiado
    Card.style.boxSizing = 'border-box'; 
    
    contenedor.style.display = 'flex';
    contenedor.style.flexDirection = 'row'; // Cambiado a 'row' para que las tarjetas se organicen horizontalmente
    contenedor.style.flexWrap = 'wrap';
    contenedor.style.justifyContent = 'space-between';
    contenedor.style.alignitems= 'stretch';
    // Espacio entre las tarjetas
    

    
    contenedor.appendChild(Card);
    // button.addEventListener('click', ()=>{
    //     let rutaPrecio = 2;
    //     acomunladorPrecios += rutaPrecio; // Corrección aquí
    //     div.textContent = acomunladorPrecios
    //     // let contenedor2 = document.querySelector('#contenedor')
    
    //     button.append(div);
    // })
    



}
let acomunladorPrecios = 0


const div = document.createElement('div')




async function lecturaDataShop (){
    const dataShop = await fetch(`https://fantastic-spoon-pjgrj5pqj7rh7rv9-5502.app.github.dev/Proyecto_Filtro/data/prendasJSON.json`)
    const json = await dataShop.json();
    
    for (let i = 0; i < json.length; i++) {
        buttonFactura = json[i].precio;
        
        makeCardRopa(json[i])
        
    }



}
lecturaDataShop()



// async function obtenerDatos(){
//     const response = await fetch('http://127.0.0.1:5500/PromesasAndJson/practicaJSON.json');
//     // const json = await response.text();
    
//     console.log(json)
//     console.log(json.nombre)