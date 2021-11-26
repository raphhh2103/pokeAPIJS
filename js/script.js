

const btn = document.getElementById("btn");
btn.addEventListener("click", function (){
const input = document.getElementById("input").value
let type;
const pokeResult = document.getElementById("pokebox")
fetch("https://pokeapi.co/api/v2/pokemon/"+input)
    .then(response => response.json())
    .then((pokemon) => {

clearfunction(pokeResult)
//pokeResult.innerHTML = " ";

    	console.log(pokemon)
    	
    	const name =  document.createElement("h2");
    	const table = document.createElement("table")
    	const types = document.createElement("tr");
    	const sprite = document.createElement("img")
    	
    	//types.id = types_id;
listFunction(types, pokemon)
imgFunction(sprite,pokemon,pokeResult)
table.className = " table table-hover"

    	
    	name.className = "pokeName";
    	name.innerText = pokemon.name
    	pokeResult.appendChild(name)
    	pokeResult.appendChild(types)
       /* console.log(pokemon.name)*/

    })

})
const listFunction = function(elementHtml, list){
for (tipe of list.types) {
    	 type = document.createElement("td")
    	 elementHtml.className = " table-secondary"
			type.className= " row"
    		type.innerText = tipe.type.name
    		
    	elementHtml.appendChild(type)

    	}
}
const imgFunction = function(elementHtml, obj,parent){
    	elementHtml.className ="img-circle , bg-primary";
    	elementHtml.src = obj.sprites.front_default
    	parent.appendChild(elementHtml)
}
const clearfunction = function(elementHtml){

elementHtml.innerHTML = " "
}
/*
type , nom , image 
separer proprement ! 
species url -> description ;
*/