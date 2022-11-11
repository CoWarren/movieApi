const User = require("../models/user.model");

async function getUser (req, res, next) {
  req.user = await User.findByPk(req.params.id)
  next()
}

module.exports = getUser