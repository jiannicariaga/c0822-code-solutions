const usersUrl = 'https://jsonplaceholder.typicode.com/users';
const pokemonUrl = 'https://pokeapi.co/api/v2/pokemon/133';

function sendReq(url) {
  fetch(url)
    .then(response => response.json())
    .then(data => console.log(data));
}

sendReq(usersUrl);
sendReq(pokemonUrl);
