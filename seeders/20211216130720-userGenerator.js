'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     *
     */
    await queryInterface.bulkInsert(
      'users',
      [
        {
          username: 'admin',
          firstName: 'System',
          lastName: 'Administrator',
          email: 'admin@mis.localhost',
          password: '$2a$10$T1W8ybvUt4CSqdqoIA/CkOttiDusVHDoxRirVca11DjGa3ZX.PKX2',
        },
        {
          username: 'staff',
          firstName: 'Staff',
          lastName: 'Member',
          email: 'staff@mis.localhost',
          password: '$2a$10$T1W8ybvUt4CSqdqoIA/CkOttiDusVHDoxRirVca11DjGa3ZX.PKX2',
        },
        {
          username: 'customer',
          firstName: 'Test',
          lastName: 'Customer',
          email: 'customer@mis.localhost',
          password: '$2a$10$T1W8ybvUt4CSqdqoIA/CkOttiDusVHDoxRirVca11DjGa3ZX.PKX2',
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
