'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('parties', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      eventName: {
        type: Sequelize.STRING
      },
      image: {
        type: Sequelize.STRING
      },
      month: {
        type: Sequelize.STRING
      },
      duration: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.TEXT
      },
      accomodation: {
        type: Sequelize.TEXT
      },
      lineUp: {
        type: Sequelize.TEXT
      },
      ticketLink: {
        type: Sequelize.STRING
      },
      rules: {
        type: Sequelize.TEXT
      },
      extraInfo: {
        type: Sequelize.TEXT
      },
      covidClosure: {
        type: Sequelize.BOOLEAN
      },
      continent: {
        type: Sequelize.STRING
      },
      country: {
        type: Sequelize.STRING
      },
      city: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('parties');
  }
};