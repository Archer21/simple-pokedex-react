import React, { Component } from 'react'

import Header from './../components/Header'
import SearchPokemon from './../components/SearchPokemon'
import FilterPokemon from './../components/FilterPokemon'
import PokemonList from './../components/PokemonList'
import Footer from './../components/Footer'


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

        <div className="PokeApp-pokemonListContainer">
          <PokemonList />
        </div>
        
        <div className="PokeApp-loadPokemon">
          <button className="LoadMore button">Load More Pokemon</button>
        </div>

        <div className="PokeApp-footerContainer">
          <Footer />
        </div>

      </div>
    )
  }
}
