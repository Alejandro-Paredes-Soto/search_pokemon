import React from 'react';
import './PokemonItem.css';

const PokemonItem = ({onChange, onClick, pokemon}) => {


    function handleSubmit (e){

        e.preventDefault();
        onClick();
    }

    return (

        <div className="card">
           

            <form action="/" onSubmit = {handleSubmit}>
            {
  pokemon && <>
    
    <div className="img">
    <img src={pokemon.sprites.front_shiny} alt="img de pokemon"/>
    </div>
      
         <div className="info1">
              <p>Name:</p>  <p>{pokemon.name}</p> 
         </div>
         <div className="info1">
          <p>Typo:</p>  <p>{pokemon.types[0].type.name}</p>
         </div>
    </>
} 
             <div className="input">
                 
             <input type="text" placeholder="Input of Pokemon Favorite" onChange ={onChange}/>

             </div>
             <button onClick = {() => onClick()}>Search Pokemon</button>

            </form>

 
      
        </div>
    )
}

export default PokemonItem;;
