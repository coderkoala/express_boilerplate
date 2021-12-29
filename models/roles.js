'use strict';

const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserRoles extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    // static associate(models) {
    // define association here
    // }
  }
  UserRoles.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.BIGINT,
      },
      type: DataTypes.ENUM(['administrator', 'manager', 'employee', 'customer', 'custom']),
      name: DataTypes.STRING(160),
      description: DataTypes.STRING(255),
      isActive: DataTypes.ENUM(['active', 'inactive']),
    },
    {
      sequelize,
      timestamps: true,
      modelName: 'UserRoles',
    }
  );
  return UserRoles;
};
