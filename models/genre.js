'use strict';

module.exports = (sequelize, DataTypes) => {

  const genre = sequelize.define('genre', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    }
  });

  genre.associate = (models) => {};

  return genre;
};