'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   await queryInterface.bulkInsert('Incomes', [{
    fecha: new Date("2026-01-05"),
    descripcion: "Sueldo mensual",

    metodo: "Transferencia",
    monto: 350000,
    userId: 1,
    createdAt: new Date(),
  updatedAt: new Date()
  },
  {
    fecha: new Date("2026-01-15"),
    descripcion: "Trabajo freelance",

    metodo: "Transferencia",
    monto: 80000,
    userId: 1,
    createdAt: new Date(),
  updatedAt: new Date()
 
  },
  {
    fecha: new Date("2026-01-10"),
    descripcion: "Venta de ropa",

    metodo: "Efectivo",
    monto: 50000,
    userId: 2,
    createdAt: new Date(),
  updatedAt: new Date()

  },
  {
    fecha: new Date("2026-01-20"),
    descripcion: "Beca universitaria",

    metodo: "Transferencia",
    monto: 45000,
    userId: 3,
    createdAt: new Date(),
    updatedAt: new Date()
  }], {});
    
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Incomes', null, {});
     
  }
};
