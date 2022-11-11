const app = require('./app')
const database = require('./db/db')
const seed = require('./db/seed')
const PORT = 5001

app.listen(PORT, async () => {
  await seed()
  console.log(`app listening on http://localhost:${PORT}`)
})