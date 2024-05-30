const bcrypt = require('bcrypt')

'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const hashedPassword = await bcrypt.hash('123456', 10)

    await queryInterface.bulkInsert('users', [
      { corporate_name: 'Atom Technology', cnpj: '11293891000138', postal_code: '03821900', city:'São Paulo', state: 'SP', street: 'Rua Teste', email: 'admin.atomtechnology@gmail.com',  password: hashedPassword, role: 'admin', created_at: new Date(), updated_at: new Date() },
    ])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
