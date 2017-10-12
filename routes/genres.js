'use strict';

const GenresController = require('../controllers/genres');
const express = require('express');

const genresController = new GenresController;
const router = express.Router();

router.get('/', (req, res) => {
  genresController.findAll(req, res);
});

router.get('/:id', (req, res) => {
  genresController.findOne(req, res);
});

router.post('/', (req, res) => {
  genresController.create(req, res);
});

router.delete('/', (req, res) => {
  genresController.delete(req, res);
});

module.exports = router;