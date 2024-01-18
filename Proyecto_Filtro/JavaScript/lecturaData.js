let facturacionPorPrenda = []


// console.log(facturacionPorPrenda[2])
//quiza meter un boton que genera la factura y tenga un setimeout para que haga la musa o algo as

function makeCardRopa(valoresJson) {
    const { nombrePrenda, coleccion, rutaprenda, precio, tallas, id } = valoresJson
    const contenedor = document.querySelector('#contenedor-Primario');
    const name = document.createElement('h1')
    name.textContent = nombrePrenda
    const colec = document.createElement('h2')
    colec.textContent = coleccion
    const characterImage = document.createElement('img')
    characterImage.src = rutaprenda;
    characterImage.width = 200;
    const precioprenda = document.createElement('button')
    precioprenda.textContent = precio
    const tallasValues = document.createElement('li')
    tallasValues.textContent = tallas
    precioprenda.dataset.id = id

    precioprenda.addEventListener('click', () => {

        const fragment = document.createDocumentFragment()
        const contFactura = document.getElementById('contFactura')


        // acomuladores de precios por prenda

        let acomuladorPreciosPorPrenda = 0
        acomuladorPreciosPorPrenda += parseFloat(precio)
        facturacionPorPrenda.push(precio)
        console.log(facturacionPorPrenda)








        const div = document.createElement('div')
        div.classList.add('visible')

        const h1 = document.createElement('h1')
        h1.textContent = nombrePrenda
        const h2 = document.createElement('h2')
        h2.textContent = `Precio:$${precio}`
        const buttonDalete = document.createElement('button')
        buttonDalete.textContent = 'Dalate List'
        buttonDalete.dataset.id = id
        div.appendChild(h1)
        div.appendChild(h2)
        div.appendChild(buttonDalete)
        fragment.appendChild(div)
        contFactura.appendChild(fragment)



        div.style.backgroundColor = '#E5E7E9'
        div.style.borderRadius = '20px'
        div.style.border = 'none'
        div.style.margin = '20px'
        div.style.padding = '20px'




        contFactura.style.width = '15%'
        contFactura.style.borderRadius = '20px'
        contFactura.style.textAlign = 'center'; // Centrar el contenido del div
        contFactura.style.margin = '20px';
        contFactura.style.padding = '20px';
        // contFactura.style.display = 'flex'
        // contFactura.style.minWidth = '250px'; // Evitar que la tarjeta se expanda demasiado
        contFactura.style.boxSizing = 'border-box';


        //Estilos Del boton
        buttonDalete.style.background = '#D5D8DC'
        buttonDalete.style.fontSize = '20px'
        buttonDalete.style.borderRadius = '10px'
        buttonDalete.style.border = 'none'
        buttonDalete.style.padding = '20px'

        contFactura.style.display = 'flex';
        contFactura.style.flexDirection = 'row';
        contFactura.style.flexWrap = 'wrap'; // Columna para alinear elementos verticalmente
        contFactura.style.alignItems = 'stretch'; // Centrar elementos verticalmente
        contFactura.style.justifyContent = 'center';
        contFactura.style.width = '100%'


        // contFactura.style.flexDirection = 'row'; // Cambiado a 'row' para que las tarjetas se organicen horizontalmente
        // contFactura.style.flexWrap = 'wrap';
        // contFactura.style.justifyContent = 'space-between';
        // contFactura.style.alignitems= '';


        depurarCuentaTotal.addEventListener('click', (e) => {
            // esto depura la cuenta
            e.stopImmediatePropagation()
            const suma = facturacionPorPrenda.reduce((acumulador, numero) => {
                return acumulador + numero;
            }, 0);

            console.log(`esta es la factura ${suma}`)

            if (suma == 0) {
                const frag = document.createDocumentFragment()
                const contedorTotal = document.getElementById('contedorDeFacturasTotales')
                const div = document.createElement('div')

                let aviso = "no tienes un producto en el carrito para un nueva factura"
                const h2 = document.createElement('h2')
                h2.textContent = aviso

                const button2 = document.createElement('button')
                button2.textContent = 'Intenta denuevo'
                div.appendChild(button2)
                div.appendChild(h2)
                frag.appendChild(div)
                contedorTotal.appendChild(frag)
                div.style.backgroundColor = '#E59866'
                div.style.borderRadius = '20px'
                div.style.border = 'none'
                div.style.margin = '20px'
                div.style.padding = '20px'

                //evento de intento nuevo boton
                button2.addEventListener('click', (evento) => {
                    evento.stopImmediatePropagation()
                    div.parentNode.removeChild(div)

                })


                //buton de intento try Again
                button2.style.background = '#D98880'
                button2.style.fontSize = '20px'
                button2.style.borderRadius = '10px'
                button2.style.border = 'none'
                button2.style.padding = '20px'




                contedorTotal.style.width = '15%'
                contedorTotal.style.borderRadius = '20px'
                contedorTotal.style.textAlign = 'center'; // Centrar el contenido del div
                contedorTotal.style.margin = '20px';
                contedorTotal.style.padding = '20px';
                contedorTotal.style.display = 'flex';
                contedorTotal.style.flexDirection = 'row';
                contedorTotal.style.flexWrap = 'wrap'; // Columna para alinear elementos verticalmente
                contedorTotal.style.alignItems = 'stretch'; // Centrar elementos verticalmente
                contedorTotal.style.justifyContent = 'center';
                contedorTotal.style.width = '100%'
                // 
            } else {
                const frag = document.createDocumentFragment()
                const contedorTotal = document.getElementById('contedorDeFacturasTotales')
                const div = document.createElement('div')
                // div.classList.add('visible')

                const h1 = document.createElement('h1')
                h1.textContent = 'Factura Por Valor \n de: '
                const h2 = document.createElement('h2')
                h2.textContent = `Precio:$${suma}`
                const pagarFactura = document.createElement('button')
                pagarFactura.textContent = 'Pago De Factura'
                const EliminarFactura = document.createElement('button')
                EliminarFactura.textContent = 'Dalete'
                div.appendChild(pagarFactura)
                div.appendChild(EliminarFactura)

                div.appendChild(h1)
                div.appendChild(h2)
                frag.appendChild(div)
                contedorTotal.appendChild(frag)

                //Estilo De Botones 1. Pagar Factura
                pagarFactura.style.background = '#ABEBC6'
                pagarFactura.style.fontSize = '20px'
                pagarFactura.style.borderRadius = '10px'
                pagarFactura.style.border = 'none'
                pagarFactura.style.padding = '20px'

                //Eliminar Factura

                EliminarFactura.style.background = '#EDBB99'
                EliminarFactura.style.fontSize = '20px'
                EliminarFactura.style.borderRadius = '10px'
                EliminarFactura.style.border = 'none'
                EliminarFactura.style.padding = '20px'

                //evento de Elimiar Factura
                EliminarFactura.addEventListener('click', (evento) => {
                    evento.stopImmediatePropagation()
                    div.parentNode.removeChild(div)



                })
                pagarFactura.addEventListener('click', () => {


                    console.log('se esta precionando el boton pagar factura')
                    const fragmentado = document.createDocumentFragment()
                    const pagarFacturaFinal = document.getElementById('pagarFacturaFinal')
                    const formularioFactura = document.createElement('form')
                    div.classList.add('formularioDePago')
                    const pagarFactura2 = document.querySelector('.pagarFactura2')

                    pagarFactura2.style.backgroundColor = '#95A5A6'
                    pagarFactura2.style.borderRadius = '20px'
                    //formulario nombre
                    const label1 = document.createElement('label')
                    label1.textContent = 'Nombre'
                    label1.htmlFor = 'Nombre'
                    const input1 = document.createElement('input')
                    input1.type = 'text';
                    input1.id = 'nombreInput'
                    input1.name = 'nombre'


                    //furmulario Apellidos
                    const label2 = document.createElement('label')
                    label2.textContent = 'Apellidos'
                    label2.htmlFor = 'Apellidos'
                    const input2 = document.createElement('input')
                    input2.type = 'text';
                    input2.id = 'Apellido'
                    input2.name = 'Apellido'

                    //banco
                    const label3 = document.createElement('label')
                    label3.textContent = 'Nombre del Banco'
                    label3.htmlFor = 'banco'
                    const input3 = document.createElement('input')
                    label3.type = 'text';
                    input3.id = 'banco'
                    input3.name = 'banco'
                    //ingreseNumero Cuenta
                    const label4 = document.createElement('label')
                    label4.textContent = 'Numero De Cuenta'
                    label4.htmlFor = 'NumberAcount'
                    const input4 = document.createElement('input')
                    label4.type = 'text';
                    input4.id = 'NumberAcount'
                    input4.name = 'NumberAcount'


                    //CVV
                    const label5 = document.createElement('label')
                    label5.textContent = 'CVV'
                    label5.htmlFor = 'CVV'
                    const input5 = document.createElement('input')
                    label5.type = 'password';
                    input5.id = 'CVV'
                    input5.name = 'CVV'




                    //botonFinDeTransaccion este va a recibir uin Fech
                    const buttonSalidpago = document.createElement('button')
                    buttonSalidpago.textContent = 'Aceptar : Efectuar Pago'
                    buttonSalidpago.type = 'submit'
                    buttonSalidpago.id = 'pagoFactura'


                
                    formularioFactura.addEventListener('submit', (evento) =>  {
                            evento.preventDefault()
                            let nombres = document.querySelector('#nombreInput');
                            let apellidos = document.querySelector('#Apellido');
                            let numeroCuenta = document.querySelector('#NumberAcount');
                            let CVV = document.querySelector('#CVV');

                            console.log("se envio el formulario")

                            if (nombres && apellidos && numeroCuenta && CVV){
                                const factura = {
                                    nombres: nombres.value,
                                    apellidos: apellidos.value,
                                    numeroCuenta: numeroCuenta.value,
                                    CVV: CVV.value,
                                };
    
    
    
    
                                
                                     fetch(`http://localhost:3000/factura`, {
                                        method: 'POST',
                                        headers: {
                                            'Content-Type': 'application/json; charset=utf-8',
                                        },
                                        body: JSON.stringify(factura),
                                    })
                                        .then(response => response.json())
                                        .then(factura => {
                                            console.log('Respuesta del servidor:', factura);
                                        })
                                        .catch(error => {
                                            console.error('Error al enviar los datos:', error);
                                        });
                                
                                
                            }else{
                                alert('los campos no estan completos : PAGO ERROR!!!!')
                            }
                            
                        })



















                        //Boton saca Visible o no la seccion
                        const DisiparSeccion = document.createElement('button')
                        DisiparSeccion.textContent = 'Salir'
                        DisiparSeccion.type = 'submit'
                        DisiparSeccion.id = 'salir'

                        DisiparSeccion.addEventListener('click', () => {
                            div.parentNode.removeChild(div)


                        })


                        formularioFactura.appendChild(label1)
                        formularioFactura.appendChild(input1)
                        formularioFactura.appendChild(label2)
                        formularioFactura.appendChild(input2)
                        formularioFactura.appendChild(label3)
                        formularioFactura.appendChild(input3)
                        formularioFactura.appendChild(label4)
                        formularioFactura.appendChild(input4)
                        formularioFactura.appendChild(label5)
                        formularioFactura.appendChild(input5)
                        formularioFactura.appendChild(buttonSalidpago)
                        formularioFactura.appendChild(DisiparSeccion)
                        fragmentado.appendChild(formularioFactura)
                        pagarFacturaFinal.appendChild(fragmentado)
                        formularioFactura.style.backgroundColor = '#E5E7E9'
                        formularioFactura.style.borderRadius = '20px'
                        formularioFactura.style.border = 'none'
                        formularioFactura.style.margin = '20px'
                        formularioFactura.style.padding = '20px'

                        pagarFacturaFinal.style.width = '15%'
                        pagarFacturaFinal.style.borderRadius = '20px'
                        pagarFacturaFinal.style.textAlign = 'center'; // Centrar el contenido del div
                        pagarFacturaFinal.style.margin = '20px';
                        pagarFacturaFinal.style.padding = '20px';
                        pagarFacturaFinal.style.display = 'flex';
                        pagarFacturaFinal.style.flexDirection = 'row';
                        pagarFacturaFinal.style.flexWrap = 'wrap'; // Columna para alinear elementos verticalmente
                        pagarFacturaFinal.style.alignItems = 'stretch'; // Centrar elementos verticalmente
                        pagarFacturaFinal.style.justifyContent = 'center';
                        pagarFacturaFinal.style.width = '100%'

                        // const pagarFactura = document.createElement('button')
                        // pagarFactura.textContent = 'Pago De Factura'
                        // const EliminarFactura = document.createElement('button')
                        // EliminarFactura.textContent = 'Dalete'
                        // puedesalir un botonque dega salir y tenga como disable and none

                    })




                    div.style.backgroundColor = '#E5E7E9'
                    div.style.borderRadius = '20px'
                    div.style.border = 'none'
                    div.style.margin = '20px'
                    div.style.padding = '20px'

                    contedorTotal.style.width = '15%'
                    contedorTotal.style.borderRadius = '20px'
                    contedorTotal.style.textAlign = 'center'; // Centrar el contenido del div
                    contedorTotal.style.margin = '20px';
                    contedorTotal.style.padding = '20px';
                    contedorTotal.style.display = 'flex';
                    contedorTotal.style.flexDirection = 'row';
                    contedorTotal.style.flexWrap = 'wrap'; // Columna para alinear elementos verticalmente
                    contedorTotal.style.alignItems = 'stretch'; // Centrar elementos verticalmente
                    contedorTotal.style.justifyContent = 'center';
                    contedorTotal.style.width = '100%'


                }






        })


        buttonDalete.addEventListener('click', (e) => {
            console.log('hola estoy eliminando');
            e.stopImmediatePropagation()

            // const precioEliminar = precio
            // const nuevaFactura = facturacionPorPrenda.filter(e => e !== precioEliminar)
            // console.log(` este es la nueva factura sapa: ${nuevaFactura}`)


            const elementoAEliminar = precio;

            const indice = facturacionPorPrenda.indexOf(elementoAEliminar);
            indice !== -1 && facturacionPorPrenda.splice(indice, 1);

            console.log(`esto es lo que hay : ${facturacionPorPrenda}`);
            div.parentNode.removeChild(div)
            // console.log(facturacionPorPrenda)





        });



    });







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
    Card.style.borderRadius = '20px'
    Card.style.textAlign = 'center'; // Centrar el contenido del div
    Card.style.margin = '20px';
    Card.style.padding = '20px';
    //boton
    precioprenda.style.padding = '10px'
    precioprenda.style.fontSize = '20px'
    precioprenda.style.margin = '20px'
    precioprenda.style.borderRadius = '10px'
    precioprenda.style.border = 'none'// Añadir un margen para mayor separación
    //responsive Por carta
    contenedor.style.display = 'flex'
    // La tarjeta se expandirá para llenar el contenedor
    Card.style.minWidth = '250px'; // Evitar que la tarjeta se expanda demasiado
    Card.style.boxSizing = 'border-box';

    contenedor.style.display = 'flex';
    contenedor.style.flexDirection = 'row'; // Cambiado a 'row' para que las tarjetas se organicen horizontalmente
    contenedor.style.flexWrap = 'wrap';
    contenedor.style.justifyContent = 'space-between';
    contenedor.style.alignitems = 'stretch';
    // Espacio entre las tarjetas



    contenedor.appendChild(Card);



}






async function lecturaDataShop() {
    const dataShop = await fetch(`https://friendly-fiesta-rjp4p7x7qv9fpwq4-5502.app.github.dev/Proyecto_Filtro/data/prendasJSON.json`)
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