let AmorArr = new Array()
let YN = 0

function agregar(k, v, b) {
    AmorArr.push(k, v, b)
    return AmorArr
}

function ValorTotal(credito, interes, creditop) {
    let interesesAnual = (credito * interes) / 100
    let interesesAnualNeto = interesesAnual + creditop
    return interesesAnualNeto
}

function ValorMensual(a, b) {
    let Cmensual = a / b
    return Cmensual
}
function Capital(a, b) {
    let salida = a / b
    let salida2 = a - salida
    return salida2
}
function interes(a, b, c) {
    let salida = a - b
    let salida2 = salida / c
    return salida2
}

function totalCI(a, b) {
    let salida = a + b
    return salida
}
do {
    let YN = Number(prompt("Tabla de  Amortizacion\n 1----agregar / 2----Mostrar Resultado Neto\n3---mostrar tabla"))

    if (YN == 1) {
        let credito = Number(prompt("ingrese el monto del credito : "))
        let interesA = Number(prompt("ingrese el valor del interes anual"))
        let numeroPagos = Number(prompt("ingrese el numero de pagos"))
        console.log(agregar(credito, interesA, numeroPagos)) //funciona esta monda

    } else if (YN == 2) {
        console.log(` Monto de credito----|----$${AmorArr[0]}\n Tasa de interes Anual----|----${AmorArr[1]}%\n Numeros de Pagos (Mensual)----|----${AmorArr[2]}\n Valor total $${ValorTotal(AmorArr[0], AmorArr[1], AmorArr[0])}\n Valor Mensual----|----$${ValorMensual(ValorTotal(AmorArr[0], AmorArr[1], AmorArr[0]), AmorArr[2])}`)

    } else if (YN == 3) {
        AmorArr.forEach((k, v, b) => {
            console.log(`Valor del credito: ${k}------> Valor del [%] del interes: ${v}----->Numero de pagos: ${b}`)
        })
        break
    } else if (YN == 4) {
        do {
            for (let i = 0; i < 0; i++) {
                console.log(`Mes${i}---|--Valor : $${AmorArr[0]}----|---Valor total: $${ValorTotal(AmorArr[0], AmorArr[1], AmorArr[0])}----|---Capital: $${Capital(AmorArr[0], AmorArr[2])}----|----Intereses: $ ${interes(ValorTotal(AmorArr[0], AmorArr[1], AmorArr[0]), AmorArr[0], AmorArr[2])}-----total: ${totalCI(Capital + interes)}`)
            }




        } while (YN == true);
    }
}

while (YN != 1);