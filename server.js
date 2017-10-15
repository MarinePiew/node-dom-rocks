'use strict';

const express = require('express');
const bodyParser = require('body-parser');

const models = require('./models');
const albumsRoutes = require('./routes/albums');
const artistsRoutes = require('./routes/artists');
const genresRoutes = require('./routes/genres');

const app = express();
let port = 3000;

app.use(bodyParser.urlencoded({
  extended: true
}));

// Set static file directory
app.use(express.static('./public'));

// Set API routes
app.use('/albums', albumsRoutes);
app.use('/genres', genresRoutes);
app.use('/artists', artistsRoutes);

// Synchronize database with the previously declared models
models.sequelize.sync({
  alter: true
}).then((db) => {
  console.log('Database connected');
}).catch(err => {
  console.log('Error connecting database:', err);
});

// Start listening to external http requests
let server = app.listen(port, function () {
  console.log(`Server started on port ${port}`);
});