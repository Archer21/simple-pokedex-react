'use strict'

const http = require('http')
const express = require('express')
// const request = require('request-promise')
const Pokedex = require('pokedex-promise-v2')

const app = express()
const P = new Pokedex()

app.use(express.static(`public`))

app.get('/', (req, res) => {
  res.sendFile(`${__dirname}/views/index.html`)
})

app.get('/pokemon/list', (req, res) => {
  var interval = {
    limit: 11,
    offset: 1
  }
  P.getPokemonsList(interval)
  .then(function (response) {
    let results = response.results.map(function (pokemon) {
      return P.getPokemonByName(pokemon.name)
        // .then(data => {
        //   return request(data.forms[0].url)
        // })

      .then(function (data) {
        let pokemonInfo = {
          number: data.id,
          name: data.name,
          images: data.sprites,
          types: data.types
        }
        return pokemonInfo
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

let server = http.createServer(app)

server.listen(8080, () => {
  console.log('Server running in port 8080')
})
