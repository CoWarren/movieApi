const { DataTypes, Model } = require('sequelize');
const database = require('../db/db');

class User extends Model {}

User.init({
  username: {
    type: DataTypes.STRING,
    allowNull: false
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  }
},{
  sequelize: database
})

module.exports = User