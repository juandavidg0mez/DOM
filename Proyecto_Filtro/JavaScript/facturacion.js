let acomunladorPrecios = 0
const button = document.querySelector('button')
const div = document.createElement('div')


button.addEventListener('click', ()=>{
    let rutaPrecio = 2;
    acomunladorPrecios += rutaPrecio; // Corrección aquí
    div.textContent = acomunladorPrecios
    // let contenedor2 = document.querySelector('#contenedor')

    button.append(div);
})



async function lecturaDataShop() {
    const dataShop = await fetch(`https://fantastic-spoon-pjgrj5pqj7rh7rv9-5502.app.github.dev/Proyecto_Filtro/data/prendasJSON.json`)
    const json = await dataShop.json();
    
    for (let i = 0; i < json.length; i++) {
        // let RutaPRecio = json[i].precio;
        console.log(RutaPRecio)
    }



}
lecturaDataShop()