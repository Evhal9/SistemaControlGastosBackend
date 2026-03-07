'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Expenses', [

      {
        fecha: new Date("2026-01-03"),
        descripcion: "Supermercado",
        categoria: "Alimentos",
        metodo: "Tarjeta",
        monto: 45000,
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        fecha: new Date("2026-01-08"),
        descripcion: "Suscripción Netflix",
        categoria: "Entretenimiento",
        metodo: "Tarjeta",
        monto: 12000,
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        fecha: new Date("2026-01-11"),
        descripcion: "Transporte público",
        categoria: "Transporte",
        metodo: "Efectivo",
        monto: 8000,
        userId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        fecha: new Date("2026-01-15"),
        descripcion: "Compra de zapatillas",
        categoria: "Ropa",
        metodo: "Tarjeta",
        monto: 60000,
        userId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        fecha: new Date("2026-01-18"),
        descripcion: "Pago de internet",
        categoria: "Servicios",
        metodo: "Transferencia",
        monto: 15000,
        userId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        fecha: new Date("2026-01-22"),
        descripcion: "Salida a cenar",
        categoria: "Ocio",
        metodo: "Efectivo",
        monto: 30000,
        userId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      }

    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Expenses', null, {});
  }
};
