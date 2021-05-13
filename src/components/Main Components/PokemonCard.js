import React from 'react'

export default function PokemonCard(props) {

    function showPokemon(){
        return props.pokemon.map(pokemon => <div className='pokemon' key={pokemon.id}>
            <h1>{pokemon.name}</h1>
            <img src={pokemon.sprites.other.official-artwork.front_default} alt={pokemon.name} />
            <h2>Pokedex # {pokemon.id}</h2>
            <h3>Starter: {pokemon.is_default? "Yes" : "No"}</h3>
            <h3>Height: {pokemon.height}</h3>
            <h3>Weight: {pokemon.weight}</h3>

        </div>)
    }
    return (
        <div className='pokemon-card'>
            {showPokemon()}
        </div>
    )
}
