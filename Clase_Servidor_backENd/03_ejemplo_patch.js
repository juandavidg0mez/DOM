fetch(`http://localhost:3000/trainers/3`, {
    method: 'PATCH',
    body: JSON.stringify({
        "id": "3",
        "nombres": "Yulieth",
        "apellidos": "De Sebastian",
        "especialidad": "FullStack Python"
    }),
    Headers: {
        'Content-type': 'application/json; charset=UFT-8'
    },

})
    .then((response)=> response.json())
    .then((json)=> console.log(json))
    .catch((error => console.error(Error)))