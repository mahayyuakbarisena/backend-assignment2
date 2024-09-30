'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    await queryInterface.bulkInsert('Movies', [{
      title: 'movie1',
      synopsis: 'movie 1 synopsis',
      trailerUrl: 'https://trailerUrl1.com',
      imgUrl: "https://imgUrl1.com",
      rating: '5',
      status: 'Coming soon',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: 'movie2',
      synopsis: 'movie 2 synopsis',
      trailerUrl: 'https://trailerUrl2.com',
      imgUrl: "https://imgUrl2.com",
      rating: '4',
      status: 'Live',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: 'movie3',
      synopsis: 'movie 3 synopsis',
      trailerUrl: 'https://trailerUrl3.com',
      imgUrl: "https://imgUrl3.com",
      rating: '3',
      status: 'Coming soon',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
