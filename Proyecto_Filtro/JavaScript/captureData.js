// const formularioDataApi = document.getElementById('formularioData')


const d = document
let enviar = d.querySelector('#enviar');
enviar.addEventListener('click', (evento) => {
    evento.preventDefault()
    let nombres = d.querySelector('#name');
    let apellidos = d.querySelector('#Apellidos');
    let opciones = d.querySelector('#opcionSelect');
    let numero = d.querySelector('#number');
    let agendar = d.querySelector('#agendar');


    const data = {
        nombres: nombres.value,
        apellidos: apellidos.value,
        numero: numero.value,
        opciones: opciones.value,
        agendar: agendar.value,


    };

    // makeRopa(data)

    // Imprimir el objeto JSON en la consola
    async function envio() {
            await fetch(`http://localhost:3000/agenda`, {
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
    }
    evento.stopPropagation();
    envio()

})


