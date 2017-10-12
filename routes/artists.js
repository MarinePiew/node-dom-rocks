'use strict';

const ArtistsController = require('../controllers/artists');
const express = require('express');

const artistsController = new ArtistsController;
const router = express.Router();

router.get('/', (req, res) => {
  artistsController.findAll(req, res);
});

router.get('/:id', (req, res) => {
  artistsController.findOne(req, res);
});

router.post('/', (req, res) => {
  artistsController.create(req, res);
});

router.delete('/', (req, res) => {
  artistsController.delete(req, res);
});

module.exports = router;