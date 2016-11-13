import React from 'react'

class PokemonCard extends React.Component {
  render () {
    return (
      <article className="PokemonCard">

        <div className="PokemonCard-body">
          <img src="./../../public/006.png" alt="charizard" className="PokemonCard-image"/>
          <div className="PokemonCard-actions">
            <a href="#" className="PokemonCard-action">+</a>
            <a href="#" className="PokemonCard-action">*</a>
            <a href="#" className="PokemonCard-action">µ</a>
          </div>
        </div>

        <div className="PokemonCard-footer">
          <span className="PokemonCard-number">#006</span>
          <h4 className="PokemonCard-name">Charizard</h4>
          <div className="PokemonCard-types">
            <a href="#" className="PokemonCard-type">Fire</a>
            <a href="#" className="PokemonCard-type">Flying</a>
          </div>
        </div>

      </article>
    )
  }
}

export default PokemonCard