'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('genres', [{
      name: 'Alternative',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Rock',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Pop',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Classic',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('genres', null, {});
  }
};
