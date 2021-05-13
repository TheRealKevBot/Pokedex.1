import { Component } from 'react';

import PokemonContainer from './Main Components/PokemonContainer'
// import PokemonCard from './Main Components/PokemonCard'

export default class Main extends Component {

    state = {
        pokemon: []
    } 

    // componentDidMount(){
    //     fetch('https://pokeapi.co/api/v2/pokemon?limit=898')
    //     .then(response => response.json())
    //     .then(({ results }) => this.setState({ pokemon: results }))
    // }

    componentDidMount(){
        fetch('https://pokeapi.co/api/v2/pokemon?limit=1118')
        .then(response => response.json())
        .then(({ results }) => results.forEach((pokemon) => {
            fetch(pokemon.url)
            .then(response => response.json())
            .then(result => this.setState({ pokemon: [...this.state.pokemon, result]})) 
        }))
    }


    render() {
        return (
            <div className='main'>
                <h1>Test</h1>
                <PokemonContainer pokemon={this.state.pokemon}/>
                {/* <PokemonCard pokemon={this.state.pokemon}/> */}
                {/* {console.log(this.state.pokemon)} */}
            </div>
        )
    }
}
