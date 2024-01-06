
function agregar(){
    for (let i = 0 ; i < div.length; i++) {
        if(i == "1"  ){
            div[0].classList.add("visible")
        }else if(i == "2"){
            div[1].classList.add("visible")
        }else if(i == "3"){
            div[2].classList.add("visible")
        }
    }
    
}

const oculto = document.getElementsByClassName('oculto')
let div = document.querySelectorAll('div')
const ficha1 = document.getElementById('ficha1')
let ficha = document.addEventListener('keydown', agregar)





