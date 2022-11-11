const Show = require("../models/show.model");

async function getShow (req, res, next) {
  req.show = await Show.findByPk(req.params.id)
  next()
}

module.exports = { getShow }