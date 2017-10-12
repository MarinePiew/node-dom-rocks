'use strict';

module.exports = {
  
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('artists', [{
      name: 'Jain',
      bio: '',
      country: 'FR',
      createdAt: new Date(),
      updatedAt: new Date()      
    }, {
      name: 'Depeche Mode',
      bio: '',
      country: 'UK',
      createdAt: new Date(),
      updatedAt: new Date()      
    }, {
      name: 'IAMX',
      bio: '',
      country: 'AU',
      createdAt: new Date(),
      updatedAt: new Date()      
    }, {
      name: 'The Kills',
      bio: '',
      country: 'US',
      createdAt: new Date(),
      updatedAt: new Date()      
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('artists', null, {});
  }
};
