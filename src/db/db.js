const { Sequelize } = require('sequelize')
const path = require('path')

const database = new Sequelize({
  dialect: 'sqlite',
  storage: path.join(__dirname, 'movie_watchlist.sqlite'),
  logging: false
})

module.exports = database