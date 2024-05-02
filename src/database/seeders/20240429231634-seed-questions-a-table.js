'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('questions_a', [
      { question: 'A organização identificou e documentou todos os requisitos legislativos, regulamentares ou contratuais relevantes relacionados à segurança?', question_a_category_id: 31, created_at: new Date(), updated_at: new Date() },
      { question: 'A conformidade está documentada e atualizada? Os controles criptográficos estão protegidos de acordo com todos os acordos, legislações e regulamentações relevantes pertinentes?', question_a_category_id: 31, created_at: new Date(), updated_at: new Date() },

      { question: 'A organização mantém registro de todos os direitos de propriedade intelectual e do uso de produtos de software proprietários?', question_a_category_id: 32, created_at: new Date(), updated_at: new Date() },
      { question: 'A organização monitora o uso não licenciado de software? ', question_a_category_id: 32, created_at: new Date(), updated_at: new Date() },

      { question: 'Os registros estão protegidos contra perda, destruição, falsificação e acesso ou liberação não autorizados de acordo com os requisitos legais, regulamentares, contratuais e de negócio?', question_a_category_id: 33, created_at: new Date(), updated_at: new Date() },

      { question: 'Os dados pessoais são identificados e apropriadamente qualificados? ', question_a_category_id: 34, created_at: new Date(), updated_at: new Date() },
      { question: 'Os dados pessoais estão protegidos de acordo com a legislação relevante?', question_a_category_id: 34, created_at: new Date(), updated_at: new Date() },

      { question: 'O enfoque da organização para gerenciar a segurança da informação está sujeita a uma análise crítica independente e realizada em intervalos de tempo regulares ou quando da concorrência de mudanças significativas?', question_a_category_id: 35, created_at: new Date(), updated_at: new Date() },
      { question: 'A implementação dos controles de segurança está sujeita a uma análise crítica independente em intervalos regulares ou quando da ocorrência de mudanças significativas?', question_a_category_id: 35, created_at: new Date(), updated_at: new Date() },

      { question: 'A organização instrui seus gestores a avaliarem regularmente a conformidade dos procedimentos e processamento de informações com as normas, requisitos e políticas de segurança aplicáveis em suas áreas de responsabilidade?', question_a_category_id: 36, created_at: new Date(), updated_at: new Date() },
      { question: 'Existem registros que demonstram as revisões realizadas pelos gestores?', question_a_category_id: 36, created_at: new Date(), updated_at: new Date() },
      { question: 'A organização realiza análises regulares de conformidade técnica em seus sistemas de informação?', question_a_category_id: 36, created_at: new Date(), updated_at: new Date() },

      { question: 'Os procedimentos de operação são adequadamente documentados?', question_a_category_id: 37, created_at: new Date(), updated_at: new Date() },
      { question: 'Os procedimentos são disponibilizados para todos os usuários que precisam fazer uso deles?', question_a_category_id: 37, created_at: new Date(), updated_at: new Date() },

      { question: 'As verificações de histórico são realizadas para todos os novos candidatos a emprego?', question_a_category_id: 38, created_at: new Date(), updated_at: new Date() },
      { question: 'Essas verificações são aprovadas pela direção? As verificações estão em conformidade com as leis, regulamentações e ética relevantes?', question_a_category_id: 38, created_at: new Date(), updated_at: new Date() },
      { question: 'Os níveis de verificação exigidos são suportados por avaliações de risco de negócios?', question_a_category_id: 38, created_at: new Date(), updated_at: new Date() },
      
      { question: 'É solicitado a todos os usuários funcionários, contratados e terceirizados que assinem acordos de confidencialidade e não divulgação? ', question_a_category_id: 39, created_at: new Date(), updated_at: new Date() },
      { question: 'Os contratos de trabalho e de serviço incluem especificamente a necessidade de proteger as informações de negócio? ', question_a_category_id: 39, created_at: new Date(), updated_at: new Date() },

      { question: 'Todos os funcionários internos e, quando pertinente, as partes externas passam por treinamento, educação e conscientização sobre segurança da informação e são regularmente atualizados sobre as políticas e procedimentos organizacionais relevantes para o desempenho de suas funções?', question_a_category_id: 40, created_at: new Date(), updated_at: new Date() },
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
