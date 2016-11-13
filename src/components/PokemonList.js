'use strict'

import React from 'react'

import PokemonCard from './PokemonCard'

class PokemonList extends React.Component {
  render () {
    return (
      <div className="PokemonList">
        <div className="PokemonList-pokemonCardContainer">
          <PokemonCard />
        </div>

        <div className="PokemonList-pokemonCardContainer">
          <PokemonCard />
        </div>

        <div className="PokemonList-pokemonCardContainer">
          <PokemonCard />
        </div>

        <div className="PokemonList-pokemonCardContainer">
          <PokemonCard />
        </div>

        <div className="PokemonList-pokemonCardContainer">
          <PokemonCard />
        </div>

        <div className="PokemonList-pokemonCardContainer">
          <PokemonCard />
        </div>

        <div className="PokemonList-pokemonCardContainer">
          <PokemonCard />
        </div>

        <div className="PokemonList-pokemonCardContainer">
          <PokemonCard />
        </div>
      </div>
    )
  }
}

export default PokemonList