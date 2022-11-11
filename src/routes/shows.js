const { Router } = require('express')
const { getShow } = require('../middleware/show.middleware')
const showRouter = Router() 
const Show = require('../models/show.model')

showRouter.get('/', async (req, res) => {
  const shows = await Show.findAll()
  res.status(200).send({ shows })
})

showRouter.get('/genres/:genre', async (req, res) => {
  const shows = await Show.findAll({ where: { genre: req.params.genre } })
  res.status(200).send({ shows })
})

showRouter.get('/:id', getShow, (req, res) => {
  res.status(200).send({ show: req.show})
})

showRouter.put('/:id/update/:status', async (req, res) => {
  const show = await Show.findByPk(req.params.id)
  await show.update({ status: req.params.status })
  res.status(200).send('Show was updated')
})

showRouter.delete('/:id', getShow, async (req, res) => {
  const show = await Show.findByPk(req.params.id)
  show.destroy()
  res.status(200).send('Show was deleted')
})



module.exports = showRouter