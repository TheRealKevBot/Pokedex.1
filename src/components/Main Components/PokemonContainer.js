import React from 'react'

import PokemonCard from './PokemonCard'

export default function PokemonContainer(props) {
    
    return (
        <div className='pokemon-container'>
            <PokemonCard pokemon={props.pokemon}/>
        </div>
    )
}
