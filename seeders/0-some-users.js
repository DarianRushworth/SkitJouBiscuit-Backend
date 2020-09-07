'use strict';
const bcrypt = require("bcrypt")
const { SALT_ROUNDS } = require("../config/constants")


module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "users", [
      {
        fullName: "Darian Rushworth",
        favoriteArtist: "Day Din",
        email: "darian@gmail.com",
        password: bcrypt.hashSync("password", SALT_ROUNDS),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        fullName: "Kristina Matthews",
        favoriteArtist: "Undercover",\
        email: "kTina@gmail.com",
        password: bcrypt.hashSync("DariAnne", SALT_ROUNDS),
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ]
    )},

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("users", null, {});
  }
};
