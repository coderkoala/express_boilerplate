'use strict';

const bcrypt = require('bcrypt');

const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Users.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey:true,
      type:DataTypes.BIGINT
    },
    username: DataTypes.STRING(50),
    firstName: DataTypes.STRING(160),
    lastName: DataTypes.STRING(160),
    email: DataTypes.STRING(255),
    password: DataTypes.STRING(255),
    passwordUpdatedAt: DataTypes.STRING,
    lastLogin: DataTypes.DATE,
    lastLoginIP: DataTypes.STRING(50),
    isActive: DataTypes.ENUM(['active', 'inactive']),
  }, {
    sequelize,
    timestamps: true,
    hooks: {
      beforeCreate: (user, options) => {
        user.password = bcrypt.hashSync(user.password, 10);
      }
    },
    modelName: 'Users',
  });
  return Users;
};