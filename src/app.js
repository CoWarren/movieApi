const express = require('express')
const userRouter = require('./routes/users')
const showRouter = require('./routes/shows')
const app = express()

app.use(express.json())
app.use('/users', userRouter)
app.use('/shows', showRouter)

app.get('/', (req, res) => {
  res.send('hello world!')
})

module.exports = app