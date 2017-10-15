'use strict';

const models = require('../models');

module.exports = class {

  /**
   * Find all albums, only returns needed basic info
   * @param {*} req 
   * @param {*} res 
   */
  findAll(req, res) {
    models.album.findAll({
      attributes: ['id', 'title', 'image'],
      include: [{
        attributes: [['id', 'artistId'], ['name', 'artistName']],
        model: models.artist,
        as: 'artist'
      }]
    }).then(albums => {
      res.json(albums);
    }).catch(err => {
      res.status(500).send(err);
    });
  }

  findOne(req, res) {
    models.album.findById(req.params.id, {
      include: [{
        model: models.genre,
        as: 'genre'
      },{
        model: models.artist,
        as: 'artist'
      }]
    }).then(album => {
      if (album) {
        res.json(album);
      } else {
        res.sendStatus(404);
      }
    }).catch(err => {
      res.status(500).send(err);
    });
  }

  create(req, res) {
    models.artist.findOrCreate({
      where: {
        name: req.body.artist
      },
      defaults: {
        name: req.body.artist
      }
    }).spread((artist, created) => {
      req.body.artistId = artist.id;
      return models.album.create(req.body);
    }).then(album => {
      res.redirect('/');
    }).catch(err => {
      res.status(500).send(err);
    });
  }

  delete(req, res) {
    models.album.destroy({
      where: {
        id: req.params.id
      }
    }).then(() => {
      res.sendStatus(200);
    }).catch(err => {
      res.status(500).send(err);
    });
  }
}