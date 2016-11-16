import React from 'react'
import uuid from 'uuid'
import classNames from 'classnames'

class PokemonCard extends React.Component {
  render () {

    let types = this.props.pokemon.types.map(type => {
      let cardClass = classNames('PokemonCard-type', type)
      return <a key={uuid.v1()} href="#"  className={cardClass} style={{backgroundColor: type}}>{type}</a>
    })
    return (
      <article className="PokemonCard">

        <div className="PokemonCard-body">
          <a href="#" className="PokemonCard-imageContainer">
            <img src={this.props.pokemon.image} alt="charizard" className="PokemonCard-image"/>
          </a>
          <div className="PokemonCard-actions">
            <a href="#" className="PokemonCard-action">+</a>
            <a href="#" className="PokemonCard-action">*</a>
            <a href="#" className="PokemonCard-action">µ</a>
          </div>
        </div>

        <div className="PokemonCard-footer">
          <span className="PokemonCard-number">#{this.props.pokemon.number}</span>
          <h4 className="PokemonCard-name">{this.props.pokemon.name}</h4>
          <div className="PokemonCard-types">
            {types}
          </div>
        </div>

      </article>
    )
  }
}

export default PokemonCard