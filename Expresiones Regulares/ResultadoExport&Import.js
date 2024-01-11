//import {suma , PI} from "./Export&Import.js"
import * as modulo1 from "./Export&Import.js"
import {Pi  as PII} from "./Ejmplo09ExIm.js"
import mensaje from "./04-Ejemplo-ExporIm.js"
//si esta por defecto en el archivo puedo cambiar el nombre esta funcion o constante o variable debe estar de primeras 
console.log(modulo1.suma(2 , 5));
console.log("PI: " + modulo1.Pi)
//le estamos colocando otro nombre a la variable desde el mismo archivo hijo 
console.log("pi con mas digitios: " + PII)
console.log(mensaje())

