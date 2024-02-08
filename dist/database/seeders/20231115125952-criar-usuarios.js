"use strict";'use strict';

const bcriptjs = require('bcryptjs');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    
     await queryInterface.bulkInsert('users', [{
       nome: 'Teste com seeder',
       email: "teste2@teste.com",
       password_hash: await bcriptjs.hash('651651', 8),
       create_at: new Date(),
       updated_at: new Date()
     }], {});
  },

  async down () {
    
  }
};
