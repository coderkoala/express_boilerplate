'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('user_roles', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.BIGINT
      },
      type: {
        allowNull: false,
        type: Sequelize.ENUM,
        values: ['administrator', 'manager', 'employee', 'customer', 'custom'],
        defaultValue: 'customer'
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING(160)
      },
      description: {
        allowNull: false,
        defaultValue: 'Description for the system role has not been set.',
        type: Sequelize.STRING(255)
      },
      isActive: {
        allowNull: false,
        defaultValue: 'active',
        type: Sequelize.ENUM(['active', 'inactive'])
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('now'),
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('now'),
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('user_roles');
  }
};