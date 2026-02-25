'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   await queryInterface.bulkInsert('Incomes', [{
    fecha: new Date("2026-01-05"),
    descripcion: "Sueldo mensual",
    categoria: "Salario",
    metodo: "Transferencia",
    monto: 350000,
    userId: 1,
    createdAt: new Date(),
  updatedAt: new Date()
  },
  {
    fecha: new Date("2026-01-15"),
    descripcion: "Trabajo freelance",
    categoria: "Freelance",
    metodo: "Transferencia",
    monto: 80000,
    userId: 1,
    createdAt: new Date(),
  updatedAt: new Date()
 
  },
  {
    fecha: new Date("2026-01-10"),
    descripcion: "Venta de ropa",
    categoria: "Ventas",
    metodo: "Efectivo",
    monto: 50000,
    userId: 2,
    createdAt: new Date(),
  updatedAt: new Date()

  },
  {
    fecha: new Date("2026-01-20"),
    descripcion: "Beca universitaria",
    categoria: "Beca",
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
