'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('questions', [
      { question: 'Os acordos com fornecedores incluem requisitos para contemplar a segurança da informação ao longo de toda a cadeia de fornecimento de serviços e produtos de tecnologia da informação e comunicação?', form_id: 1, question_category_id: 21, created_at: new Date(), updated_at: new Date() },

      { question: 'Os fornecedores estão sujeitos a monitoramento, análise crítica e e auditorias em intervalos regulares de tempo?', form_id: 1, question_category_id: 22, created_at: new Date(), updated_at: new Date() },
      { question: 'As mudanças na prestação de serviços estão sujeitas a um procedimento de gestão que inclui avaliação de segurança e risco?', form_id: 1, question_category_id: 22, created_at: new Date(), updated_at: new Date() },

      { question: 'Existe uma política sobre o uso de serviços em nuvem que estabeleça os processos de aquisição, uso, gestão e saída de serviços em nuvem de acordo com os requisitos de segurança da informação da organização?', form_id: 1, question_category_id: 23, created_at: new Date(), updated_at: new Date() },
      
      { question: 'As responsabilidades e procedimentos de gestão estão claramente identificadas e documentadas nos processos de gestão de risco, de modo a possibilitarem respostas rápidas, efetivas e ordenadas no caso de ocorrência de algum incidente?', form_id: 1, question_category_id: 24, created_at: new Date(), updated_at: new Date() },

      { question: 'Existe um procedimento para garantir que os eventos de segurança da informação sejam devidamente avaliados, categorizados e classificados?', form_id: 1, question_category_id: 25, created_at: new Date(), updated_at: new Date() },

      { question: 'Existe um procedimento para reportar incidentes de segurança da informação que reflita a classificação e gravidade dos eventos?', form_id: 1, question_category_id: 26, created_at: new Date(), updated_at: new Date() },
    
      { question: 'Existe um procedimento ou framework que permita que a organização aprenda com os incidentes de segurança da informação e reduza o impacto e a probabilidade da ocorrência de eventos futuros?', form_id: 1, question_category_id: 27, created_at: new Date(), updated_at: new Date() },
    
      { question: 'Existe uma política com procedimentos definidos para identificação, coleta, aquisição e preservação de evidências relacionadas a eventos de segurança da informação?', form_id: 1, question_category_id: 28, created_at: new Date(), updated_at: new Date() },
      { question: 'Na ocorrência de um incidente de segurança da informação, os dados relevantes são coletados de maneira a permitir que sejam usados como evidências?', form_id: 1, question_category_id: 28, created_at: new Date(), updated_at: new Date() },

      { question: 'A Segurança da Informação está integrada aos planos de continuidade da organização?', form_id: 1, question_category_id: 29, created_at: new Date(), updated_at: new Date() },
      { question: 'A organização possui processos documentados para garantir a continuidade dos serviços de segurança da informação durante situações adversas, e os planos e controles de continuidade são validados e certificados periodicamente?', form_id: 1, question_category_id: 29, created_at: new Date(), updated_at: new Date() },

      { question: 'Como a TIC (Tecnologia da Informação e Comunicação) pode ser planejada, implementada, mantida e testada de forma a atender aos objetivos de continuidade de negócios e aos requisitos de continuidade da TIC?', form_id: 1, question_category_id: 30, created_at: new Date(), updated_at: new Date() },

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
