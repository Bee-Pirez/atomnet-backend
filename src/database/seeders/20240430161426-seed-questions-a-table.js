'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.bulkInsert('questions_a', [
      { question: 'Existem áreas seguras na organização?', question_a_category_id: 51, created_at: new Date(), updated_at: new Date() },
      { question: 'Caso existam, essas áreas seguras possuem políticas e processos adequados, que são aplicados e monitorados?', question_a_category_id: 51, created_at: new Date(), updated_at: new Date() },

      { question: 'Existe uma política de mesa limpa e tela limpa para papéis e mídias de armazenamento removíveis e recursos de processamento da informação?', question_a_category_id: 52, created_at: new Date(), updated_at: new Date() },
      { question: 'A política de mesa limpa e tela limpa está definida e implementada, e essas políticas são revisadas periodicamente?', question_a_category_id: 52, created_at: new Date(), updated_at: new Date() },

      { question: 'Os perigos ambientais são identificados e considerados quando os locais para colocação dos equipamentos são escolhidos?', question_a_category_id: 53, created_at: new Date(), updated_at: new Date() },
      { question: 'Os riscos de acesso não autorizado são considerados ao posicionar o equipamento? ', question_a_category_id: 53, created_at: new Date(), updated_at: new Date() },

      { question: 'Existe uma política de medidas de segurança para ativos que operem fora do local, levando em conta os diferentes riscos decorrentes do fato de se trabalhar fora das dependências da organização?', question_a_category_id: 54, created_at: new Date(), updated_at: new Date() },
      { question: 'Essa política é amplamente comunicada?', question_a_category_id: 54, created_at: new Date(), updated_at: new Date() },
      { question: 'Há conscientização aos colaboradores sobre como manusear os ativos fora das instalações da organização de maneira segura?', question_a_category_id: 54, created_at: new Date(), updated_at: new Date() },

      { question: 'Existe uma política e processo de gerenciamento de mídias removíveis em conformidade com a classificação da organização?', question_a_category_id: 55, created_at: new Date(), updated_at: new Date() },
      { question: 'Essas políticas e processos são comunicados a todos os funcionários que utilizam mídias removíveis?', question_a_category_id: 55, created_at: new Date(), updated_at: new Date() },
      { question: 'Há procedimentos formais para o descarte seguro, proteção durante o transporte, e verificações regulares da eficácia do processo?', question_a_category_id: 55, created_at: new Date(), updated_at: new Date() },

      { question: 'Existe um sistema UPS/NoBreak ou gerador de backup? ', question_a_category_id: 56, created_at: new Date(), updated_at: new Date() },
      { question: 'Eles são testados dentro de um prazo regulares e adequados?', question_a_category_id: 56, created_at: new Date(), updated_at: new Date() },

      { question: 'Foram realizadas avaliações de risco sobre a localização do cabeamento de energia e de telecomunicações que transporta dados ou dá suporte aos serviços de informações? ', question_a_category_id: 57, created_at: new Date(), updated_at: new Date() },
      { question: 'O cabeamento está localizado de modo que fique protegido de interferências, interceptações ou danos?', question_a_category_id: 57, created_at: new Date(), updated_at: new Date() },

      { question: 'Existe um cronograma rigoroso de manutenção correta de equipamentos, a fim de assegurar sua disponibilidade e integridade permanente?', question_a_category_id: 58, created_at: new Date(), updated_at: new Date() },
      
      { question: 'Existe uma política que estabeleça como os ativos de informação podem ser reutilizados, de modo a assegurar que todos os dados sensíveis e softwares licenciados tenham sido removidos ou sobre gravados com segurança?', question_a_category_id: 59, created_at: new Date(), updated_at: new Date() },
      { question: 'Existe um procedimento de verificação se as medidas são adequadamente realizadas antes da reutilização ou descarte?', question_a_category_id: 59, created_at: new Date(), updated_at: new Date() },
    
      { question: 'Existe uma política de uso de dispositivos móveis documentada e aprovada pela direção?', question_a_category_id: 60, created_at: new Date(), updated_at: new Date() },
      { question: 'A política aborda os riscos adicionais associados ao uso de dispositivos móveis e inclui diretrizes para proteção de equipamentos não monitorados?', question_a_category_id: 60, created_at: new Date(), updated_at: new Date() },
      
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
