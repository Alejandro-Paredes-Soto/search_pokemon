import './App.css';
import PokemonItem from './components/PokemonItem';
import searchPokemon from './services/searchPokemon';
import { useState} from 'react';
function App() {

const  [search, setSearch] = useState('');
const  [pokemon, setPokemon] = useState();


const onClick = async() =>{

  const data = await searchPokemon(search);
  
  setPokemon(data);
  }



const onChange = (e) =>{
  setSearch(e.target.value);
}



  return (
    <div className="app">
   <h1>Pokemons</h1>
      <PokemonItem onChange={onChange}
                  search={search}
                  onClick ={onClick}
                  pokemon={pokemon}/> 
    </div>
  );
}

export default App;
