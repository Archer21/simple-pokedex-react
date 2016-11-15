import React, { Component } from 'react'
import axios from 'axios'

import Header from './../components/Header'
import SearchPokemon from './../components/SearchPokemon'
import FilterPokemon from './../components/FilterPokemon'
import PokemonList from './../components/PokemonList'
import Footer from './../components/Footer'


class PokeApp extends Component {
  constructor (props) {
    super(props)
    this.state = {
      pokemonList: []
    }
  }

  componentDidMount () {
    axios.get('pokemon/list')
    .then(response => {
      // debugger
      let pokeList = response.data.map(data => {
        // let pokeInfo = JSON.parse(data)
        let pokemon = {
          name: data.name,
          number: data.number,
          image: data.images.front_default,
          types: data.types.map(item => {
            return item.type.name
          })
        }
        return pokemon
      })

      this.setState({
        pokemonList: pokeList
      })
    })
    .catch(err => {
      console.log(err)
    })
  }

  render() {
    return (
      <div className="PokeApp">

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
          <PokemonList pokemonList={this.state.pokemonList} />
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

export default PokeApp
