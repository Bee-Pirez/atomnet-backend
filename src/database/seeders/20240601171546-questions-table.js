'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('questions', [
      { question: 'Os objetivos do SGSI/estratégia de segurança estão claramente definidos?', form_id: 2, question_category_id: 94, created_at: new Date(), updated_at: new Date() },
      { question: 'Os problemas que afetam a capacidade de alcançar os objetivos são identificados e documentados, incluindo relatórios ou atas?', form_id: 2, question_category_id: 94, created_at: new Date(), updated_at: new Date() },
      { question: 'As atas de reuniões de comitê demonstram um encadeamento que aborda o que estava pendente, o que foi resolvido e os próximos passos para o auditor?', form_id: 2, question_category_id: 94, created_at: new Date(), updated_at: new Date() },
      
      { question: 'Existe um documento formal identificando objetivamente todas partes interessadas relevantes para o SGSI/estratégia de segurança da empresa? s', form_id: 2, question_category_id: 95, created_at: new Date(), updated_at: new Date() },
      { question: 'Listam as partes interessadas? De que forma fazem o levantamento (p. ex. uma tabela)? ', form_id: 2, question_category_id: 95, created_at: new Date(), updated_at: new Date() },
      { question: 'Essas partes podem ser clientes, fornecedores, órgão fiscalizador, órgão internacional, OAB, CVM, Bacen, colaboradores internos. ', form_id: 2, question_category_id: 95, created_at: new Date(), updated_at: new Date() },
      
      
      { question: 'Nessa lista ou em algum documento consta os requisitos dessas partes, incluindo leis, regulamentos, contratos, resoluções, estatutos, etc.?', form_id: 2, question_category_id: 96, created_at: new Date(), updated_at: new Date() },
      
      { question: 'Nessa lista ou em algum documento consta quais requisitos e obrigações relevantes para a segurança da informação serão endereçados/atendidos pelo SGSI/estratégia de segurança da empresa?  ', form_id: 2, question_category_id: 97, created_at: new Date(), updated_at: new Date() },
      
      { question: 'O escopo do SGSI foi definido e formalizado? Que áreas da empresa participaram? Houve uma discussão antes de ser formalizado?', form_id: 2, question_category_id: 98, created_at: new Date(), updated_at: new Date() },
      { question: 'Consideraram as partes relevantes e os requisitos das partes (contratos de clientes, fornecedores, etc.)? ', form_id: 2, question_category_id: 98, created_at: new Date(), updated_at: new Date() },


      //////

      { form_id: 2, question_category_id: 99, question: 'Dentro do documento do escopo/estratégias/de segurança tem as localidades (p. ex. localização do data center)? Fala dos processos que ocorrem na empresa? Sistemas de segurança das áreas? Está tudo descrito? Isso pode ser demonstrado?', created_at: new Date(), updated_at: new Date() },
      
      { form_id: 2, question_category_id: 100, question: 'O sistema de gestão da segurança da informação da empresa aborda: a) as questões internas e externas? b) ', created_at: new Date(), updated_at: new Date() },
      { form_id: 2, question_category_id: 100, question: 'O sistema de gestão da segurança da informação da empresa aborda: b) os requisitos? ', created_at: new Date(), updated_at: new Date() },
      { form_id: 2, question_category_id: 100, question: 'O sistema de gestão da segurança da informação da empresa aborda: c) as interfaces e dependências entre as atividades desempenhadas pela organização e por outras organizações?', created_at: new Date(), updated_at: new Date() },
      
      
      { form_id: 2, question_category_id: 101, question: 'O SGSI/estratégia de segurança da informação está formalmente estabelecido e implementado, com participação das partes relevantes?', created_at: new Date(), updated_at: new Date() },
      { form_id: 2, question_category_id: 101, question: 'O SGSI é revisado periodicamente para melhoria contínua, e qual é a periodicidade dessa revisão?', created_at: new Date(), updated_at: new Date() },
      
      
      { form_id: 2, question_category_id: 102, question: 'Como a alta direção participa da estratégia de segurança da informação e de que forma as informações são levadas para a Diretoria? ', created_at: new Date(), updated_at: new Date() },
      { form_id: 2, question_category_id: 102, question: 'Existem atas de reunião do Comitê de Segurança da Informação que demonstram a participação dos membros da alta direção, com encadeamento lógico, abordando pontos pendentes, bem como relatórios que evidenciam as atividades realizadas em SI ao longo de um período específico? Há outras evidências da existência do Comitê de Segurança e de reuniões regulares sobre o assunto?', created_at: new Date(), updated_at: new Date() },
      { form_id: 2, question_category_id: 102, question: 'Há outras evidências da existência do Comitê de Segurança e de reuniões regulares sobre o assunto?', created_at: new Date(), updated_at: new Date() },
      
      
      { form_id: 2, question_category_id: 103, question: 'A SI faz parte do cotidiano de todas as áreas da empresa? Isso é fiscalizado ou reafirmado de alguma forma? Quem faz isso? ', created_at: new Date(), updated_at: new Date() },
      { form_id: 2, question_category_id: 103, question: 'A alta gestão cobra que operações integrem no dia a dia a estratégia de SI ou o SGSI?', created_at: new Date(), updated_at: new Date() },
      
      
      { form_id: 2, question_category_id: 104, question: 'Estão disponíveis os recursos necessários, fornecidos pela alta direção, para o sistema de gestão da segurança da informação?', created_at: new Date(), updated_at: new Date() },
      { form_id: 2, question_category_id: 104, question: 'O processo de solicitação e aprovação tem alguma documentação?', created_at: new Date(), updated_at: new Date() },
      
      
      { form_id: 2, question_category_id: 105, question: 'Como a importância da gestão eficaz da segurança da informação é comunicada a todos os colaboradores internos?', created_at: new Date(), updated_at: new Date() },
      { form_id: 2, question_category_id: 105, question: 'Existem canais de comunicação específicos, como e-mails, intranet, avisos físicos, onde as informações de SI são disponibilizadas? E como a ciente é registrada? No processo de onboarding, há treinamento que aborda regras e recomendações de SGSI para novos colaboradores? É informado a eles e registrada a ciência/assinatura?', created_at: new Date(), updated_at: new Date() },
      
      
      { form_id: 2, question_category_id: 106, question: 'A alta direção acompanha o avanço do sistema de gestão da segurança da informação para garantir que alcance seus resultados pretendidos? Há documentação desse acompanhamento, como registros de testes, métricas, planos de ação, tratamento de problemas de SI, etc.? A organização possui uma área de auditoria interna ou terceirizada que acompanha esse processo de acompanhamento e avaliação do sistema de gestão de segurança da informação? Há evidências desse acompanhamento, como trocas de e-mails ou documentação?', created_at: new Date(), updated_at: new Date() },
      { form_id: 2, question_category_id: 106, question: 'Há documentação desse acompanhamento, como registros de testes, métricas, planos de ação, tratamento de problemas de SI, etc.? A organização possui uma área de auditoria interna ou terceirizada que acompanha esse processo de acompanhamento e avaliação do sistema de gestão de segurança da informação? Há evidências desse acompanhamento, como trocas de e-mails ou documentação?', created_at: new Date(), updated_at: new Date() },
      
      
      { form_id: 2, question_category_id: 107, question: 'A organização possui processos específicos de orientação para o pessoal ligado à gestão, como processo de onboarding, programa de conscientização, canal de dúvidas, palestras, campanhas de phishing e pessoas responsáveis nos times para orientar os novos colaboradores? ', created_at: new Date(), updated_at: new Date() },
      
      { form_id: 2, question_category_id: 108, question: 'A melhoria contínua está prevista na política de segurança da informação (PSI), sistema de gestão da segurança da informação (SGSI) ou em outra documentação, e há parâmetros definidos, métricas, metas e um processo de avaliação específico para a melhoria contínua? ', created_at: new Date(), updated_at: new Date() },
      { form_id: 2, question_category_id: 108, question: 'A organização verifica e avalia a melhoria contínua, seguindo uma frequência contínua? ', created_at: new Date(), updated_at: new Date() },
      { form_id: 2, question_category_id: 108, question: 'O processo de melhoria contínua segue o ciclo do PDCA (planejar, fazer, avaliar, agir)?', created_at: new Date(), updated_at: new Date() },
      
      
      { form_id: 2, question_category_id: 109, question: 'A alta gestão apoia os outros papéis relevantes de gestão como lideranças de suas áreas e responsáveis por SI nelas? E', created_at: new Date(), updated_at: new Date() },
      { form_id: 2, question_category_id: 109, question: 'Existem reuniões, e-mail, metas de gestão, reunião de gestão com área comercial, discutem as métricas de melhoria contínua? ', created_at: new Date(), updated_at: new Date() },
      { form_id: 2, question_category_id: 109, question: 'Tem Matriz de Risco e de Função (como matriz RACI e/ou RBAC): documentação que organize os cargos, responsabilidades, quem deve ser comunicado sobre o quê?', created_at: new Date(), updated_at: new Date() },
      
      
      { form_id: 2, question_category_id: 110, question: 'A PSI está de acordo com o propósito da organização? ', created_at: new Date(), updated_at: new Date() },
      { form_id: 2, question_category_id: 110, question: 'A PSI está datada, versionada, atualizada? Quando foi a última atualização?', created_at: new Date(), updated_at: new Date() },
      
      { form_id: 2, question_category_id: 111, question: 'Os objetivos de SI estão estabelecidos na PSI?', created_at: new Date(), updated_at: new Date() },

      //////////
      { form_id: 2, question_category_id: 112, question: 'A documentação declara a melhoria contínua, como carta da alta direção, PSI assinada, requisitos de implementação e melhorias do SGSI, requisitos legais ou regulatórios, requisitos de clientes, requisitos internos?', created_at: new Date(), updated_at: new Date() },
      

      ///////////////
      { form_id: 2, question_category_id: 113, question: 'A PSI possui controles para medir, monitorar, gerar lições aprendidas e melhorar continuamente o SGSI?', created_at: new Date(), updated_at: new Date() },
      
      { form_id: 2, question_category_id: 114, question: 'A PSI está documentada? ', created_at: new Date(), updated_at: new Date() },
      { form_id: 2, question_category_id: 114, question: 'O documento é revisado com alguma frequência definida?', created_at: new Date(), updated_at: new Date() },
      
      
      { form_id: 2, question_category_id: 115, question: 'A PSI foi comunicada de alguma maneira dentro da organização? Como é esse processo de comunicação?', created_at: new Date(), updated_at: new Date() },
      
      
      { form_id: 2, question_category_id: 116, question: 'A PSI está disponível e comunicada para as partes interessadas, como terceiros, clientes stakeholders e etc?', created_at: new Date(), updated_at: new Date() },
     
      { form_id: 2, question_category_id: 117, question: 'As funções e responsabilidades a respeito da segurança da informação foram definidas e atribuídas aos indivíduos de maneira formal e documentada pela Alta Direção? Essas funções e responsabilidades foram devidamente comunicadas pela Alta Direção a todos os funcionários, contratados e terceirizados? Existe um responsável por assegurar que o SGSI esteja em conformidade com os requisitos da ISO 27001?', created_at: new Date(), updated_at: new Date() },
      { form_id: 2, question_category_id: 117, question: 'Essas funções e responsabilidades foram devidamente comunicadas pela Alta Direção a todos os funcionários, contratados e terceirizados?', created_at: new Date(), updated_at: new Date() },
      { form_id: 2, question_category_id: 117, question: 'Existe um responsável por assegurar que o SGSI esteja em conformidade com os requisitos da ISO 27001?', created_at: new Date(), updated_at: new Date() },
      
      
      { form_id: 2, question_category_id: 118, question: 'É designado um (ou mais) resposnsável por relatar sobre o desempenho do SGSI para a Alta Direção? Existe um planejamento para atender aos requisitos e objetivos de segurança da informação, abordando riscos (fatores que podem atrapalhar os planos) e oportunidades (melhorias potenciais)? As partes interessadas e seus interesses são considerados na verificação dos riscos, oportunidades, definição de objetivos e planos de ação no SGSI? Existe um planejamento para abordar/tratar estes riscos e oportunidades? Os riscos e oportunidades são desdobrados no planejamento de objetivos de SI para o próximo ciclo e em planos de ação?', created_at: new Date(), updated_at: new Date() },
      //////////


      { form_id: 2, question_category_id: 119, question: 'Existe um planejamento para atender aos requisitos e objetivos de segurança da informação, abordando riscos (fatores que podem atrapalhar os planos) e oportunidades (melhorias potenciais)?', created_at: new Date(), updated_at: new Date() },
 
      { form_id: 2, question_category_id: 120, question: 'As partes interessadas e seus interesses são considerados na verificação dos riscos, oportunidades, definição de objetivos e planos de ação no SGSI?', created_at: new Date(), updated_at: new Date() },
  
      { form_id: 2, question_category_id: 121, question: 'Existe um planejamento para abordar/tratar estes riscos e oportunidades? ', created_at: new Date(), updated_at: new Date() },

      { form_id: 2, question_category_id: 122, question: 'Os riscos e oportunidades são desdobrados no planejamento de objetivos de SI para o próximo ciclo e em planos de ação?', created_at: new Date(), updated_at: new Date() },
      
      { form_id: 2, question_category_id: 123, question: 'A organização planeja a integração e implementação de ações no seu sistema de gestão da segurança da informação?', created_at: new Date(), updated_at: new Date() },
      { form_id: 2, question_category_id: 123, question: 'A organização planeja a avaliação de eficácia dessas ações?', created_at: new Date(), updated_at: new Date() },
      
      
      { question: 'Existe uma política de gestão de riscos?', form_id: 2, question_category_id: 124, created_at: new Date(), updated_at: new Date() },
      { question: 'Existe um processo de avaliação e classificação de riscos de segurança da informação estabelecido? ', form_id: 2, question_category_id: 124, created_at: new Date(), updated_at: new Date() },
      
      
      { question: 'A organização possui um processo de classificação de riscos e critérios de aceitação de risco definidos, considerando tanto risco inerente quanto risco residual?', form_id: 2, question_category_id: 125, created_at: new Date(), updated_at: new Date() },
      { question: 'São definidos os critérios de aceitação de risco, e quais fatores são considerados nessa definição?', form_id: 2, question_category_id: 125, created_at: new Date(), updated_at: new Date() },
      { question: 'A organização avalia os riscos em relação aos critérios de aceitação, monitora e revisa esses critérios?', form_id: 2, question_category_id: 125, created_at: new Date(), updated_at: new Date() },
      { question: 'Os critérios de aceitação de risco estão alinhados com os objetivos de negócio, são documentados, comunicados, tratam riscos não conformes e garantem a melhoria contínua?', form_id: 2, question_category_id: 125, created_at: new Date(), updated_at: new Date() },
      
      
      { question: 'Como são definidos os critérios de avaliação de segurança da informação?', form_id: 2, question_category_id: 126, created_at: new Date(), updated_at: new Date() },
      { question: 'Existe uma metodologia utilizada para avaliação de riscos de segurança da informação?', form_id: 2, question_category_id: 126, created_at: new Date(), updated_at: new Date() },
      
      
      { question: 'O processo de avaliação de riscos de segurança da informação assegura que as contínuas avaliações de riscos de segurança da informação produzam resultados comparáveis, válidos e consistentes?', form_id: 2, question_category_id: 127, created_at: new Date(), updated_at: new Date() },
      
      { question: 'São identificados e priorizados os riscos de segurança da informação na sua organização, levando em consideração seus ativos de informação e as ameaças que podem afetá-los?', form_id: 2, question_category_id: 128, created_at: new Date(), updated_at: new Date() },
      
      { question: 'É aplicado processo de avaliação do risco de segurança da informação para identificar os riscos associados com a perda de confidencialidade, integridade e disponibilidade da informação dentro do escopo do sistema de gestão da segurança da informação da organização?', form_id: 2, question_category_id: 129, created_at: new Date(), updated_at: new Date() },
      
      { question: 'Os proprietários dos riscos de segurança da informação na sua organização estão designados? ', form_id: 2, question_category_id: 130, created_at: new Date(), updated_at: new Date() },
      
      { question: 'É realizada a análise de riscos de segurança da informação na sua organização, considerando as vulnerabilidades identificadas, a probabilidade e impacto dos riscos e a necessidade de implementação de controles de segurança adequados?', form_id: 2, question_category_id: 131, created_at: new Date(), updated_at: new Date() },
      
      { question: 'Há uma avaliação de potenciais consequenciais que podem resultar no caso dos riscos identificados serem materializados? Como é feita essa avaliação (é periódica, como é formalizada e registrada)?', form_id: 2, question_category_id: 132, created_at: new Date(), updated_at: new Date() },
      
      { question: 'A organização realiza uma avaliação de probabilidade de ocorrência dos riscos levantados?', form_id: 2, question_category_id: 133, created_at: new Date(), updated_at: new Date() },
      
      { question: 'Existe uma norma de gestão de risco?', form_id: 2, question_category_id: 134, created_at: new Date(), updated_at: new Date() },
      { question: 'É realizada classificação dos riscos de acordo com seu respectivo procedimento? ', form_id: 2, question_category_id: 134, created_at: new Date(), updated_at: new Date() },
      { question: 'Este procedimento está devidamente formalizado?', form_id: 2, question_category_id: 134, created_at: new Date(), updated_at: new Date() },
     
      { question: 'Os riscos são avaliados, considerando sua identificação, causa raiz, cenário e descrição?', form_id: 2, question_category_id: 135, created_at: new Date(), updated_at: new Date() },
      
      { question: 'A organização realiza a comparação da análise dos riscos com os critérios de risco estabelecidos?', form_id: 2, question_category_id: 136, created_at: new Date(), updated_at: new Date() },
      
      { question: 'O tramento dos riscos é priorizado de acordo com a sua classificação?', form_id: 2, question_category_id: 137, created_at: new Date(), updated_at: new Date() },
      
      { question: 'Esse processo gera informação documentada?', form_id: 2, question_category_id: 138, created_at: new Date(), updated_at: new Date() },
      
      { question: 'As opções de tratamento para cada risco são selecionadas considerando as avaliações dos riscos, ou seja, nível, impacto, probabilidade, consequências etc.? ', form_id: 2, question_category_id: 139, created_at: new Date(), updated_at: new Date() },
      { question: 'A opção de aceitar ou reter observa o apetite a risco da empresa? Essa determinação está formalizada na norma de gestão de riscos?', form_id: 2, question_category_id: 139, created_at: new Date(), updated_at: new Date() },
      
      { question: 'Existe algum processo de avaliação ou determinação de pertinência na escolha dos controles de segurança a serem aplicados para tratar os riscos? ', form_id: 2, question_category_id: 140, created_at: new Date(), updated_at: new Date() },
      { question: 'É considerado que efeito o controle terá sobre a probabilidade e o impacto dos riscos? É considerado de que maneira o controle mantém o nível de risco pretendido?', form_id: 2, question_category_id: 140, created_at: new Date(), updated_at: new Date() },
      
      { question: 'É feita a verificação de que todos os controles necessários foram considerados, tendo por base o anexo A da ISO?s', form_id: 2, question_category_id: 141, created_at: new Date(), updated_at: new Date() },
      
      { question: 'A organização realiza a declaração de aplicabilidade?', form_id: 2, question_category_id: 142, created_at: new Date(), updated_at: new Date() },
      
      { question: 'A organização elabora um plano de tratamento dos riscos?', form_id: 2, question_category_id: 143, created_at: new Date(), updated_at: new Date() },
      { question: 'São indicados prazos, medidas, ações, controles e proprietários dos riscos?', form_id: 2, question_category_id: 143, created_at: new Date(), updated_at: new Date() },
      
      { question: 'As opções escolhidas para tratamento dos riscos são aprovadas pelos respectivos proprietários?', form_id: 2, question_category_id: 144, created_at: new Date(), updated_at: new Date() },
      { question: 'Os riscos residuais são formalmente aceitos pelos proprietários dos riscos?', form_id: 2, question_category_id: 144, created_at: new Date(), updated_at: new Date() },
      
      { question: 'Todas as documentações são armazenadas e documentadas, demonstrando a recorrência de sua realização e dos ciclos de gestão?', form_id: 2, question_category_id: 145, created_at: new Date(), updated_at: new Date() },
      
      { question: 'Os objetivos de segurança estão alinhados com as estratégias e diretrizes de segurança estabelecidos da PSI da organização?', form_id: 2, question_category_id: 146, created_at: new Date(), updated_at: new Date() },
      
      { question: 'Os objetivos estabelecidos são mensuráveis? Possuem métricas? Alguma forma quantitativa de controle? Ex.: OKRs, KPIs, metas etc.', form_id: 2, question_category_id: 147, created_at: new Date(), updated_at: new Date() },
      
      { question: 'Os objetivos de SI levam em consideração os requisitos de segurança aplicáveis a organização (legais, contratuais, regulamentares, fos frameworks como ISO)? ', form_id: 2, question_category_id: 148, created_at: new Date(), updated_at: new Date() },
      { question: 'Os objetivos de SI consideram os resultados do processo de gestão de risco da organização?', form_id: 2, question_category_id: 148, created_at: new Date(), updated_at: new Date() },
      
      { question: 'Os objetivos de SI são monitorados? Como?', form_id: 2, question_category_id: 149, created_at: new Date(), updated_at: new Date() },
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
