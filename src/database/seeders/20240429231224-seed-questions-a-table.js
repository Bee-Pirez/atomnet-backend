'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.bulkInsert('questions_a', [
      { question: 'Existe um procedimento formal implementado para garantir que os funcionários e partes interessadas devolvam todos os ativos da organização que estejam em sua posse, em caso de mudança ou encerramento da contratação ou do acordo?', question_a_category_id: 11, created_at: new Date(), updated_at: new Date() },

      { question: 'Existe uma política de gerenciamento da classificação da informação de acordo com as necessidades de segurança da informação da organização, com base na confidencialidade, integridade, disponibilidade e requisitos das partes interessadas relevantes?', question_a_category_id: 12, created_at: new Date(), updated_at: new Date() },
      { question: 'Existe um processo através do qual todas as informações podem ser adequadamente classificadas?', question_a_category_id: 12, created_at: new Date(), updated_at: new Date() },

      { question: 'Existe um conjunto formal e apropriado de procedimentos para rotular e tratar a informação que esteja de acordo com o esquema de classificação da informação adotado pela organização?', question_a_category_id: 13, created_at: new Date(), updated_at: new Date() },

      { question: 'Existem regras, procedimentos ou acordos de transferência de informações implementados para todos os tipos de recursos de transferência dentro da organização e entre a organização e partes externas?', question_a_category_id: 14, created_at: new Date(), updated_at: new Date() },
      { question: 'Existem controles técnicos relevantes implementados para prevenir formas de transferência de dados não autorizadas?', question_a_category_id: 14, created_at: new Date(), updated_at: new Date() },
      { question: 'As políticas de segurança cobrem o uso de transferência da informação durante a utilização de sistemas de mensagens eletrônicas?', question_a_category_id: 14, created_at: new Date(), updated_at: new Date() },
      
      { question: 'Existe uma política documentada e estabelecida sobre controle de acesso físico e lógico às informações e a outros ativos associados, com base nos requisitos de segurança da informação e de negócios? A política de controle de acesso é apropriadamente comunicada a todos?', question_a_category_id: 15, created_at: new Date(), updated_at: new Date() },
      { question: 'Existem controles formais documentados e implementados para garantir que apenas os usuários que tenham sido especificamente autorizados recebam acesso às redes e aos serviços de rede, quando isto for necessário ao desempenho de suas funções?', question_a_category_id: 15, created_at: new Date(), updated_at: new Date() },

      { question: 'Existe um processo de gestão de identidades de acesso que inclui identificação única dos usuários, fornecimento e revogação de acesso, e como esses processos são executados?', question_a_category_id: 16, created_at: new Date(), updated_at: new Date() },
      { question: 'Esse processo de gestão de identidade está documentado em uma política, e essa política é revisada periodicamente ou em caso de mudanças significativas no processo?', question_a_category_id: 16, created_at: new Date(), updated_at: new Date() },

      { question: 'Existe um processo de gerenciamento formal implementado para controlar a concessão de informação de autenticação secreta?', question_a_category_id: 17, created_at: new Date(), updated_at: new Date() },
      { question: 'Existe uma política documentada e devidamente comunicada a respeito das práticas da organização quanto ao uso e tratamento das informações de autenticação secretas?', question_a_category_id: 17, created_at: new Date(), updated_at: new Date() },
      { question: 'Os sistemas para gerenciamento de senha são interativos? Senhas complexas/de qualidade são requeridas?', question_a_category_id: 17, created_at: new Date(), updated_at: new Date() },

      { question: 'Existe um processo formal de provisionamento de acesso de usuário que abrange todos os tipos de usuários e sistemas?', question_a_category_id: 18, created_at: new Date(), updated_at: new Date() },
      { question: 'Existe um procedimento para que os proprietários de ativos revejam periodicamente os direitos de acesso dos usuários, e a organização verifica a realização desse procedimento? ', question_a_category_id: 18, created_at: new Date(), updated_at: new Date() },
      { question: 'Há um procedimento formal para retirar ou ajustar os direitos de acesso quando as atividades, contratos ou acordos se encerram ou mudam?', question_a_category_id: 18, created_at: new Date(), updated_at: new Date() },

      { question: 'A segurança da informação está incluída nos contratos estabelecidos com fornecedores e prestadores de serviço, de maneira a mitigar os riscos associados decorrentes do acesso daqueles aos ativos da organização?', question_a_category_id: 19, created_at: new Date(), updated_at: new Date() },
      { question: 'Existe uma gestão de risco em toda a organização para a relação com os fornecedores?', question_a_category_id: 19, created_at: new Date(), updated_at: new Date() },
      
      { question: 'Existem requisitos de segurança da informação acordados com os fornecedores? Esses requisitos são adequadamente documentados?', question_a_category_id: 20, created_at: new Date(), updated_at: new Date() },
      { question: 'O acesso dos fornecedores a ativos de informação e infraestrutura de TI é controlado e monitorado?', question_a_category_id: 20, created_at: new Date(), updated_at: new Date() },

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
