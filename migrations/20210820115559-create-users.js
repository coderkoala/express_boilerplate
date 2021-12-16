'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.BIGINT
      },
      type: {
        allowNull: false,
        type: DataTypes.ENUM,
        values: ['administrator', 'manager', 'customer', 'employee'],
        defaultValue: 'customer'
      },
      guard: {
        allowNull: false,
        type: DataTypes.ENUM,
        values: ['web', 'api', 'nav', 'all'],
        defaultValue: 'all'
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING(160)
      },
      description: {
        allowNull: false,
        defaultValue: 'Description for the permission has not been set.',
        type: Sequelize.STRING(255)
      },
      group: {
        type: Sequelize.INTEGER,
        allowNull: true,
        defaultValue: null
      },
      sort: {
        type: Sequelize.INTEGER,
        allowNull: true,
        defaultValue: null
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
    await queryInterface.dropTable('users');
  }
};