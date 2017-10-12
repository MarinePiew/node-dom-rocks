'use strict';

const models = require('../models');

module.exports = class {

  findAll(req, res) {
    models.artist.findAll().then(artists => {
      res.json(artists);
    }).catch(err => {
      res.status(500).send(err);
    });
  }

  findOne(req, res) {
    models.artist.findById(req.params.id).then(artist => {
      if (artist) {
        res.json(artist);
      } else {
        res.sendStatus(404);
      }
    }).catch(err => {
      res.status(500).send(err);
    });
  }

  create(req, res) {
    models.artist.create(req.body).then(() => {
      res.redirect('/');
    }).catch(err => {
      res.status(500).send(err);
    });
  }

  delete(req, res) {
    models.artist.destroy({
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