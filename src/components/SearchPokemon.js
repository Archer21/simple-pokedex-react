'use strict'

import React from 'react'

const SearchPokemon = () => {
  return (
    <div className="SearchPokemon">
      <h2 className="SearchPokemon-title">Name or Number</h2>
      
      <div className="SearchPokemon-searchBoxContainer">
        <div className="SearchBox">
          <input type="text" className="SearchBox-input"/>
          <button className="SearchBox-button">Search</button>
        </div>
      </div>

      <p className="SearchPokemon-text">Use the Advanced Search to explore Pokémon by type, weakness, Ability, and more!</p>
    </div>
  )
}

export default SearchPokemon