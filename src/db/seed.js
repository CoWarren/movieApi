const { Show, User } = require('../models')
const database = require('./db')
const userData = require('./seed.users')
const showData = require('./seed.shows')

async function seed() {
  await database.sync({ force: true })
  const users = await User.bulkCreate(userData)
  const shows = await Show.bulkCreate(showData)
  console.log('database seeded!')
}


module.exports = seed