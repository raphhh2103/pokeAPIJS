
const input = document.getElementById("input")


fetch("https://pokeapi.co/api/v2/pokemon/"+input)
    .then(response => response.json())
    .then((pokemon) => {
       /* console.log(pokemon.stats[0].stat.name)*/

    })