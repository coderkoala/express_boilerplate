'use strict';

const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {

  class UserRoleHasPermissions extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    // static associate(models) {
    // define association here
    // }
  }
  UserRoleHasPermissions.init(
    {
      role_id: DataTypes.BIGINT,
      permission_id: DataTypes.BIGINT,
    },
    {
      sequelize,
      timestamps: false,
      modelName: 'user_role_has_permissions',
    }
  );
  return UserRoleHasPermissions;
};
