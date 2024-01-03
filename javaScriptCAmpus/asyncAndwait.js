// const data = [{
//     titile: 'Aprendiendo JavaScript',
//     year: '2021',
//     isbn: '090-12342345',
//     author: 'David Gomez-NIHL'
// }, {
//     titile: 'Python casi me mato',
//     year: '2023',
//     isbn: '123-1313112313',
//     author: 'David Gomez-NIHL'
// }, {
//     titile: 'html y csss el cierlo oculto',
//     year: '2024',
//     isbn: '11234->1234234',
//     author: 'David Gomez-NIHL'
// }, {
//     titile: 'Vorlviendo a Nacer',
//     year: '2010',
//     isbn: '345-234456',
//     author: 'David Gomez-NIHL'
// }]
const data = []

const getDatos= () =>{
    return new Promise((resolve, reject) => {
        if(data.length===0){
            reject(new Error ('no hay datos en el objeto tas bien '))
        }
        setTimeout(() => {
            resolve(data)
        }, 1500)
    })

}

async function abtraerDatos(){
    try {
        const datoObtenidos = await getDatos();
        console.log(datoObtenidos)
    } catch (error) {
        console.log(error.message);
    }
}//toca escribir la palabra [message] estrictamente igual dado que hace referencia a al texto posterior al error y toca colocar [Error]

abtraerDatos()