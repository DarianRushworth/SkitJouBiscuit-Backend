'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "userParties", [
        {
          userId: 1,
          partyId: 4,
          status: "going",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 1,
          partyId: 7,
          status: "going",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 2,
          partyId: 5,
          status: "interested",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 2,
          partyId: 7,
          status: "interested",
          createdAt: new Date(),
          updatedAt: new Date(),
        }
      ]
    )},

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("userParties", null, {});
  }
};
