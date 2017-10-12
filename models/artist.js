'use strict';

module.exports = (sequelize, DataTypes) => {

  const artist = sequelize.define('artist', {
    name: DataTypes.STRING,
    country: DataTypes.STRING,
    bio: DataTypes.TEXT
  });

  artist.associate = (models) => {
    artist.hasMany(models.album);
  };

  return artist;
};