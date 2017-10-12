'use strict';

const models = require('../models');

module.exports = class {

  findAll(req, res) {
    models.genre.findAll().then(genres => {
      res.json(genres);
    }).catch(err => {
      res.status(500).send(err);
    });
  }

  findOne(req, res) {
    models.genre.findById(req.params.id).then(genre => {
      if (genre) {
        res.json(genre);
      } else {
        res.sendStatus(404);
      }
    }).catch(err => {
      res.status(500).send(err);
    });
  }

  create(req, res) {
    models.genre.create(req.body).then(() => {
      res.redirect('/');
    }).catch(err => {
      res.status(500).send(err);
    });
  }

  delete(req, res) {
    models.genre.destroy({
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