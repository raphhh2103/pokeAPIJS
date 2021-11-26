

const btn = document.getElementById("btn");
btn.addEventListener("click", function (){
const input = document.getElementById("input").value
fetch("https://pokeapi.co/api/v2/pokemon/"+input)
    .then(response => response.json())
    .then((pokemon) => {
    	console.log(pokemon)
    	const pokeResult = document.getElementById("pokebox")
    	const name =  document.createElement("h2");
    	const types = document.createElement("tr");
    	let type;
    	//types.id = types_id;

    	for (tipe of pokemon.types) {
    	 type = document.createElement("td")

    		type.innerText = tipe.type.name
    	types.appendChild(type)
    		
    	}
    	name.className = "pokeName";
    	name.innerText = pokemon.name
    	pokeResult.appendChild(name)
    	pokeResult.appendChild(types)
       /* console.log(pokemon.name)*/

    })

})


/*
type , nom , image 

*/