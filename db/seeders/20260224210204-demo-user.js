

/** @type {import('sequelize-cli').Migration} */
'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', [
      {
        nombre: 'Melany',
        apellido: 'Salerno',
        email: 'melany@gmail.com',
        password: '123456',
        saldo: 450000,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 2,
        nombre: "Lucas",
        apellido: "Martinez",
        email: "lucas@gmail.com",
        password: "123456",
        saldo: 320000,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 3,
        nombre: "Camila",
        apellido: "Fernandez",
        email: "camila@gmail.com",
        password: "123456",
        saldo: 150000,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  }
};
