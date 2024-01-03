let UniversalMap = new Map()
let YN = 0
function agregar(k, v) {
    UniversalMap.set(k, v)
    return UniversalMap
}
function existe(pregunta){
    UniversalMap.has(pregunta)
    return UniversalMap
}
function eliminar(pregunta){
    UniversalMap.delete(pregunta)
    return UniversalMap
}

do {
    let YN = Number(prompt("Desea agregar otras factura al AZ \n1----YES \n/ 2----No\nDeseas 3----listar\n4----buscar"))

    if(YN == 1){
        let llaveFactura = prompt("ingrese el nombre de la factura")
        let ValorFactura = Number(prompt("inglres el codigo de la factura"))
        console.log(agregar(llaveFactura, ValorFactura)) //funciona esta monda

    }else if(YN==2){
        UniversalMap.forEach((k,v) => {
            console.log(`Nombre de factura ${v}--------> Codigo ${k}`)
        })
        break
    }else if(YN==3){
        UniversalMap.forEach((k,v) => {
            console.log(`Nombre de factura ${v}--------> Codigo ${k}`)
        })
        break
    }else if(YN==4){
        let factura =prompt("que factura deseas buscar")
        if(existe(factura)==UniversalMap){
            console.log("Si esta registrado" + factura)
            alert("deseas seguir")
        }else{
            alert("no estiste")
        }
    }else if(YN==5){
        let descartar =prompt("que factura deas eliminar")
        if(eliminar(descartar)==UniversalMap){
            console.log("lo eliminaste" + descartar)
            alert("deseas seguir")
        }else if(existe(descartar)!=UniversalMap){
            alert("no existe")
            alert("registralo")
            UniversalMap.forEach((k,v) => {
                console.log(`Nombre de factura ${v}--------> Codigo ${k}`)
            })
        }

    }
   
} while (YN != 1);