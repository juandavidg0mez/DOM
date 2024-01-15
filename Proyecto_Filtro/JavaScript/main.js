async function obtenerDatos(){
    const response = await fetch('http://127.0.0.1:5500/PromesasAndJson/practicaJSON.json');
    // const json = await response.text();
    const json = await response.json();
    console.log(json)
    console.log(json.nombre) //json.nombre recordad que nombre es una propiedad
    console.log(json.direccion.colonia)
    console.log(json.experiencia[0])
    //en el forEach el aary es la direccion json.experencia y accede al valor por medio de la itecion en este caso acada valor de empresa lo hubica
    json.experiencia.forEach(elemento => {
        console.log(elemento.empresa)

        
    });
    console.log(json.direccion.pago_agua)
    //una ruta a la cual accedo
    console.log(json.direccion['pago_agua'][0].fecha)
    // es como una traduccion de texto osea me lo manda en un idioma lo paso a otro 
    // console.log(JSON.parse(json)) //formato de texto a JSON
    // console.log(JSON.stringify(json)) //formato texto
}
//obtener la url de forma dinamica no haiencod una solicitud del documento si obtenr el recuerso y manipularlo
obtenerDatos();