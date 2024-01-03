const data = [{
    titile: 'Aprendiendo JavaScript',
    year: '2021',
    isbn: '090-12342345',
    author: 'David Gomez-NIHL'
}, {
    titile: 'Python casi me mato',
    year: '2023',
    isbn: '123-1313112313',
    author: 'David Gomez-NIHL'
}, {
    titile: 'html y csss el cierlo oculto',
    year: '2024',
    isbn: '11234-1234234',
    author: 'David Gomez-NIHL'
}, {
    titile: 'Vorlviendo a Nacer',
    year: '2010',
    isbn: '345-234456',
    author: 'David Gomez-NIHL'
}]
// const data = []
function getData() {
    return new Promise((resolve, reject) => {
        if (data.length == 0) {
            reject(new Error('data is empty'))
//la promesas resiven dos funciones la cuales poues se decalran a abajo de las mismas que son el then y catch
        }
        setTimeout(() => {
            resolve(data)
        }, 3000)
    })
}
getData()
    .then((resolve) => console.log(resolve))
    .catch((reject) => console.log(reject.message))

// esto como tal es duspues de decalarar la funcion como tal then va para el resolve y catch dado que este es el que camptura el eeror y lo maneja de cierta manera

// y el async/await es la forma de escribnir sincrono pero que retorne asincrono
// hay una variable --- await da la que es asincrono-- solo se puede utiliaar en una funcion o en una variable que tenga palabra reservada async