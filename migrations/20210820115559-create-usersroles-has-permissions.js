'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('user_role_has_permissions', {
      role_id: {
        type: Sequelize.BIGINT,
        references: {
          model: {
            tableName: 'user_roles',
          },
          key: 'id',
        },
        allowNull: false,
        onDelete: 'CASCADE',
      },
      permission_id: {
        type: Sequelize.BIGINT,
        references: {
          model: {
            tableName: 'user_permissions',
          },
          key: 'id',
        },
        allowNull: false,
        onDelete: 'CASCADE',
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('user_role_has_permissions');
  }
};