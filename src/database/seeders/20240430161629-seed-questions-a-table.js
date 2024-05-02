'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.bulkInsert('questions_a', [
      { question: 'As medidas de prevenção de vazamento de dados são aplicadas todos os sistemas, redes e quaisquer outros dispositivos que tratem, armazenem ou transmitam informações sensíveis na organização?', question_a_category_id: 71, created_at: new Date(), updated_at: new Date() },

      { question: 'Existe uma política de cópias de segurança implementada, e essa política está em conformidade com frameworks e normas relevantes?', question_a_category_id: 72, created_at: new Date(), updated_at: new Date() },
      { question: 'As cópias de segurança são realizadas de acordo com a política estabelecida e são testadas?', question_a_category_id: 72, created_at: new Date(), updated_at: new Date() },
    
      { question: 'Os recursos disponíveis de processamento de informações têm redundância suficiente para atender aos requisitos de disponibilidade da organização?', question_a_category_id: 73, created_at: new Date(), updated_at: new Date() },

      { question: 'A organização produz, mantém e revisa regularmente registros adequados de eventos de segurança da informação?', question_a_category_id: 74, created_at: new Date(), updated_at: new Date() },
      { question: 'As informações de registro de eventos (logs) são adequadamente protegidas contra adulteração e acesso não autorizado, e os registros de eventos são devidamente registrados, protegidos, armazenados e revisados?', question_a_category_id: 74, created_at: new Date(), updated_at: new Date() },
      
      { question: 'Existe algum processo documentado e implementado sobre o monitoramento das redes, sistemas e aplicações para detectar comportamentos anômalos e possíveis incidentes de segurança da informação?', question_a_category_id: 75, created_at: new Date(), updated_at: new Date() },
      
      { question: 'Todos os relógios de sistemas de processamento relevante, tanto os que estejam dentro da organização quanto dentro do domínio de segurança, estão sincronizados com uma fonte de tempo precisa?', question_a_category_id: 76, created_at: new Date(), updated_at: new Date() },

      { question: 'O uso de programas utilitários privilegiados (capazes de sobrepor os controles dos sistemas e aplicações) são restritos e monitorados?', question_a_category_id: 77, created_at: new Date(), updated_at: new Date() },

      { question: 'Existe um procedimento formal implementado para controlar a instalação de software em sistemas operacionais?', question_a_category_id: 78, created_at: new Date(), updated_at: new Date() },
      { question: 'Há procedimentos implementados que definam critérios para restringir a instalação de software pelos usuários?', question_a_category_id: 78, created_at: new Date(), updated_at: new Date() },

      { question: 'Existe um procedimento de gestão e controle de redes?', question_a_category_id: 79, created_at: new Date(), updated_at: new Date() },
      { question: 'Foram estabelecidas responsabilidades e processos apropriados para garantir a segurança da informação?', question_a_category_id: 79, created_at: new Date(), updated_at: new Date() },

      { question: 'A organização implementou mecanismos de gestão de risco que identificam serviços de rede, sua segurança, níveis de serviço e requisitos de gerenciamento?', question_a_category_id: 80, created_at: new Date(), updated_at: new Date() },
      { question: 'A segurança é obrigatória em acordos e contratos com prestadores de serviços, e os SLAs relacionados à segurança são obrigatórios e cumpridos?', question_a_category_id: 80, created_at: new Date(), updated_at: new Date() },

      //

      { question: 'A topologia de rede estabelece a segregação de redes para diferentes tarefas, grupos de serviços de informação, usuários e sistemas?', question_a_category_id: 81, created_at: new Date(), updated_at: new Date() },

      { question: 'O gerenciamento de acesso a sites externos é realizado? ', question_a_category_id: 82, created_at: new Date(), updated_at: new Date() },

      { question: 'Existe uma política formalizada e implementada para uso de controles criptográficos para a proteção da segurança da informação?', question_a_category_id: 83, created_at: new Date(), updated_at: new Date() },
      { question: 'Existe uma política formalizada para reger todo o ciclo de vida das chaves criptográficas, incluindo normas sobre seu uso e proteção?', question_a_category_id: 83, created_at: new Date(), updated_at: new Date() },

      { question: 'Existe uma política implementada de desenvolvimento seguro de softwares e sistemas?', question_a_category_id: 84, created_at: new Date(), updated_at: new Date() },
      { question: 'Existe um procedimento de avaliação dos controles de segurança de desenvolvimento seguro?', question_a_category_id: 84, created_at: new Date(), updated_at: new Date() },

      { question: 'Os serviços de aplicação que enviam informações através redes públicas são adequadamente protegidos contra atividades fraudulentas, disputas contratuais, divulgações não autorizados e modificações não autorizadas? ', question_a_category_id: 85, created_at: new Date(), updated_at: new Date() },
      { question: 'Existem controles implementados para evitar transmissão incompleta, erros de roteamento, alterações não autorizadas de mensagem, divulgação não autorizada, duplicação ou representação de mensagem não autorizada?', question_a_category_id: 85, created_at: new Date(), updated_at: new Date() },

      { question: 'A organização estabeleceu princípios para projetar sistemas seguros?', question_a_category_id: 86, created_at: new Date(), updated_at: new Date() },
      { question: 'Esses princípios são documentados, mantidos e adequadamente aplicados quando da implementação de sistemas de informação? ', question_a_category_id: 86, created_at: new Date(), updated_at: new Date() },

      { question: 'Os princípios de codificação segura são aplicados ao desenvolvimento de software?', question_a_category_id: 87, created_at: new Date(), updated_at: new Date() },

      { question: 'São realizados testes de funcionalidade de segurança adequados durante o processo de desenvolvimento de sistemas? ', question_a_category_id: 88, created_at: new Date(), updated_at: new Date() },
      { question: 'Existe um programa de testes de aceitação de novos sistemas / aplicações de informação, atualizações e novas versões?', question_a_category_id: 88, created_at: new Date(), updated_at: new Date() },

      { question: 'Existe um procedimento de supervisão e monitoramento nos casos em que o desenvolvimento de sistemas é terceirizado?', question_a_category_id: 89, created_at: new Date(), updated_at: new Date() },
      { question: 'Os códigos desenvolvidos externamente estão sujeitos a revisão de segurança antes de serem implementados?', question_a_category_id: 89, created_at: new Date(), updated_at: new Date() },

      { question: 'A organização estabelece a separação de ambientes de desenvolvimento, teste e produção, de modo a reduzir os riscos de acesos ou modificações não autorizadas no ambiente de produção?', question_a_category_id: 90, created_at: new Date(), updated_at: new Date() },
      { question: 'Foram estabelecidos ambientes seguros de desenvolvimento?', question_a_category_id: 90, created_at: new Date(), updated_at: new Date() },
      { question: 'Todos os projetos utilizam adequadamente o ambiente de desenvolvimento seguro durante o ciclo de vida de desenvolvimento do sistema?', question_a_category_id: 90, created_at: new Date(), updated_at: new Date() },

      //
      
      { question: 'As mudanças no ambiente de tecnologia da informação são identificadas, avaliadas e autorizadas?', question_a_category_id: 91, created_at: new Date(), updated_at: new Date() },
      { question: 'São implementadas as mudanças com controle de segurança?', question_a_category_id: 91, created_at: new Date(), updated_at: new Date() },
      { question: 'São realizados testes, documentação e revisões após a implementação de mudanças?', question_a_category_id: 91, created_at: new Date(), updated_at: new Date() },
      { question: 'A política de gestão de mudanças é gerenciada , incluindo comunicação, avaliação de riscos, monitoramento e gestão de mudanças não planejadas?', question_a_category_id: 91, created_at: new Date(), updated_at: new Date() },
    
      { question: 'Existe um procedimento objetivo para selecionar dados de teste?', question_a_category_id: 92, created_at: new Date(), updated_at: new Date() },
      { question: 'São geradas e armazenadas informações de teste e quem tem acesso a elas?', question_a_category_id: 92, created_at: new Date(), updated_at: new Date() },
      { question: 'Há políticas de proteção de informações de teste, e essas políticas são monitoradas quanto à conformidade?', question_a_category_id: 92, created_at: new Date(), updated_at: new Date() },

      { question: 'A organização realiza testes de auditoria?', question_a_category_id: 93, created_at: new Date(), updated_at: new Date() },
      { question: 'Os sistemas operacionais de Segurança da Informação estão sujeitos a auditorias? ', question_a_category_id: 93, created_at: new Date(), updated_at: new Date() },
      { question: 'O procedimento de auditoria foi estabelecido de modo a assegurar que a interrupção do negócio seja minimizada?', question_a_category_id: 93, created_at: new Date(), updated_at: new Date() },
      { question: 'Os testes de auditoria e e outras atividades de garantia são planejados e acordados entre o testador e a gestão apropriada?', question_a_category_id: 93, created_at: new Date(), updated_at: new Date() },
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
