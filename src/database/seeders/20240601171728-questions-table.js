'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('questions', [
      { question: 'A análise crítica pela Direção considera as não conformidades e ações corretivas relacionadas ao sistema de gestão da segurança da informação?', form_id: 2, question_category_id: 206, created_at: new Date(), updated_at: new Date() },
      
      { question: 'A análise crítica pela Direção aborda os resultados da medição e monitoramento relacionados ao sistema de gestão da segurança da informação?', form_id: 2, question_category_id: 207, created_at: new Date(), updated_at: new Date() },
      
      { question: 'A análise crítica pela Direção abrange os resultados de auditorias relacionados ao sistema de gestão da segurança da informação?', form_id: 2, question_category_id: 208, created_at: new Date(), updated_at: new Date() },
      
      { question: 'A análise crítica pela Direção abrange o cumprimento dos objetivos da segurança da informação?', form_id: 2, question_category_id: 209, created_at: new Date(), updated_at: new Date() },
      
      { question: 'A análise crítica pela Direção abrange o feedback das partes interessadas?', form_id: 2, question_category_id: 210, created_at: new Date(), updated_at: new Date() },
      
      { question: 'A análise crítica pela Direção abrange os resultados da avaliação dos riscos e a situação do plano de tratamento de riscos?', form_id: 2, question_category_id: 211, created_at: new Date(), updated_at: new Date() },
      
      { question: 'A análise crítica pela Direção abrange oportunidades para a melhoria contínua?', form_id: 2, question_category_id: 212, created_at: new Date(), updated_at: new Date() },
      
      { question: 'A Alta Direção considera os resultados da análise crítica na sua tomada de decisões? Ex.: redefinição dos objetivos de SI; aprovação de orçamento; contratação de novos serviços; mudança no escopo de auditoria etc', form_id: 2, question_category_id: 213, created_at: new Date(), updated_at: new Date() },
      ///
      { question: 'A PSI prevê a necessidade de melhoria contínua do SGSI e estabelece as responsabilidades para isso?', form_id: 2, question_category_id: 214, created_at: new Date(), updated_at: new Date() },
      { question: 'A organização planeja, executa, registra, verifica e atua em relação à melhoria contínua do SGSI, incluindo o estabelecimento de metas, métricas e ações corretivas ou preventivas?', form_id: 2, question_category_id: 214, created_at: new Date(), updated_at: new Date() },
      
      { question: 'A organização executa práticas para descoberta de não conformidades, como auditorias internas, auditorias externas, relatórios de GV ou pentests?', form_id: 2, question_category_id: 215, created_at: new Date(), updated_at: new Date() },
      { question: 'Existe um planejamento e procedimento documentado para reagir às não conformidades, incluindo a definição de responsáveis, SLAs, prazos de verificação e planos de ação de acordo com a criticidade das não conformidades?', form_id: 2, question_category_id: 215, created_at: new Date(), updated_at: new Date() },
      
      { question: 'A organização tem um processo definido para controlar e corrigir não conformidades quando elas ocorrem?', form_id: 2, question_category_id: 216, created_at: new Date(), updated_at: new Date() },
      { question: 'Existe um planejamento que define como reagir às não conformidades encontradas, incluindo responsáveis, SLAs, prazos de verificação, com base na criticidade?', form_id: 2, question_category_id: 216, created_at: new Date(), updated_at: new Date() },
      
      { question: 'Como a organização lida com as consequências? Há um processo ou fluxo definido?', form_id: 2, question_category_id: 217, created_at: new Date(), updated_at: new Date() },
      
      { question: 'A organização investiga e registra as análises de causa raiz das não conformidades?', form_id: 2, question_category_id: 218, created_at: new Date(), updated_at: new Date() },
      { question: 'São estabelecidos planos de ação considerando a causa raiz dos problemas e desenvolvidas lições aprendidas a partir dessas investigações?', form_id: 2, question_category_id: 218, created_at: new Date(), updated_at: new Date() },
      
      { question: 'A organização analisa criticamente a não conformidade??', form_id: 2, question_category_id: 219, created_at: new Date(), updated_at: new Date() },
      
      { question: 'A organização detemrina as causas da não conformidade?', form_id: 2, question_category_id: 220, created_at: new Date(), updated_at: new Date() },
      

      ////
      { question: 'Há um processo estabelecido para determinar se existe não conformidades similares, ou se podem potencialmente ocorrer em alguma instancia?', form_id: 2, question_category_id: 221, created_at: new Date(), updated_at: new Date() },
      
      { question: 'A organização traça planos de ação que sejam mensuráveis e comparáveis?', form_id: 2, question_category_id: 222, created_at: new Date(), updated_at: new Date() },
      { question: 'São definidos prazos e responsabilidades para verificar a implementação dos planos de ação, incluindo ações para mitigar as não conformidades identificadas?', form_id: 2, question_category_id: 222, created_at: new Date(), updated_at: new Date() },
      
      { question: 'A organização analisa criticamente a eficácia de quaisquer ações corretivas tomadas? Como?', form_id: 2, question_category_id: 223, created_at: new Date(), updated_at: new Date() },
      
      { question: 'Os resultados das análises de melhoria contínua são considerados na atualização do SGSI?', form_id: 2, question_category_id: 224, created_at: new Date(), updated_at: new Date() },
      { question: 'A organização realiza mudanças no SGSI se necessário?', form_id: 2, question_category_id: 224, created_at: new Date(), updated_at: new Date() },
      
      { question: 'As não conformidades são classificadas?', form_id: 2, question_category_id: 225, created_at: new Date(), updated_at: new Date() },
      { question: 'As ações mitigatórias imediatas e as ações mitigatórias a longo prazo são descrita, correlacionadas e registradas e verificadas? Como?', form_id: 2, question_category_id: 225, created_at: new Date(), updated_at: new Date() },
      
      { question: 'São criados planos de ação e próximos passos a partir das não conformidades encontradas?', form_id: 2, question_category_id: 226, created_at: new Date(), updated_at: new Date() },
      { question: 'São estipulados prazos e SLAs para as correções? Esses prazos consideram a críticidade das não conformidades?', form_id: 2, question_category_id: 226, created_at: new Date(), updated_at: new Date() },
      { question: 'A organização registra os resultados das ações corretivas?', form_id: 2, question_category_id: 226, created_at: new Date(), updated_at: new Date() },

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
