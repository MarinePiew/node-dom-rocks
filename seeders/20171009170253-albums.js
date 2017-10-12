'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('albums', [{
      artistId: 1,
      genreId: 3,
      title: 'Zanaka',
      description: `Date de sortie d'origine : 5 novembre 2015
      Date de sortie: 6 novembre 2015
      Label: Columbia
      Copyright: (P) 2015 Spookland
      Métadonnées requises par les maisons de disque: les métadonnées des fichiers musicaux contiennent un identifiant unique d’achat. En savoir plus.
      Durée totale: 33:14`,
      image: 'https://images-eu.ssl-images-amazon.com/images/I/51Ldkgm5p5L._SS500.jpg',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      artistId: 2,
      genreId: 1,
      title: 'Spirit',
      description: `Date de sortie d'origine : 17 mars 2017
      Date de sortie: 17 mars 2017
      Label: Columbia
      Copyright: (P) 2017 Venusnote Ltd., under exclusive license to Columbia Records, a Division of Sony Music Entertainment
      Métadonnées requises par les maisons de disque: les métadonnées des fichiers musicaux contiennent un identifiant unique d’achat. En savoir plus.
      Durée totale: 49:18`,
      image: 'https://images-na.ssl-images-amazon.com/images/I/91DFwVlpRfL._SX522_.jpg',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      artistId: 3,
      genreId: 3,
      title: 'Unfall',
      description: `Date de sortie d'origine : 22 septembre 2017
      Date de sortie: 22 septembre 2017
      Label: Orphic
      Copyright: ℗© 2017 IAMX
      Métadonnées requises par les maisons de disque: les métadonnées des fichiers musicaux contiennent un identifiant unique d’achat. En savoir plus.
      Durée totale: 47:09`,
      image: 'https://images-eu.ssl-images-amazon.com/images/I/41qJM6S9kOL._SS500.jpg',      
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      artistId: 4,
      genreId: 1,
      title: 'Ash & Ice',
      description: `Date de sortie d'origine : 2 mai 2016
      Date de sortie: 3 juin 2016
      Label: Domino Recording Co
      Copyright: ℗© Domino Recording Co Ltd
      Durée totale: 50:43`,
      image: 'https://images-eu.ssl-images-amazon.com/images/I/51ougZKVbnL._SS500.jpg',      
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('albums', null, {});
  }
};
