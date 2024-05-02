'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.DataTypes.INTEGER
      },
      corporate_name: {
        allowNull: false,
        type: Sequelize.DataTypes.STRING
      },
      cnpj: {
        allowNull: false,
        unique: true,
        type: Sequelize.DataTypes.STRING
      },
      postal_code: {
        allowNull: false,
        type: Sequelize.DataTypes.STRING
      },
      city: {
        allowNull: false,
        type: Sequelize.DataTypes.STRING
      },
      state: {
        allowNull: false,
        type: Sequelize.DataTypes.STRING
      },
      street: {
        allowNull: false,
        type: Sequelize.DataTypes.STRING
      },
      email: {
        allowNull: false,
        unique: true,
        type: Sequelize.DataTypes.STRING
      },
      password: {
        allowNull: false,
        type: Sequelize.DataTypes.STRING
      },
      role: {
        allowNull: false,
        type: Sequelize.DataTypes.STRING
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      }
    })
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
