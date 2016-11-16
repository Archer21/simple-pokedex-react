'use strict'

import React from 'react'
import uuid from 'uuid'

import PokemonCard from './PokemonCard'

class PokemonList extends React.Component {

  render () {

    if (this.props.pokemonList === 0) {
      return <div>Loading...</div>
    }
      
    let pokemonList = this.props.pokemonList.map((pokemon) => {
      return (
        <div key={uuid.v1()} className="PokemonList-pokemonCardContainer">
          <PokemonCard pokemon={pokemon} />
        </div>
      )
    })

    return (
      <div className="PokemonList">
        { pokemonList }
      </div>     
    )
  }
}

export default PokemonList