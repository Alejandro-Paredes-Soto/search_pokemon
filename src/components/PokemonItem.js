import React from 'react';
import './PokemonItem.css';
import esfera from './../esfera.jpg';

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
                 <img src={esfera} width="48px" height="48px" />
             <input type="text" placeholder="Input of Pokemon Favorite" onChange ={onChange}/>

             </div>
             <button onClick = {() => onClick()}>Search Pokemon</button>

            </form>

 
      
        </div>
    )
}

export default PokemonItem;;
