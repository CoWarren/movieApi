const { Router } =  require('express')
const userRouter = Router() 
const User = require('../models/user.model')
const getUser = require('../middleware/getUser')

userRouter.get('/', async (req, res) => {
  const users = await User.findAll()
  res.status(200).send({ users })
})

userRouter.get('/:id', getUser, async (req, res) => {
  res.status(200).send({user: req.user})
})


module.exports = userRouter