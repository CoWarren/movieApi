const { DataTypes, Model } = require('sequelize');
const database = require('../db/db');

class Show extends Model {}

Show.init({
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  genre: {
    type: DataTypes.ENUM('Comedy', 'Drama', 'Horror', 'Sitcom'),
    allowNull: false,
  },
  rating: {
    type: DataTypes.INTEGER,
    allowNull: false 
  }, 
  status: {
    type: DataTypes.STRING,
    allowNull: false
  }
},{
  sequelize: database
})

module.exports = Show