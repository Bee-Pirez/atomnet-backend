'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('questions', [
      { 
        question: 'Os objetivos de SI são comunicados às partes pertinentes?',
        form_id: 2, 
        question_category_id: 150, 
        created_at: new Date(), 
        updated_at: new Date() 
      },
      { 
        question: 'A documentação desses objetivos faz parte da documentação que os colaboradores devem tomar ciência no processo de onboarding ou no programa de conscientização da empresa?',
        form_id: 2, 
        question_category_id: 150, 
        created_at: new Date(), 
        updated_at: new Date() 
      },

      { 
        question: 'Os objetivos de SI são atualizados, no mínimo anualmente, ou antes, quando for pertinente? Ex.: surgimento de algum novo risco crítico; projeto de migração para a nuvem; mudança nas estratégias de segurança da empresa devido a algum incidente que tenha ocorrido etc.',
        form_id: 2, 
        question_category_id: 151, 
        created_at: new Date(), 
        updated_at: new Date() 
      },
      { 
        question: 'Os objetivos de SI são formalizados como documentação escrita e disponibilizados às partes interessadas? Ex.: são enviados por e-mail aos colaborados no ciclo anual de conscientização? São enviados ao colaborador quando entra na empresa? Ficam disponíveis na intranet para todos os colaboradores?',
        form_id: 2, 
        question_category_id: 152, 
        created_at: new Date(), 
        updated_at: new Date() 
      },
      { 
        question: 'A documentação dos objetivos de SI apresenta o planejamento para atingir esses objetivos? Ex.: projetos; ações; consientização; quais serviços serão contratados; ferramentas etc.',
        form_id: 2, 
        question_category_id: 153, 
        created_at: new Date(), 
        updated_at: new Date() 
      },
      { 
        question: 'Os objetivos de SI consideram os recursos necessários (Tanto os recursos financeiros quanto humanos e materiais) para sua concretização?',
        form_id: 2, 
        question_category_id: 154, 
        created_at: new Date(), 
        updated_at: new Date() 
      },
      { 
        question: 'Os objetivos de SI possuem um responsável determinado por sua implementação e monitoramento?',
        form_id: 2, 
        question_category_id: 155, 
        created_at: new Date(), 
        updated_at: new Date() 
      },
      { 
        question: 'Os objetivos de SI estabelecem prazos de conclusão para serem alcançados?',
        form_id: 2, 
        question_category_id: 156, 
        created_at: new Date(), 
        updated_at: new Date() 
      },
      { 
        question: 'Os objetivos de SI preveem como o atingimento desses objetivos serão avaliados? Como?',
        form_id: 2, 
        question_category_id: 157, 
        created_at: new Date(), 
        updated_at: new Date() 
      },
      { 
        question: 'Quando por algum motivo, seja como resultado da análise crítica, seja por alguma mudança de contexto interno ou externo da organização, ocorre a necessidade de realização de mudanças no SGSI, isso é feita de forma planejada? ',
        form_id: 2, 
        question_category_id: 158, 
        created_at: new Date(), 
        updated_at: new Date() 
      },
      { 
        question: 'Há um cronograma, um planejamento forma, plano de ação, designação de responsáveis e ações, prazos etc.?',
        form_id: 2, 
        question_category_id: 158, 
        created_at: new Date(), 
        updated_at: new Date() 
      },

      ////
      
      { question: 'A organização determina e provê os recursos necessários para estabelecer, implementar, manter e melhorar continuamente o sistema de gestão da segurança da informação?', form_id: 2, question_category_id: 159, created_at: new Date(), updated_at: new Date() },
      

      { question: 'A organização possui alguma matriz de responsabilidades ou outra documentação pertinente em que estejam designadas as responsabilidades das pessoas envolvidas com o bom funcionamento do SGSI?', form_id: 2, question_category_id: 160, created_at: new Date(), updated_at: new Date() },
      { question: 'Essas pessoas são formalmente avisadas e devidamente esclarecidas de quais são suas competências, atribuições, papéis e responsabilidades?', form_id: 2, question_category_id: 160, created_at: new Date(), updated_at: new Date() },
      { question: 'A organização determina a competência necessária das pessoas que realizam trabalhos sob o seu controle que afetem o desempenho da segurança da informação?', form_id: 2, question_category_id: 160, created_at: new Date(), updated_at: new Date() },
      
      { question: 'A organização tem alguma forma de preparação e aprimoramento de competência dessas pessoas mencionadas? São realizados treinamentos específicos com elas? Isso faz parte do planejamento de conscientização da empresa?', form_id: 2, question_category_id: 161, created_at: new Date(), updated_at: new Date() },
      { question: 'Tem algum canal ou meio de contato para tirar dúvidas, levantar questões? Isso faz parte do processo de onboarding dos novos colaboradores?', form_id: 2, question_category_id: 161, created_at: new Date(), updated_at: new Date() },

      { question: 'São realizadas ações para verificar a eficácia dessa preparação e aprimoramento de competências e absorção desses conhecimentos? ', form_id: 2, question_category_id: 162, created_at: new Date(), updated_at: new Date() },
      { question: 'São realizados testes, campanhas de phishing, provas, tem algum tipo de gameficação, exigência de certificados?', form_id: 2, question_category_id: 162, created_at: new Date(), updated_at: new Date() },

      { question: 'A organização retem informação documentada apropriada como evidência da competência (das pessoas que realizam trabalhos sob o seu controle)?', form_id: 2, question_category_id: 163, created_at: new Date(), updated_at: new Date() },
      { question: 'São registradas listas de presença dos treinamentos? Certificações dos colaboradores? São registrados os testes e seus resultados, palestras, treinamentos etc.?', form_id: 2, question_category_id: 163, created_at: new Date(), updated_at: new Date() },
 
      
      { question: 'Os colaboradores da organização estão cientes a respeito da Política de Segurança da Informação? ', form_id: 2, question_category_id: 164, created_at: new Date(), updated_at: new Date() },
      { question: 'A PSI é divulgada para os colaboradores? É recolhido algum termo de ciência dos colaboradores? A PSI faz parte do conteúdo do programa de conscientização da empresa? ', form_id: 2, question_category_id: 164, created_at: new Date(), updated_at: new Date() },
      
      { question: 'Os colaboradores da organização estão cientes sobre suas contribuições para a eficácia do Sistema de Gestão da Segurança da Informação? ', form_id: 2, question_category_id: 165, created_at: new Date(), updated_at: new Date() },
      { question: 'Os colaboradores da organização estão cientes sobre os benefícios da melhoria do desempenho da segurança da informação?', form_id: 2, question_category_id: 165, created_at: new Date(), updated_at: new Date() },
      
      { question: 'Os colaboradores da organização estão cientes das implicações das não conformidades com os requisitos do Sistema de Gestão da Segurança da informação?', form_id: 2, question_category_id: 166, created_at: new Date(), updated_at: new Date() },
      { question: 'Os colaboradores entendem o que são não conformidades e são orientados sobre os impactos de suas ações e comportamentos na segurança da empresa? ', form_id: 2, question_category_id: 166, created_at: new Date(), updated_at: new Date() },
      
      { question: 'A organização separa o que é necessário comunicar às partes interessadas internas e externas a respeito do SGSI?', form_id: 2, question_category_id: 167, created_at: new Date(), updated_at: new Date() },
      { question: 'A organização determina a necessidade de comunicações internas e externas relevantes para o SGSI, incluindo o conteúdo da comunicação?', form_id: 2, question_category_id: 167, created_at: new Date(), updated_at: new Date() },
      
      { question: 'Essa determinação de comunicação interna e externa relevantes inclui a informação de quando comunicar (casos ou periodicididade de comunicação)?', form_id: 2, question_category_id: 168, created_at: new Date(), updated_at: new Date() },
     
      { question: 'Essa determinação de comunicação interna e externa relevantes inclui a informação sobre com quem comunicar (entidades, orgãos, parceiros e outros a quem se deve fazer a comunicação)?', form_id: 2, question_category_id: 169, created_at: new Date(), updated_at: new Date() },
      
      { question: 'Essa determinação de comunicação interna e externa relevantes inclui a informação sobre como se comunicar (a forma e procedimento adequados de fazer a comunicação)?', form_id: 2, question_category_id: 170, created_at: new Date(), updated_at: new Date() },
      { question: 'O discurso e as informações são adaptadas ao público-alvo?', form_id: 2, question_category_id: 170, created_at: new Date(), updated_at: new Date() },
      
      { question: 'O SGSI da organização inclui a informação documentada requerida pela norma ISO 27001?', form_id: 2, question_category_id: 171, created_at: new Date(), updated_at: new Date() },
      
      { question: 'A organização determina quais são as documentações necessárias para a eficácia do seu SGSI? Isso está incluído no SGSI da empresa? ', form_id: 2, question_category_id: 172, created_at: new Date(), updated_at: new Date() },
      
      { question: 'A organização assegura que cria e atualiza a informação documentada atribuindo a devida identificação e descrição adequadas (por exemplo, título, data, autor ou um número de referência)?', form_id: 2, question_category_id: 173, created_at: new Date(), updated_at: new Date() },
     
      { question: 'A organização assegura que cria e atualiza a informação documentada em formato adequado (por exemplo, linguagem, versão do software, gráficos)? ', form_id: 2, question_category_id: 174, created_at: new Date(), updated_at: new Date() },
      { question: 'A organização assegura que cria e atualiza a informação documentada em meio adequado (por exemplo, papel, eletrônico)?', form_id: 2, question_category_id: 174, created_at: new Date(), updated_at: new Date() },
      

