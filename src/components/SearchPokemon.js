'use strict'

import React from 'react'
import axios from 'axios'

class SearchPokemon extends React.Component {

  constructor (props) {
    super(props)
    this.onInputChange = this.onInputChange.bind(this)
    this.handleSearch = this.handleSearch.bind(this)
    this.state = {
      input: ""
    }
  }

  onInputChange (e) {
    this.setState({
      input: e.target.value
    })
  }

  handleSearch (e) {
    e.preventDefault()
    
    // function isString (obj) {
    //   return (Object.prototype.toString.call(obj) === '[object String]');
    // }

    let pokemon = this.state.input

    // if (isString(pokemon)) {
    //   pokemon.toLowerCase()
    // }

    this.props.handleInputSearch(pokemon)
  }

  render () {
    return (
      <div className="SearchPokemon">
        <h2 className="SearchPokemon-title">Name or Number</h2>
        
        <div className="SearchPokemon-searchBoxContainer">
          <div className="SearchBox">
            <input type="text" className="SearchBox-input" value={this.state.input} onChange={this.onInputChange}/>
            <button className="SearchBox-button" onClick={this.handleSearch}>Search</button>
          </div>
        </div>

        <p className="SearchPokemon-text">Use the Advanced Search to explore Pokémon by type, weakness, Ability, and more!</p>
      </div>
    )
  }
}

export default SearchPokemon