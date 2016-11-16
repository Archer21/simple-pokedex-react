import React from 'react'

class FilterPokemon extends React.Component {

  constructor (props) {
    super(props)
    this.handleRandomSearch = this.handleRandomSearch.bind(this)
    this.handleSortList = this.handleSortList.bind(this)
  }

  handleSortList (e) {
    function sortListByAZ (obj1, obj2) {
      return obj1.name>obj2.name
    }

    function sortListByZA (obj1, obj2) {
      return obj2.name>obj1.name
    }

    const sortValues = {
      AZ: 'az',
      ZA: 'za'
    }

    let arr = this.props.pokemonList
    
    if (e.target.value === sortValues.AZ) {
      arr.sort(sortListByAZ)
    } else if (e.target.value === sortValues.ZA){
      arr.sort(sortListByZA)
    }

    this.props.sortList(arr)    
  }

  handleRandomSearch (e) {
    let initial = 1
    let limit = 721
    function randomIntFromInterval (min,max){
      return Math.floor(Math.random()*(max-min+1)+min);
    }

    let randomId = randomIntFromInterval(initial, limit)
    this.props.getRandomPokemon(randomId)
  }

  render  () {
    return (
      <div className="FilterPokemon">
        <button className="FilterPokemon-surpriseButton button" onClick={this.handleRandomSearch}>Surprise Me!</button>
        <select className="FilterPokemon-orderSelection" onChange={this.handleSortList}>
          <option className="FilterPokemon-option" value="az">AZ</option>
          <option className="FilterPokemon-option" value="za">ZA</option>
        </select>
      </div>
    )
  }
}


export default FilterPokemon