//////

      { question: 'A organização implementa um processo de análise crítica e aprovação para garantir a pertinência e adequação na criação e atualização da informação documentada?', form_id: 2, question_category_id: 175, created_at: new Date(), updated_at: new Date() },
      
      { question: 'A organização controla a informação documentada para garantir disponibilidade e adequação onde e quando necessário, conforme requerido pelo SGSI e pela ISO?', form_id: 2, question_category_id: 176, created_at: new Date(), updated_at: new Date() },
      { question: 'A documentação interna da empresa está disponível para os colaboradores, em local de fácil acesso, e é conhecida pelos colaboradores e outras partes interessadas?', form_id: 2, question_category_id: 176, created_at: new Date(), updated_at: new Date() },
      
      { question: 'A organização aplica controles de segurança adequados para garantir a confidencialidade, integridade e disponibilidade das informações?', form_id: 2, question_category_id: 177, created_at: new Date(), updated_at: new Date() },
      { question: 'A organização controla a informação documentada requerida pelo SGSI e pela ISO para assegurar que ela esteja protegida adequadamente contra perda de confidencialidade, uso indevido ou perda de integridade?', form_id: 2, question_category_id: 177, created_at: new Date(), updated_at: new Date() },
      
      { question: 'A organização, ao controlar a informação documentada, considera atividades como distribuição, acesso, recuperação e uso?', form_id: 2, question_category_id: 178, created_at: new Date(), updated_at: new Date() },
      { question: 'No controle, há decisões sobre permissões para ler ou alterar a informação documentada?', form_id: 2, question_category_id: 178, created_at: new Date(), updated_at: new Date() },
      
      { question: 'A organização considera e avalia as melhores práticas e formas de  armazenamento e preservação da documentação, inclusive quanto à legibilidade? ', form_id: 2, question_category_id: 179, created_at: new Date(), updated_at: new Date() },
      { question: 'É considerada a criticidade, classificação e o estado da documentação?', form_id: 2, question_category_id: 179, created_at: new Date(), updated_at: new Date() },
      
      { question: 'A organização realiza controle de mudanças da documentação (por exemplo, controle de versão e de alteração)?', form_id: 2, question_category_id: 180, created_at: new Date(), updated_at: new Date() },
      
      
      { question: 'A organização realiza controle de retenção e disposição da documentação?', form_id: 2, question_category_id: 181, created_at: new Date(), updated_at: new Date() },
      { question: 'Há disposições formalizadas acerca da retenção da documentação, contendo prazos, método de armazenamento etc., bem como sobre compartilhamento e divulgação da documentação?', form_id: 2, question_category_id: 181, created_at: new Date(), updated_at: new Date() },
      
      { question: 'Informações de origem externas que sejam necessárias para a organização possuem um processo de internalização, em que sejam devidamente identificadas, classificadas e controladas? ', form_id: 2, question_category_id: 182, created_at: new Date(), updated_at: new Date() },
      
      { question: 'Os processos da organização são formalizados, com critérios estabelecidos e controles implementados?', form_id: 2, question_category_id: 183, created_at: new Date(), updated_at: new Date() },
      { question: 'A informação documentada é disponibilizada para as pessoas que precisam dela?', form_id: 2, question_category_id: 183, created_at: new Date(), updated_at: new Date() },
      { question: 'A organização controla mudanças planejadas, analisa as consequências de mudanças não previstas e assegura o controle de processos terceirizados relevantes ao SGSI, incluindo requisitos de segurança para fornecedores e parceiros?', form_id: 2, question_category_id: 183, created_at: new Date(), updated_at: new Date() },
      
      { question: 'A organização realiza avaliações de riscos da segurança da informação em intervalos planejados ou quando ocorrem mudanças significativas?', form_id: 2, question_category_id: 184, created_at: new Date(), updated_at: new Date() },
      { question: 'As avaliações de riscos levam em conta os critérios estabelecidos para o processo de avaliação e a organização mantém informação documentada dos resultados dessas avaliações?', form_id: 2, question_category_id: 184, created_at: new Date(), updated_at: new Date() },
      
      { question: 'A organização possui um plano de tratamento de riscos de SI?', form_id: 2, question_category_id: 185, created_at: new Date(), updated_at: new Date() },
      { question: 'O plano de tratamento de riscos está implementado?', form_id: 2, question_category_id: 185, created_at: new Date(), updated_at: new Date() },
      { question: 'A organização documenta e retém os resultados do tratamento de riscos de SI?', form_id: 2, question_category_id: 185, created_at: new Date(), updated_at: new Date() },
      
      { question: 'A organização determina o que precisa ser monitorado e medido?', form_id: 2, question_category_id: 186, created_at: new Date(), updated_at: new Date() },
      { question: 'A determinação sobre o que precisa ser monitorado e medido inclui controles e processos da segurança da informação?', form_id: 2, question_category_id: 186, created_at: new Date(), updated_at: new Date() },
      
      { question: 'A organização determina os métodos para monitoramento, medição, análise e avaliação, conforme aplicável, para assegurar resultados válidos?', form_id: 2, question_category_id: 187, created_at: new Date(), updated_at: new Date() },
      { question: 'Os métodos selecionados produzem resultados comparáveis e reproduzíveis?', form_id: 2, question_category_id: 187, created_at: new Date(), updated_at: new Date() },
      
      /////
      { question: 'A organização determina quando o monitoramento e a medição devem ser realizados?', form_id: 2, question_category_id: 188, created_at: new Date(), updated_at: new Date() },
      
      { question: 'A organização determina quem deve monitorar e medir?', form_id: 2, question_category_id: 189, created_at: new Date(), updated_at: new Date() },
      
      { question: 'A organização determina quando os resultados do monitoramento e da medição devem ser analisados e avaliados?', form_id: 2, question_category_id: 190, created_at: new Date(), updated_at: new Date() },
      
      { question: 'A organização determina quem deve analisar e avaliar estes resultados?', form_id: 2, question_category_id: 191, created_at: new Date(), updated_at: new Date() },
      
      { question: 'As ações de monitoramento, medição, análise e avaliação são registadas e documentadas? Elas são armazenadas de maneira a evidenciar os resultados e formar uma trilha de auditoria?', form_id: 2, question_category_id: 192, created_at: new Date(), updated_at: new Date() },
      { question: 'A organização avalia o desempenho da SI e a eficácia do SGSI periodicamente? Essa avaliação é registrada e formalizada?', form_id: 2, question_category_id: 192, created_at: new Date(), updated_at: new Date() },
      
      { question: 'A organização realiza avaliações de riscos da segurança da informação em intervalos planejados ou quando ocorrem mudanças significativas?', form_id: 2, question_category_id: 193, created_at: new Date(), updated_at: new Date() },
      { question: 'As avaliações de riscos levam em conta os critérios estabelecidos para o processo de avaliação, e a organização mantém informação documentada dos resultados dessas avaliações?', form_id: 2, question_category_id: 193, created_at: new Date(), updated_at: new Date() },
      
      { question: 'Existe um procedimento formalizado para planejar e conduzir auditorias internas do SGSI que considere os requisitos eleitos pela organização? Isso é feito em intervalos regulares? ', form_id: 2, question_category_id: 194, created_at: new Date(), updated_at: new Date() },
      
      { question: 'Existe um procedimento formalizado para planejar e conduzir auditorias internas do SGSI que considere os requisitos da ISO27001? Isso é feito em intervalos regulares? ', form_id: 2, question_category_id: 195, created_at: new Date(), updated_at: new Date() },
      
      { question: 'As auditorias internas planejadas estão ocorrendo na forma e na periodicidade determinadas?', form_id: 2, question_category_id: 196, created_at: new Date(), updated_at: new Date() },
      { question: 'A organização mantém efetivamente implementado e mantido a condução de auditorias internas em intervalos planejados para promover informações do SGSI?', form_id: 2, question_category_id: 196, created_at: new Date(), updated_at: new Date() },
      
      { question: 'Existe um procedimento para planejar e conduzir auditorias internas do SGSI?', form_id: 2, question_category_id: 197, created_at: new Date(), updated_at: new Date() },
      { question: 'São definidos critérios e escopos de auditoria, considerando a criticidade dos processos de negócio e resultados de auditorias anteriores?', form_id: 2, question_category_id: 197, created_at: new Date(), updated_at: new Date() },
      
      { question: 'A organização especifica formalmente os critérios para que os auditores (sejam internos ou terceirizados) possam atuar em suas auditorias internas?', form_id: 2, question_category_id: 198, created_at: new Date(), updated_at: new Date() },
      { question: 'Os auditores são selecionados de acordo com esses processos?', form_id: 2, question_category_id: 198, created_at: new Date(), updated_at: new Date() },
      

      //////

      { question: 'Os resultados das auditorias internas são relatados para a gestão?', form_id: 2, question_category_id: 199, created_at: new Date(), updated_at: new Date() },
      
      { question: 'A informação documentada é disponibilizada como evidência da implementação do programa de auditoria e dos resultados da auditoria?', form_id: 2, question_category_id: 200, created_at: new Date(), updated_at: new Date() },
     
      { question: 'A PSI prevê a necessidade de a Alta Direção realizar análise crítica do SGSI, com periodicidade determinada?', form_id: 2, question_category_id: 201, created_at: new Date(), updated_at: new Date() },
      { question: 'A análise crítica aborda os tópicos das alíneas para verificar a adequação, pertinência e eficácia do SGSI em relação aos objetivos e estratégias de segurança da organização?', form_id: 2, question_category_id: 201, created_at: new Date(), updated_at: new Date() },

      { question: 'Os resultados das análises críticas anteriores são comparados? Qualitativa e quantitativamente?', form_id: 2, question_category_id: 202, created_at: new Date(), updated_at: new Date() },
      
      { question: 'Mudanças relevantes ao SGSI são levantadas, registradas e consideradas nas análises críticas? Como?', form_id: 2, question_category_id: 203, created_at: new Date(), updated_at: new Date() },
      
      { question: 'A análise crítica pela Direção inclui considerações em relação a mudanças nas necessidades e expectativas das partes interessadas, que sejam relevantes para o sistema de gestão da segurança da informação?', form_id: 2, question_category_id: 204, created_at: new Date(), updated_at: new Date() },
     
      { question: 'A análise crítica pela Direção deve considera o feedback sobre o desempenho da segurança da informação e as tendências associadas? ', form_id: 2, question_category_id: 205, created_at: new Date(), updated_at: new Date() },
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
