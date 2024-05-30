'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('questions', [
      { question: 'Como as contas de acesso privilegiado são geridas e controladas separadamente?', form_id: 1, question_category_id: 61, created_at: new Date(), updated_at: new Date() },
      
      { question: 'O acesso à informação e às funções dos sistemas de aplicações são restritos de acordo com a política de controle de acesso?', form_id: 1, question_category_id: 62, created_at: new Date(), updated_at: new Date() },

      { question: 'Por quais meios o acesso ao código-fonte de programas, incluindo o do Sistema de Controle de Acesso, é protegido e gerenciado?', form_id: 1, question_category_id: 63, created_at: new Date(), updated_at: new Date() },

      { question: 'Nos casos em que for requerido pela Política de Controle de Acesso, o acesso aos sistemas e aplicações é controlado por um procedimento seguro de entrada no sistema (log-on)?', form_id: 1, question_category_id: 64, created_at: new Date(), updated_at: new Date() },

      { question: 'Existe um processo de gestão de capacidade implementado de modo a garantir o desempenho requerido do sistema?', form_id: 1, question_category_id: 65, created_at: new Date(), updated_at: new Date() },

      { question: 'A organização implementou controles de detecção de malware e processos para prevenir a propagação de malware?', form_id: 1, question_category_id: 66, created_at: new Date(), updated_at: new Date() },
      { question: 'A organização possui um processo de recuperação de infecção por malware e um programa de conscientização sobre malware para os usuários?', form_id: 1, question_category_id: 66, created_at: new Date(), updated_at: new Date() },

      { question: 'A organização tem acesso a informações atualizadas sobre vulnerabilidades técnicas em seus sistemas de informação?', form_id: 1, question_category_id: 67, created_at: new Date(), updated_at: new Date() },
      { question: 'Existe um procedimento para avaliar riscos e reagir a novas vulnerabilidades, e a organização realiza análises regulares de conformidade técnica em seus sistemas de informação?', form_id: 1, question_category_id: 67, created_at: new Date(), updated_at: new Date() },

      { question: 'Existem processos e ferramentas estabelecidos, documentados e implementados para impor as configurações definidas para hardware, software, serviços, redes e sistemas?', form_id: 1, question_category_id: 68, created_at: new Date(), updated_at: new Date() },
      { question: 'As configurações são monitoradas e analisadas criticamente de forma regular para estarem sempre atualizadas?', form_id: 1, question_category_id: 68, created_at: new Date(), updated_at: new Date() },

      { question: 'As informações armazenadas em sistemas de informação, dispositivos ou em qualquer outra mídia de armazenamento são excluídas quando não são mais necessárias?', form_id: 1, question_category_id: 69, created_at: new Date(), updated_at: new Date() },
    
      { question: 'Como o mascaramento de dados pode ser realizado de forma a cumprir as políticas específicas da organização sobre controle de acesso, requisitos de negócios e requisitos específicos por tema, além de considerar as leis aplicáveis?', form_id: 1, question_category_id: 70, created_at: new Date(), updated_at: new Date() },
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
