const sequelize = require("../db/connection");
const { DataTypes } = require("sequelize");

const Movie = sequelize.define("Movie", {
  
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  actor: {
    type: DataTypes.STRING,
    allowNull: false,
    
  },
});

module.exports = Movie;