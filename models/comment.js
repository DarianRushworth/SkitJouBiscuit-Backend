'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class comment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      comment.belongsTo(models.user)
      comment.belongsTo(models.party)
    }
  };
  comment.init({
    input: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "users",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    },
    partyId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "parties",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    }
  }, {
    sequelize,
    modelName: 'comment',
  });
  return comment;
};