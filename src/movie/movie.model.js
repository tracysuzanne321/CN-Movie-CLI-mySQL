const sequelize = require("../db/connection");
const { DataTypes } = require("sequelize");
const Actor = require( "./actor.model" );

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
  actorId: {
    type: DataTypes.INTEGER,
    references: { model: 'Actors', key: 'actorId' },
  },
});



module.exports = Movie;