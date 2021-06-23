
const searchPokemon = async(name) =>{

let baseUrl = `https://pokeapi.co/api/v2/pokemon/${name}`;

const response  =  await fetch(baseUrl);

const data = await response.json();
return data;


}

export default searchPokemon;