

/** @type {import('sequelize-cli').Migration} */
'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', [
      {
        nombre: 'Melany',
        password: '123456',
        saldo: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 2,
        nombre: "Lucas",
        password: "123456",
        saldo: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 3,
        nombre: "Camila",
        password: "123456",
        saldo: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  }
};
