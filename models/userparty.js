'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class userParty extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  userParty.init({
    userId: DataTypes.INTEGER,
    partyId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'userParty',
  });
  return userParty;
};