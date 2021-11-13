const sequelize = require("../db/connection");
const { DataTypes } = require("sequelize");



const Actor = sequelize.define("Actor", {
  
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  actor_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Actor; 