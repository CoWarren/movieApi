const Show = require("./show.model");
const User = require("./user.model");

Show.belongsToMany(User, { through: 'user_show'})
User.belongsToMany(Show, { through: 'user_show'})

module.exports = { Show, User }