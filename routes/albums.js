'use strict';

const AlbumsController = require('../controllers/albums');
const express = require('express');

const albumsController = new AlbumsController;
const router = express.Router();

router.get('/', (req, res) => {
  albumsController.findAll(req, res);
});

router.get('/:id', (req, res) => {
  albumsController.findOne(req, res);
});

router.post('/', (req, res) => {
  albumsController.create(req, res);
});

router.delete('/', (req, res) => {
  albumsController.delete(req, res);
});

module.exports = router;