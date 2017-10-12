'use strict';

module.exports = (sequelize, DataTypes) => {

  const album = sequelize.define('album', {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    description: DataTypes.TEXT,
    image: DataTypes.STRING
  });

  album.associate = (models) => {
    album.belongsTo(models.genre);
    album.belongsTo(models.artist);
  };

  return album;
};