'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('answers_a', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.DataTypes.INTEGER
      },
      is_applicable: {
        allowNull: false,
        type: Sequelize.DataTypes.BOOLEAN
      },
      form_a_id: {
        allowNull: false,
        type: Sequelize.DataTypes.INTEGER,
        references: { model: 'forms_a', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'RESTRICT'
      },
      question_a_id: {
        allowNull: false,
        type: Sequelize.DataTypes.INTEGER,
        references: { model: 'questions_a', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'RESTRICT'
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DataTypes.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DataTypes.DATE
      }
    })
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('answers_a');
     */
  }
};
