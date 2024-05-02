'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('questions_a', [
      { question: 'Existe um processo disciplinar formal implementado que permite à organização tomar medidas contra os funcionários que tenham cometido uma violação de segurança da informação? ', question_a_category_id: 41, created_at: new Date(), updated_at: new Date() },
      { question: 'Esse processo disciplinar é devidamente comunicado a todos os funcionários? ', question_a_category_id: 41, created_at: new Date(), updated_at: new Date() },

      { question: 'Existe um procedimento documentado para o encerramento ou mudança de contratação?', question_a_category_id: 42, created_at: new Date(), updated_at: new Date() },
      { question: 'As responsabilidades de segurança da informação que permanecem válidas após o encerramento ou mudança de contratação são comunicadas e verificadas pela organização?', question_a_category_id: 42, created_at: new Date(), updated_at: new Date() },

      { question: 'Os requisitos para garantir a confidencialidade e a não divulgação de informações foram identificados de acordo com as necessidades da organização?', question_a_category_id: 43, created_at: new Date(), updated_at: new Date() },
      { question: 'Funcionários internos e partes externas assinam acordos de confidencialidade ou não divulgação, e os registros desses acordos são mantidos e revisados regularmente?', question_a_category_id: 43, created_at: new Date(), updated_at: new Date() },

      { question: 'Existe uma política de trabalho remoto aprovada pela direção?', question_a_category_id: 44, created_at: new Date(), updated_at: new Date() },
      { question: 'Há um processo definido para o acesso de trabalhadores remotos, incluindo a distribuição de equipamentos e orientações para a proteção de ativos e informações fora das instalações da organização?', question_a_category_id: 44, created_at: new Date(), updated_at: new Date() },

      { question: 'Existe um procedimento para notificar em tempo hábil os eventos de segurança da informação?', question_a_category_id: 45, created_at: new Date(), updated_at: new Date() },
      { question: 'Existe um processo para notificar fragilidades de segurança da informação identificadas?', question_a_category_id: 45, created_at: new Date(), updated_at: new Date() },

      { question: 'Existe um perímetro de segurança definido e usados para proteger tanto as áreas que contenham as instalações de processamento da informação como as informações críticas ou sensíveis?', question_a_category_id: 46, created_at: new Date(), updated_at: new Date() },
      { question: 'As áreas de informações sensíveis ou críticas são segregadas e adequadamente controladas?', question_a_category_id: 46, created_at: new Date(), updated_at: new Date() },

      { question: 'As áreas seguras possuem sistemas de controle de entrada física adequados para assegurar que apenas pessoal autorizado tenha acesso permitido?', question_a_category_id: 47, created_at: new Date(), updated_at: new Date() },
      { question: 'Existem áreas separadas para entrega e carregamento e outros pontos em que pessoas não autorizadas possam entrar nas instalações?', question_a_category_id: 47, created_at: new Date(), updated_at: new Date() },
      { question: 'O acesso a essas áreas é controlado?', question_a_category_id: 47, created_at: new Date(), updated_at: new Date() },

      { question: 'As instalações foram projetadas e configuradas de acordo com boas práticas de segurança da informação?', question_a_category_id: 48, created_at: new Date(), updated_at: new Date() },
      { question: 'Existem processos de manutenção de segurança implementados (como trancamento e mesas limpas), e esses processos são amplamente divulgados?', question_a_category_id: 48, created_at: new Date(), updated_at: new Date() },

      { question: 'As instalações são monitoradas continuamente para detectar e impedir o acesso físico não autorizado?', question_a_category_id: 49, created_at: new Date(), updated_at: new Date() },

      { question: 'As medidas de proteção física para prevenir desastres naturais, ataques maliciosos ou acidentes foram projetados e devidamente aplicados? ', question_a_category_id: 50, created_at: new Date(), updated_at: new Date() },
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
