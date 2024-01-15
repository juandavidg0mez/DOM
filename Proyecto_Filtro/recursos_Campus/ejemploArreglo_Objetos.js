let usuarios = [
    {
        id: 1,
        nombre: 'Maria'
    },
    {
        id: 2,
        nombre: 'Ana'
    }
];

let telefonos = [
    {
        id:1,
        telefono: 3155818090
    },
    {
        id: 2,
        telefono: 3142178889
    }
]
// esto de aca es una arrow funtion ok? 
// podemos retornar una promesa como resultado de una funcion 
const obtenerUsuarios = id => {
    return new Promise((resolve, reject) => {
        //esta Arrow funtion de ususarios es una forma de buscar recordemos que estamos en objeto no en un formato JSON utilizamos el metodo buscar 
        if(usuarios.find(usuarios => usuarios.id === id)){
            console.log('Usuario Existe')
            resolve(obtenerTelefono(id))
        }else{
            reject('El usuario no se encontro')
        }
    })
};

const obtenerTelefono = id => {
    return new Promise((resolve, reject) => {
        //esta Arrow funtion de ususarios es una forma de buscar recordemos que estamos en objeto no en un formato JSON utilizamos el metodo buscar 
        if(telefonos.find(telefonos => telefonos.id === id)){
            resolve('Telefono  Existe')
           
        }else{
            reject('El telefono no se encontro')
        }
    })
};
obtenerUsuarios(2)
//recordemos que el den utiliza o se ejecuta cuando encuentra un resolve DEPENDIENDO DE LA CANTIADAD DE RESOLVE HAY UNA CANTIDAD DE THENS PUEDE SER?

.then(res=>{
    return(res )
})
.then(mes=>{
    console.log(mes)
})
.catch(error=>{
    console.log(error)
})