import React, { Component } from 'react'

import Header from './../components/Header'
import SearchPokemon from './../components/SearchPokemon'
import FilterPokemon from './../components/FilterPokemon'

export default class App extends Component {
  render() {
    return (
      <div class="PokeApp">

        <div className="PokeApp-headerContainer">
          <Header />
        </div>

        <div className="PokeApp-searchContainer">
          <SearchPokemon />
        </div>

        <div className="PokeApp-filterPokemonContainer">
          <FilterPokemon />
        </div>

      </div>
    )
  }
}