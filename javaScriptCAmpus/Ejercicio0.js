/* Definimos el superdígito de un número entero utilizando las siguientes reglas:
Dado un número entero x, tenemos que encontrar el superdígito del número entero.
Si x sólo tiene 1 dígito, entonces su superdígito es x .
En caso contrario, el superdígito de x es igual al superdígito de la suma de los dígitos de x .
Por ejemplo, el superdígito de 9875 se calculará como:
super_digit(9875) 9+8+7+5 = 29
super_digit(29) 2 + 9 = 11
super_digit(11) 1 + 1 = 2
super_digit(2) = 2*/
let entrada = 0
let arr = []
function numeroSuma(numDigitado) {
    arr.push(numDigitado)
    return arr
}
function sumaArry(arr) {
    let resultado = 0;
    for (num of arr) {
        resultado += num
    }
    return resultado
}

do {
    entrada = Number(prompt("digite un numero y digota [-0] paraparar de digitar: "))
    let salida = numeroSuma(entrada)
    console.log(salida)
    

} while (entrada > 0)
let resultado = sumaArry(arr)
console.log(resultado)


//console.log(numeroSuma(resultado))