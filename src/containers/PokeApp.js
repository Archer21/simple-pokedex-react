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
    this.onLoadMoreClick = this.onLoadMoreClick.bind(this)
    this.getPokemonByIdOrName = this.getPokemonByIdOrName.bind(this)
    this.sortList = this.sortList.bind(this)
    this.state = {
      pokemonList: []
    }
  }

  getPokemonList (response) {
    let list = response.data.map(data => {
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

    return list
  }

  getPokemonInfo (info) {
    let pokemon = {
      name: info.data.name,
      number: info.data.number,
      image: info.data.images.front_default,
      types: info.data.types.map(item => {
        return item.type.name
      })
    }
    return pokemon
  }

  getPokemonByIdOrName (id) {
    axios.get(`/pokemon/${id}`)
      .then(info => {
        let pokemon = [this.getPokemonInfo(info)]
        
        this.setState({
          pokemonList: pokemon
        })
      })
      .catch(err => {
        console.log(err)
      })
  }

  onLoadMoreClick (e) {
    let offset = this.state.pokemonList.length + 1

    axios.get(`pokemon/list/${offset}`)
    .then(response => {
      let pokeList = this.getPokemonList(response)
      this.setState({
        pokemonList: this.state.pokemonList.concat(pokeList)
      })
    })
    .catch(err => {
      console.log(err)
    })
  }

  sortList (sortedList) {
    this.setState({
      pokemonList: sortedList
    })
  }

  componentDidMount () {
    axios.get(`pokemon/list/1`)
    .then(response => {
      let pokeList = this.getPokemonList(response)

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
          <SearchPokemon handleInputSearch={this.getPokemonByIdOrName} />
        </div>

        <div className="PokeApp-filterPokemonContainer">
          <FilterPokemon
            pokemonList={this.state.pokemonList}
            getRandomPokemon={this.getPokemonByIdOrName}
            sortList={this.sortList}/>
        </div>

        <div className="PokeApp-pokemonListContainer">
          <PokemonList pokemonList={this.state.pokemonList} />
        </div>
        
        <div className="PokeApp-loadPokemon">
          <button className="LoadMore button" onClick={this.onLoadMoreClick}>Load More Pokemon</button>
        </div>

        <div className="PokeApp-footerContainer">
          <Footer />
        </div>

      </div>
    )
  }
}

export default PokeApp
