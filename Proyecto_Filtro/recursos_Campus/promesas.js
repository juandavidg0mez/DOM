let x = 10;
// const p = new Promise((resolve, reject) => {
//     if(x==10){
//         resolve('la variable es igual a 10')
//     }else{
//         reject('la variable no es igual a 10')
//     }
// });
// //entocnes => then es cuando entocnes cuando sea verdadera tales imprima o me consulte o haga cositas

// p.then(res=>{
//     console.log(`operacion terminada: ${res}`);
// })
// .catch(error=>{
//     console.error(`error al operar: ${error}`);
// })

// pueden haber dos then pero creo que cuando ambos son positivos creo el catch es cuando aja esta capturando lo negativo

// // CASOS DE APLICACION DE LAS PROMESAS 
// OPERASCIONES ASINCROJAS POR APARTE DEL PROCESO SECUENCAL NO SIGUE LA SECUENCIA DEL MISMO Y DEPENDE DE CUANTO TIEMPO NECESITA PARA SER EJECUTADA O SE DEMORA 


console.log('1. PROCESO INICIADO:...')
const promesa = new Promise((resolve, reject) => {

    setTimeout(() => {
        x = x * 3 + 2;
        console.log('2. proceso terminado...')
        resolve(x)
    }, 5000);

});
// console.log(`3. el resultado es ${x}`)
promesa.then(res=>{
    console.log(`3. el resultado es : ${res}`)
})