const URLapi = "https://rickandmortyapi.com/api/character"

function makeCard (character){
    const {name, status, image} = character
    const cardsContainer = document.querySelector('.cards-container')
    const title = document.createElement("h5")
    title.textContent = name;

    const characterStatus = document.createElement('p');
    characterStatus.textContent = status;

    if(status == "Alive") characterStatus.style.color = "green"
    else characterStatus.style.color = 'gray';
    const characterImage = document.createElement('img')
    characterImage.src = image;
    characterImage.width = 200;
    const Card = document.createElement('div');
    Card.appendChild(title)
    Card.appendChild(characterImage);
    Card.appendChild(status);
    Card.style.backgroundColor = 'blue'

    cardsContainer.appendChild(Card)
}



async function getData() {
    try {
        const response = await fetch(URLapi);
        const {results} = await response.json();
        //destructuring
        for (let i = 0; i < results.length; i++) {
            makeCard(results[i])
            
        }
        console.log(results)
    } catch (error) {
        console.error(error)
    }

}
getData()