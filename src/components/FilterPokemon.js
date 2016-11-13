import React from 'react'

const FilterPokemon = () => {
  return (
    <div className="FilterPokemon">
      <button className="FilterPokemon-surpriseButton button">Surprise Me!</button>
      <select className="FilterPokemon-orderSelection">
        <option className="FilterPokemon-option" value="lowest">Lowest</option>
        <option className="FilterPokemon-option" value="highest">Highest</option>
        <option className="FilterPokemon-option" value="az">AZ</option>
        <option className="FilterPokemon-option" value="za">ZA</option>
      </select>
    </div>
  )
}


export default FilterPokemon