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
      party.hasMany(models.comments)
      party.belongsToMany(models.user, {
        through: "userParties",
        foreignKey: "partyId",
      })
    }
  };
  party.init({
    eventName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING,
    },
    month: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    duration: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    accomodation: {
      type: DataTypes.TEXT,
    },
    lineUp: {
      type: DataTypes.TEXT,
    },
    ticketLink: {
      type: DataTypes.TEXT,
    },
    rules: {
      type: DataTypes.TEXT,
    },
    extraInfo: {
      type: DataTypes.TEXT,
    },
    covidClosure: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    continent: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    country: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    city: {
      type: DataTypes.STRING,
    }
  }, {
    sequelize,
    modelName: 'party',
  });
  return party;
};