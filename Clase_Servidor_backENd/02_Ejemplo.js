fetch(`http://localhost:3000/trainers/4`, {
    method: 'PUT',
    body: JSON.stringify({
        //los ID deben ser string datos como edad Pueden ser numericos
        "id": '4',
        "nombres": 'Juan',
        "apellidos": 'Gomez',
        "especialidad": 'FullStack Python & SQL'
        
    }),
    Headers: {
        'Content-type': 'application/json; charset=UFT-8'
    },

})
    .then((response)=> response.json())
    .then((json)=> console.log(json))
    .catch((error => console.error(Error)))