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
      username: {
        type: Sequelize.STRING(50)
      },
      firstName: {
        allowNull: true,
        type: Sequelize.STRING(160)
      },
      lastName: {
        allowNull: true,
        type: Sequelize.STRING(160)
      },
      email: {
        type: Sequelize.STRING(255)
      },
      password: {
        type: Sequelize.STRING(255)
      },
      passwordUpdatedAt: {
        allowNull: true,
        type: Sequelize.DATE
      },
      lastLogin: {
        allowNull: true,
        type: Sequelize.DATE
      },
      lastLoginIP: {
        allowNull: true,
        type: Sequelize.STRING(50)
      },
      isActive: {
        allowNull: false,
        defaultValue: 'active',
        type: Sequelize.ENUM(['active', 'inactive'])
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('users');
  }
};