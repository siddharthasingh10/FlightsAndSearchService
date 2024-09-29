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

    await queryInterface.bulkInsert('Airports',
      [
          {
              name:'Banglore Internantional Airport',
              cityId:8,
              createdAt: new Date(),
              updatedAt:new Date()
          },
          {
            name:'mysuru Internantional Airport',
            cityId:8  ,
            createdAt: new Date(),
              updatedAt:new Date()
          },
          {
            name:'varanasi Internantional Airport',
            cityId:3,
            createdAt: new Date(),
              updatedAt:new Date()
          },
          {
            name:'ahmedabad Internantional Airport',
            cityId:6,
            createdAt: new Date(),
              updatedAt:new Date()
          },
      ],{})
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
