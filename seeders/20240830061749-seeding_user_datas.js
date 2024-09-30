'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    await queryInterface.bulkInsert('Users', [{
      name: 'John Doe',
      username: 'johndoe',
      email: 'johndoe@gmail.com',
      password: "johndoe",
      role: 'admin',
      phoneNumber: '081122334455',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Jake Kusnadi',
      username: 'jakekusnadi',
      email: 'jakekusnadi@gmail.com',
      password: "jakekusnadi",
      role: 'finance',
      phoneNumber: '081122334455',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'William Kuncoro',
      username: 'williamkuncoro',
      email: 'williamkuncoro@gmail.com',
      password: "williamkuncoro",
      role: 'it',
      phoneNumber: '081122334455',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
