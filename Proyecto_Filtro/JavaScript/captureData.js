const d = document
let nombres = d.querySelector('#name');
let apellidos = d.querySelector('#Apellidos');
let opciones = d.querySelector('#opcionSelect');
let numero = d.querySelector('#number');
let agendar = d.querySelector('#agendar');
const enviar = d.querySelector('#enviar');
let id = 0;

enviar.addEventListener('click', (e) => {
    // Crear un objeto JSON con los valores de los campos de entrada
    e.preventDefault()
    const data = {
        nombres: nombres.value,
        apellidos: apellidos.value,
        numero:numero.value,
        opciones: opciones.value,
        agendar: agendar.value,

    };

    // makeRopa(data)
   


    // Imprimir el objeto JSON en la consola
    fetch('http://localhost:3000/agenda', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json; charset=utf-8',
        },
        body: JSON.stringify(data),

    })
        .then(response => response.json())
        .then(data => {
            console.log('Respuesta del servidor:', data);
        })
        .catch(error => {
            console.error('Error al enviar los datos:', error);
        });



});
