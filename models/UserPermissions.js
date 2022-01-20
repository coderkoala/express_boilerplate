'use strict';

const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserPermissions extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  UserPermissions.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey:true,
      type:DataTypes.BIGINT
    },
    name: DataTypes.STRING(255),
    description: DataTypes.STRING(255),
    group: DataTypes.INTEGER,
    sort: DataTypes.INTEGER,
    isActive: DataTypes.ENUM(['active', 'inactive']),
  }, {
    sequelize,
    timestamps: true,
    tableName: 'user_permissions',
  });
  return UserPermissions;
};