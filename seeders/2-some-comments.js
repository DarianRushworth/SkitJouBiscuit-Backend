'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "comments", [
        {
          input: `
          ALL I WANT TO DO IS WIGGLE, SCREW YOU COVID!!`,
          userId: 1,
          partyId: 1,
          updatedAt: new Date(),
          createdAt: new Date(),
        },
        {
          input: `
          There is always next year :(`,
          userId: 2,
          partyId: 1,
          updatedAt: new Date(),
          createdAt: new Date(),
        },
        {
          input: `
          Can't wait to be with my fellow South Africans and celebrate the elements, whilst
          dancing my ass off!`,
          userId: 1,
          partyId: 4,
          updatedAt: new Date(),
          createdAt: new Date(),
        },
        {
          input: `
          Throw all the covid in the fire and call it Burning Covid Festival!!`,
          userId: 2,
          partyId: 8,
          updatedAt: new Date(),
          createdAt: new Date(),
        }
      ]
)},

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("comments", null, {});
  }
};
