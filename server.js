'use strict'

const http = require('http')
const express = require('express')
// const request = require('request-promise')
const Pokedex = require('pokedex-promise-v2')

const app = express()
const P = new Pokedex()

const limit = 11

function getPokemonInfo (data) {
  let pokemonInfo = {
    number: data.id,
    name: data.name,
    images: data.sprites,
    types: data.types
  }

  return pokemonInfo
}

app.use(express.static(`public`))

app.get('/', (req, res) => {
  res.sendFile(`${__dirname}/views/index.html`)
})

// return a list off pokemon
app.get('/pokemon/list/:offset', (req, res) => {
  var interval = {
    limit: limit,
    offset: req.params.offset
  }
  P.getPokemonsList(interval)
  .then(function (response) {
    let results = response.results.map(function (pokemon) {
      return P.getPokemonByName(pokemon.name)
      .then(function (data) {
        return getPokemonInfo(data)
      })
    })

    return Promise.all(results)
  })
  .then(function (list) {
    res.json(list)
  })
  .catch(function (err) {
    console.log(err)
  })
})

app.get('/pokemon/:id', (req, res) => {
  P.getPokemonByName(req.params.id)
  .then(function (data) {
    res.json(getPokemonInfo(data))
  })
  .catch(function (error) {
    console.log('There was an ERROR: ', error)
  })
})

let server = http.createServer(app)

server.listen(8080, () => {
  console.log('Server running in port 8080')
})
