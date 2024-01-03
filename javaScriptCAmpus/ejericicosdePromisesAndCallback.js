const operacion =  (numero1 , numero2 , op)=>{
    return op(numero1,numero2)
}
//normalmente o buena practia mandar los callbacks en los paramentros par que se mas legible//// la promesa resuelve enpocas palabras 
operacion(1,2, (a, b) => console.log(a + b))
operacion(1,2, (a, b) => console.log(a * b))
operacion(1,2, (a, b) => console.log(a - b))

