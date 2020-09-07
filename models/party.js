'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class party extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  party.init({
    eventName: DataTypes.STRING,
    image: DataTypes.STRING,
    month: DataTypes.STRING,
    duration: DataTypes.STRING,
    description: DataTypes.TEXT,
    accomodation: DataTypes.TEXT,
    lineUp: DataTypes.TEXT,
    ticketLink: DataTypes.STRING,
    rules: DataTypes.TEXT,
    extraInfo: DataTypes.TEXT,
    covidClosure: DataTypes.BOOLEAN,
    continent: DataTypes.STRING,
    country: DataTypes.STRING,
    city: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'party',
  });
  return party;
};