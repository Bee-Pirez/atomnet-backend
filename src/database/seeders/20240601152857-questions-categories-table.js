'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('question_categories', [
      {
        category: '4 Contexto da organização',
        control: '4.1 - Entendendo a organização e seu contexto',
        description: 'A organização deve determinar as questões internas e externas que são relevantes para o seu propósito e que afetam sua capacidade de alcançar os resultados pretendidos do seu sistema de gestão da segurança da informação.',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        category: '4 Contexto da organização',
        control: '4.2 (a) - Entendendo as necessidades e as expectativas das partes interessadas',
        description: 'A organização deve determinar: As partes interessadas que são relevantes para o sistema de gestão da segurança da informação.',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        category: '4 Contexto da organização',
        control: '4.2 (b) - Entendendo as necessidades e as expectativas das partes interessadas',
        description: 'A organização deve determinar: Os requisitos relevantes dessas partes interessadas.',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        category: '4 Contexto da organização',
        control: '4.2 (c) - Entendendo as necessidades e as expectativas das partes interessadas',
        description: 'A organização deve determinar: Quais desses requisitos serão endereçados pelo sistema de gestão da segurança da informação.',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        category: '4 Contexto da organização',
        control: '4.3 (a) - Determinando o escopo do sistema de gestão da segurança da informação',
        description: 'A organização deve determinar os limites e a aplicabilidade do sistema de gestão da segurança da informação para estabelecer o seu escopo. Ao determinar este escopo, a organização deve considerar: As questões internas e externas referenciadas em 4.1;',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        category: '4 Contexto da organização',
        control: '4.3 (b) - Determinando o escopo do sistema de gestão da segurança da informação',
        description: 'A organização deve determinar os limites e a aplicabilidade do sistema de gestão da segurança da informação para estabelecer o seu escopo. Ao determinar este escopo, a organização deve considerar: Os requisitos referenciados em 4.2;',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        category: '4 Contexto da organização',
        control: '4.3 (c) - Determinando o escopo do sistema de gestão da segurança da informação',
        description: 'A organização deve determinar os limites e a aplicabilidade do sistema de gestão da segurança da informação para estabelecer o seu escopo. Ao determinar este escopo, a organização deve considerar: As interfaces e dependências entre as atividades desempenhadas pela organização e aquelas que são desempenhadas por outras organizações.',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        category: '4 Contexto da organização',
        control: '4.4 - Sistema de gestão da segurança da informação',
        description: 'A organização deve estabelecer, implementar, manter e melhorar continuamente um sistema de gestão da segurança da informação, incluindo os processos necessários e suas interações, de acordo com os requisitos deste documento.',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        category: '5 Lideranca',
        control: '5.1 (a) - Liderança e comprometimento',
        description: 'A Alta Direção deve demonstrar sua liderança e comprometimento em relação ao sistema de gestão da segurança da informação pelos seguintes meios: Assegurando que a política de segurança da informação e os objetivos de segurança da informação estejam estabelecidos e sejam compatíveis com a direção estratégica da organização;',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        category: '5 Lideranca',
        control: '5.1 (b) - Liderança e comprometimento',
        description: 'A Alta Direção deve demonstrar sua liderança e comprometimento em relação ao sistema de gestão da segurança da informação pelos seguintes meios: Assegurando a integração dos requisitos do sistema de gestão da segurança da informação nos processos da organização;',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        category: '5 Lideranca',
        control: '5.1 (c) - Liderança e comprometimento',
        description: 'A Alta Direção deve demonstrar sua liderança e comprometimento em relação ao sistema de gestão da segurança da informação pelos seguintes meios: Assegurando que os recursos necessários para o sistema de gestão da segurança da informação estejam disponíveis;',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        category: '5 Lideranca',
        control: '5.1 (d) - Liderança e comprometimento',
        description: 'A Alta Direção deve demonstrar sua liderança e comprometimento em relação ao sistema de gestão da segurança da informação pelos seguintes meios: Comunicando a importância de uma gestão eficaz da segurança da informação e da conformidade com os requisitos do sistema de gestão da segurança da informação;',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        category: '5 Lideranca',
        control: '5.1 (e) - Liderança e comprometimento',
        description: 'A Alta Direção deve demonstrar sua liderança e comprometimento em relação ao sistema de gestão da segurança da informação pelos seguintes meios: Assegurando que o sistema de gestão da segurança da informação alcance seus resultados pretendidos;',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        category: '5 Lideranca',
        control: '5.1 (f) - Liderança e comprometimento',
        description: 'A Alta Direção deve demonstrar sua liderança e comprometimento em relação ao sistema de gestão da segurança da informação pelos seguintes meios: Orientando e apoiando pessoas a contribuir para a eficácia do sistema de gestão da segurança da informação;',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        category: '5 Lideranca',
        control: '5.1 (g) - Liderança e comprometimento',
        description: 'A Alta Direção deve demonstrar sua liderança e comprometimento em relação ao sistema de gestão da segurança da informação pelos seguintes meios: Promovendo a melhoria contínua;',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        category: '5 Lideranca',
        control: '5.1 (h) - Liderança e comprometimento',
        description: 'A Alta Direção deve demonstrar sua liderança e comprometimento em relação ao sistema de gestão da segurança da informação pelos seguintes meios: Apoiando outros papéis relevantes da gestão para demonstrar como sua liderança se aplica às áreas sob sua responsabilidade.',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        category: '5 Lideranca',
        control: '5.2 (a) - Política',
        description: 'A Alta Direção deve estabelecer uma política de segurança da informação que: Seja apropriada ao propósito da organização;',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        category: '5 Lideranca',
        control: '5.2 (b) - Política',
        description: 'A Alta Direção deve estabelecer uma política de segurança da informação que: Inclua os objetivos de segurança da informação (ver 6.2) ou forneça a estrutura para estabelecer os objetivos de segurança da informação;',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        category: '5 Lideranca',
        control: '5.2 (c) - Política',
        description: 'A Alta Direção deve estabelecer uma política de segurança da informação que: Inclua o comprometimento de satisfazer os requisitos aplicáveis, relacionados com a segurança da informação;',
        created_at: new Date(),
        updated_at: new Date()
      },

      //
      {
        category: '5 Lideranca',
        control: '5.2 (d) - Política',
        description: 'A Alta Direção deve estabelecer uma política de segurança da informação que: \n\nInclua o comprometimento com a melhoria contínua do sistema de gestão da segurança da informação.',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        category: '5 Lideranca',
        control: '5.2 (e) - Política',
        description: 'A política da segurança da informação deve: \n\nEstar disponível como informação documentada;',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        category: '5 Lideranca',
        control: '5.2 (f) - Política',
        description: 'A política da segurança da informação deve: \n\nSer comunicada dentro da organização;',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        category: '5 Lideranca',
        control: '5.2 (g) - Política',
        description: 'A política da segurança da informação deve: \n\nEstar disponível para as partes interessadas, conforme apropriado.',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        category: '5 Lideranca',
        control: '5.3 (a) - Papéis, responsabilidades e autoridades organizacionais',
        description: 'A Alta Direção deve assegurar que as responsabilidades e autoridades dos papéis relevantes para a segurança da informação sejam atribuídos e comunicados dentro da organização. \n\nA Alta Direção deve atribuir a responsabilidade e autoridade para: \n\nAssegurar que o sistema de gestão da segurança da informação esteja em conformidade com os requisitos deste documento;',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        category: '5 Lideranca',
        control: '5.3 (b) - Papéis, responsabilidades e autoridades organizacionais',
        description: 'A Alta Direção deve assegurar que as responsabilidades e autoridades dos papéis relevantes para a segurança da informação sejam atribuídos e comunicados dentro da organização. \n\nA Alta Direção deve atribuir a responsabilidade e autoridade para: \n\nRelatar sobre o desempenho do sistema de gestão da segurança da informação para a Alta Direção.',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        category: '6 Planejamento',
        control: '6.1.1 (a) -  Ações para abordar riscos e oportunidades',
        description: 'Ao  planejar  o  sistema  de  gestão  da  segurança  da  informação,  a  organização  deve  considerar as  questões  referenciadas  em  4.1  e  os  requisitos  estabelecidos  em  4.2,  e  determinar  os  riscos e oportunidades que precisam ser abordados para: \n\nAssegurar que o sistema de gestão da segurança da informação pode alcançar seus resultados pretendidos;',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        category: '6 Planejamento',
        control: '6.1.1 (b) -  Ações para abordar riscos e oportunidades',
        description: 'Ao  planejar  o  sistema  de  gestão  da  segurança  da  informação,  a  organização  deve  considerar as  questões  referenciadas  em  4.1  e  os  requisitos  estabelecidos  em  4.2,  e  determinar  os  riscos e oportunidades que precisam ser abordados para: \n\nPrevenir ou reduzir os efeitos indesejados; e',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        category: '6 Planejamento',
        control: '6.1.1 (c) -  Ações para abordar riscos e oportunidades',
        description: 'Ao  planejar  o  sistema  de  gestão  da  segurança  da  informação,  a  organização  deve  considerar as  questões  referenciadas  em  4.1  e  os  requisitos  estabelecidos  em  4.2,  e  determinar  os  riscos e oportunidades que precisam ser abordados para:\n\n Alcançar a melhoria contínua.',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        category: '6 Planejamento',
        control: '6.1.1 (d) -  Ações para abordar riscos e oportunidades',
        description: 'A organização deve planejar:\n\nAs ações para abordar estes riscos e oportunidades;',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        category: '6 Planejamento',
        control: '6.1.1 (e) -  Ações para abordar riscos e oportunidades',
        description: 'A organização deve planejar como:\n\n1) integrar e implementar as ações dentro dos processos do seu sistema de gestão da segurança da informação; e\n\n2) avaliar a eficácia destas ações.',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        category: '6 Planejamento',
        control: '6.1.2 (a) - Avaliação de riscos de segurança da informação',
        description: 'A organização deve estabelecer e aplicar um processo de avaliação de riscos de segurança da informação que:\n\nEstabeleça e mantenha critérios de riscos de segurança da informação que incluam:',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        category: '6 Planejamento',
        control: '6.1.2 (a.1) - Avaliação de riscos de segurança da informação',
        description: 'A organização deve estabelecer e aplicar um processo de avaliação de riscos de segurança da informação que:\n\nEstabeleça e mantenha critérios de riscos de segurança da informação que incluam:\n\n Critérios de aceitação do risco;',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        category: '6 Planejamento',
        control: '6.1.2 (a.2) - Avaliação de riscos de segurança da informação',
        description: 'A organização deve estabelecer e aplicar um processo de avaliação de riscos de segurança da informação que:\n\nEstabeleça e mantenha critérios de riscos de segurança da informação que incluam:\n\nInclua critérios para realizar as avaliações de risco de segurança da informação;',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        category: '6 Planejamento',
        control: '6.1.2 (b) - Avaliação de riscos de segurança da informação',
        description: 'A organização deve estabelecer e aplicar um processo de avaliação de riscos de segurança da informação que:\n\nAssegure que as contínuas avaliações de riscos de segurança da informação produzam resultados comparáveis, válidos e consistentes;',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        category: '6 Planejamento',
        control: '6.1.2 (c) - Avaliação de riscos de segurança da informação',
        description: 'A organização deve estabelecer e aplicar um processo de avaliação de riscos de segurança da informação que:\n\nIdentifique os riscos de segurança da informação:',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        category: '6 Planejamento',
        control: '6.1.2 (c.1) - Avaliação de riscos de segurança da informação',
        description: 'A organização deve estabelecer e aplicar um processo de avaliação de riscos de segurança da informação que:\n\nIdentifique os riscos de segurança da informação:\n\nAplicando o processo de avaliação do risco de segurança da informação para identificar os riscos associados com a perda de confidencialidade, integridade e disponibilidade da informação dentro do escopo do sistema de gestão da segurança da informação;',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        category: '6 Planejamento',
        control: '6.1.2 (c.2) - Avaliação de riscos de segurança da informação',
        description: 'A organização deve estabelecer e aplicar um processo de avaliação de riscos de segurança da informação que:\n\nIdentifique os riscos de segurança da informação:\n\nIdentificando os proprietários dos riscos.',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        category: '6 Planejamento',
        control: '6.1.2 (d) - Avaliação de riscos de segurança da informação',
        description: 'A organização deve estabelecer e aplicar um processo de avaliação de riscos de segurança da informação que:\n\nAnalise os riscos de segurança da informação:',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        category: '6 Planejamento',
        control: '6.1.2 (d.1) - Avaliação de riscos de segurança da informação',
        description: 'A organização deve estabelecer e aplicar um processo de avaliação de riscos de segurança da informação que:\n\nAnalise os riscos de segurança da informação:\n\nAvaliando as consequências potenciais que podem resultar se os riscos identificados em 6.1.2 c) 1) forem materializados;',
        created_at: new Date(),
        updated_at: new Date()
      },

      //
      {
        category: '6 Planejamento',
        control: '6.1.2 (d.2) - Avaliação de riscos de segurança da informação',
        description: `A organização deve estabelecer e aplicar um processo de avaliação de riscos de segurança da informação que:Analise os riscos de segurança da informação:Avaliando a probabilidade realística da ocorrência dos riscos identificados em 6.1.2 c) 1); e`,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        category: '6 Planejamento',
        control: '6.1.2 (d.3) - Avaliação de riscos de segurança da informação',
        description: 'A organização deve estabelecer e aplicar um processo de avaliação de riscos de segurança da informação que: determinando os níveis de risco;',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        category: '6 Planejamento',
        control: '6.1.2 (e) - Avaliação de riscos de segurança da informação',
        description: `A organização deve estabelecer e aplicar um processo de avaliação de riscos de segurança da informação que: Avalie os riscos de segurança da informação:`,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        category: '6 Planejamento',
        control: '6.1.2 (e.1) - Avaliação de riscos de segurança da informação',
        description: `A organização deve estabelecer e aplicar um processo de avaliação de riscos de segurança da informação que: Avalie os riscos de segurança da informação: Comparando os resultados da análise de riscos com os critérios de riscos estabelecidos em 6.1.2 a); e`,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        category: '6 Planejamento',
        control: '6.1.2 (e.2) - Avaliação de riscos de segurança da informação',
        description: `A organização deve estabelecer e aplicar um processo de avaliação de riscos de segurança da informação que: Avalie os riscos de segurança da informação:Priorizando os riscos analisados para o tratamento do risco.`,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        category: '6 Planejamento',
        control: 'x - Avaliação de riscos de segurança da informação',
        description: 'A organização deve estabelecer e aplicar um processo de avaliação de riscos de segurança da informação que: A organização deve reter informação documentada sobre o processo de avaliação de riscos da segurança da informação.',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        category: '6 Planejamento',
        control: '6.1.3 (a) - Tratamento de riscos da segurança da informação',
        description: `A organização deve estabelecer e aplicar um processo de tratamento de riscos da segurança da informação para: Selecionar, de forma apropriada, as opções de tratamento dos riscos da segurança da informação, levando em consideração os resultados da avaliação de riscos;`,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        category: '6 Planejamento',
        control: '6.1.3 (b) - Tratamento de riscos da segurança da informação',
        description: `A organização deve estabelecer e aplicar um processo de tratamento de riscos da segurança da informação para: Determinar todos os controles que são necessários para implementar as opções escolhidas do tratamento de riscos da segurança da informação.`,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        category: '6 Planejamento',
        control: '6.1.3 (c) - Tratamento de riscos da segurança da informação',
        description: `A organização deve estabelecer e aplicar um processo de tratamento de riscos da segurança da informação para: Comparar os controles determinados em 6.1.3 b) com aqueles do Anexo A e verificar se nenhum controle necessário foi omitido;`,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        category: '6 Planejamento',
        control: '6.1.3 (d) - Tratamento de riscos da segurança da informação',
        description: `A organização deve estabelecer e aplicar um processo de tratamento de riscos da segurança da informação para: Elaborar uma Declaração de Aplicabilidade que contenha:— os controles necessários (ver 6.1.3 b) e c)); — a justificativa para inclusões; — se os controles necessários são implementados ou não; e — a justificativa para a exclusão de quaisquer controles do Anexo A.`,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        category: '6 Planejamento',
        control: '6.1.3 (e) - Tratamento de riscos da segurança da informação',
        description: `A organização deve estabelecer e aplicar um processo de tratamento de riscos da segurança da informação para:  Preparar um plano para tratamento de riscos da segurança da informação;`,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        category: '6 Planejamento',
        control: '6.1.3 (f) - Tratamento de riscos da segurança da informação',
        description: `A organização deve estabelecer e aplicar um processo de tratamento de riscos da segurança da informação para: Obter a aprovação dos proprietários dos riscos do plano de tratamento de riscos da segurança da informação e a aceitação dos riscos residuais de segurança da informação.`,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        category: '6 Planejamento',
        control: 'x - Tratamento de riscos da segurança da informação',
        description: 'A organização deve reter a informação documentada relativa ao processo de tratamento de riscos da segurança da informação.',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        category: '6 Planejamento',
        control: '6.2 (a) - Objetivos da segurança da informação e planejamento para alcançá-los',
        description: `A organização deve estabelecer os objetivos da segurança da informação para as funções e níveis relevantes. Os objetivos da segurança da informação devem: Ser consistentes com a política da segurança da informação;`,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        category: '6 Planejamento',
        control: '6.2 (b) - Objetivos da segurança da informação e planejamento para alcançá-los',
        description: `A organização deve estabelecer os objetivos da segurança da informação para as funções e níveis relevantes. Os objetivos da segurança da informação devem: Ser mensuráveis (quando aplicável);`,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        category: '6 Planejamento',
        control: '6.2 (c) - Objetivos da segurança da informação e planejamento para alcançá-los',
        description: `A organização deve estabelecer os objetivos da segurança da informação para as funções e níveis relevantes. Os objetivos da segurança da informação devem: Levar em conta os requisitos da segurança da informação aplicáveis e os resultados da avaliação e tratamento de riscos;`,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        category: '6 Planejamento',
        control: '6.2 (d) - Objetivos da segurança da informação e planejamento para alcançá-los',
        description: `A organização deve estabelecer os objetivos da segurança da informação para as funções e níveis relevantes. Os objetivos da segurança da informação devem: Ser monitorados;`,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        category: '6 Planejamento',
        control: '6.2 (e) - Objetivos da segurança da informação e planejamento para alcançá-los',
        description: `A organização deve estabelecer os objetivos da segurança da informação para as funções e níveis relevantes. Os objetivos da segurança da informação devem: Ser comunicados;`,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        category: '6 Planejamento',
        control: '6.2 (f) - Objetivos da segurança da informação e planejamento para alcançá-los',
        description: `A organização deve estabelecer os objetivos da segurança da informação para as funções e níveis relevantes. Os objetivos da segurança da informação devem: Ser atualizados, conforme apropriado;`,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        category: '6 Planejamento',
        control: '6.2 (g) - Objetivos da segurança da informação e planejamento para alcançá-los',
        description: `A organização deve estabelecer os objetivos da segurança da informação para as funções e níveis relevantes. Os objetivos da segurança da informação devem: Ser disponibilizados como informação documentada.`,
        created_at: new Date(),
        updated_at: new Date()
      },

      //
      {
        category: '6 Planejamento',
        control: '6.2 (h) - Objetivos da segurança da informação e planejamento para alcançá-los',
        description: 'A organização deve reter informação documentada dos objetivos da segurança da informação. Ao planejar como alcançar os seus objetivos da segurança da informação, a organização deve determinar: O que será feito;',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        category: '6 Planejamento',
        control: '6.2 (i) - Objetivos da segurança da informação e planejamento para alcançá-los',
        description: 'A organização deve reter informação documentada dos objetivos da segurança da informação. Ao planejar como alcançar os seus objetivos da segurança da informação, a organização deve determinar: Quais recursos serão necessários;',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        category: '6 Planejamento',
        control: '6.2 (j) - Objetivos da segurança da informação e planejamento para alcançá-los',
        description: 'A organização deve reter informação documentada dos objetivos da segurança da informação. Ao planejar como alcançar os seus objetivos da segurança da informação, a organização deve determinar: Quem será responsável;',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        category: '6 Planejamento',
        control: '6.2 (k) - Objetivos da segurança da informação e planejamento para alcançá-los',
        description: 'A organização deve reter informação documentada dos objetivos da segurança da informação. Ao planejar como alcançar os seus objetivos da segurança da informação, a organização deve determinar: Quando estará concluído;',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        category: '6 Planejamento',
        control: '6.2 (l) - Objetivos da segurança da informação e planejamento para alcançá-los',
        description: 'A organização deve reter informação documentada dos objetivos da segurança da informação. Ao planejar como alcançar os seus objetivos da segurança da informação, a organização deve determinar: Como os resultados serão avaliados.',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        category: '6 Planejamento',
        control: '6.3 - Planejamento de mudanças',
        description: 'Quando a organização determinar as necessidades para as mudanças do sistema de gestão da segurança da informação, estas mudanças devem ser conduzidas de uma forma planejada.',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        category: '7 Apoio',
        control: '7.1 - Recursos',
        description: 'A organização deve determinar e prover recursos necessários para estabelecer, implementar, manter e melhorar continuamente o sistema de gestão da segurança da informação.',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        category: '7 Apoio',
        control: '7.2 (a) - Competência',
        description: 'A organização deve: Determinar a competência necessária da(s) pessoa(s) que realiza(m) trabalho sob o seu controle que afete o desempenho da segurança da informação;',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        category: '7 Apoio',
        control: '7.2 (b) - Competência',
        description: 'A organização deve: Assegurar que essas pessoas são competentes, com base em educação, treinamento ou experiência apropriados;',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        category: '7 Apoio',
        control: '7.2 (c) - Competência',
        description: 'A organização deve: Onde aplicável, tomar ações para adquirir a competência necessária e avaliar a eficácia das ações tomadas; e',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        category: '7 Apoio',
        control: '7.2 (d) - Competência',
        description: 'A organização deve: Reter informação documentada apropriada como evidência da competência.',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        category: '7 Apoio',
        control: '7.3 (a) - Conscientização',
        description: 'Pessoas que realizam trabalho sob o controle da organização devem estar cientes: Da política da segurança da informação;',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        category: '7 Apoio',
        control: '7.3 (b) - Conscientização',
        description: 'Pessoas que realizam trabalho sob o controle da organização devem estar cientes: De suas contribuições para a eficácia do sistema de gestão da segurança da informação, incluindo os benefícios da melhoria do desempenho da segurança da informação; e',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        category: '7 Apoio',
        control: '7.3 (c) - Conscientização',
        description: 'Pessoas que realizam trabalho sob o controle da organização devem estar cientes: Das implicações da não conformidade com os requisitos do sistema de gestão da segurança da informação.',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        category: '7 Apoio',
        control: '7.4 (a) - Comunicação',
        description: 'A organização deve determinar a necessidade de comunicações internas e externas relevantes para o sistema de gestão da segurança da informação, incluindo: O que comunicar;',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        category: '7 Apoio',
        control: '7.4 (b) - Comunicação',
        description: 'A organização deve determinar a necessidade de comunicações internas e externas relevantes para o sistema de gestão da segurança da informação, incluindo: Quando comunicar;',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        category: '7 Apoio',
        control: '7.4 (c) - Comunicação',
        description: 'A organização deve determinar a necessidade de comunicações internas e externas relevantes para o sistema de gestão da segurança da informação, incluindo: Com quem comunicar;',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        category: '7 Apoio',
        control: '7.4 (d) - Comunicação',
        description: 'A organização deve determinar a necessidade de comunicações internas e externas relevantes para o sistema de gestão da segurança da informação, incluindo: Como se comunicar.',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        category: '7 Apoio',
        control: '7.5.1 (a) - Informação documentada',
        description: 'O sistema de gestão da segurança da informação da organização deve incluir: Informação documentada requerida por este documento; e',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        category: '7 Apoio',
        control: '7.5.1 (b) - Informação documentada',
        description: 'O sistema de gestão da segurança da informação da organização deve incluir: Informação documentada determinada pela organização como sendo necessária para a eficácia do sistema de gestão da segurança da informação.',
        created_at: new Date(),
        updated_at: new Date()
      },

      //
      {
        category: '7 Apoio',
        control: '7.5.2 (a) - Criando e atualizando',
        description: 'Ao criar e atualizar a informação documentada, a organização deve assegurar, de forma apropriada:\n\nA identificação e descrição (por exemplo, título, data, autor ou um número de referência);',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        category: '7 Apoio',
        control: '7.5.2 (b) - Criando e atualizando',
        description: 'Ao criar e atualizar a informação documentada, a organização deve assegurar, de forma apropriada:\n\nO formato (por exemplo, linguagem, versão do software, gráficos) e seu meio (por exemplo, papel, eletrônico); e',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        category: '7 Apoio',
        control: '7.5.2 (c) - Criando e atualizando',
        description: 'Ao criar e atualizar a informação documentada, a organização deve assegurar, de forma apropriada:\n\nA análise crítica e aprovação para pertinência e adequação.',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        category: '7 Apoio',
        control: '7.5.3 (a) - Controle da informação documentada',
        description: 'A informação documentada requerida pelo sistema de gestão da segurança da informação e por este documento deve ser controlada para assegurar que:\n\nEsteja disponível e adequada para o uso, onde e quando necessário; e',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        category: '7 Apoio',
        control: '7.5.3 (b) - Controle da informação documentada',
        description: 'A informação documentada requerida pelo sistema de gestão da segurança da informação e por este documento deve ser controlada para assegurar que:\n\nEsteja protegida adequadamente (por exemplo, contra perda de  confidencialidade, uso indevido ou perda de integridade).',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        category: '7 Apoio',
        control: '7.5.3 (c) - Controle da informação documentada',
        description: 'Para o controle da informação documentada, a organização deve considerar as seguintes atividades, conforme aplicável:\n\nA Distribuição, acesso, recuperação e uso;\n\nNOTA: O acesso implica em uma decisão quanto à permissão para apenas ler a informação documentada, ou na permissão e autoridade para ver e alterar a informação documentada, etc.',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        category: '7 Apoio',
        control: '7.5.3 (d) - Controle da informação documentada',
        description: 'Para o controle da informação documentada, a organização deve considerar as seguintes atividades, conforme aplicável:\n\nO armazenamento e preservação, incluindo a preservação da legibilidade;',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        category: '7 Apoio',
        control: '7.5.3 (e) - Controle da informação documentada',
        description: 'Para o controle da informação documentada, a organização deve considerar as seguintes atividades, conforme aplicável:\n\nO controle de mudanças (por exemplo, controle de versão);',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        category: '7 Apoio',
        control: '7.5.3 (f) - Controle da informação documentada',
        description: 'Para o controle da informação documentada, a organização deve considerar as seguintes atividades, conforme aplicável:\n\nA retenção e disposição.',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        category: '7 Apoio',
        control: '7.5.3 (final) - Controle da informação documentada',
        description: 'A informação documentada de origem externa, determinada pela organização como necessária para o planejamento e a operação do sistema de gestão da segurança da informação, deve ser identificada como apropriada e controlada.',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        category: '8 Operação',
        control: '8.1 - Planejamento e controle operacionais',
        description: 'A organização deve planejar, implementar e controlar os processos necessários para atender aos requisitos e para implementar as ações determinadas na Seção 6:\n\n— estabelecendo critérios para os processos;\n— implementando controles dos processos de acordo com os critérios.\n\nA informação documentada deve ser disponibilizada na abrangência necessária para gerar a confiança de que os processos estão sendo realizados conforme planejado.\n\nA organização deve controlar as mudanças planejadas e analisar criticamente as consequências de mudanças não previstas, tomando ações para mitigar quaisquer efeitos adversos, conforme necessário.\n\nA organização deve assegurar que os processos, produtos ou serviços terceirizados que são relevantes para o sistema de gestão da segurança da informação sejam controlados.',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        category: '8 Operação',
        control: '8.2 - Avaliação de riscos da segurança da informação',
        description: 'A organização deve realizar avaliações de riscos da segurança da informação a intervalos planejados, ou quando mudanças significativas forem propostas ou ocorrerem, levando em conta os critérios estabelecidos em 6.1.2 a).\n\nA organização deve reter informação documentada dos resultados das avaliações de riscos da segurança da informação.',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        category: '8 Operação',
        control: '8.3 - Tratamento de riscos da segurança da informação',
        description: 'A organização deve implementar o plano de tratamento de riscos da segurança da informação.\n\nA organização deve reter informação documentada dos resultados do tratamento de riscos da segurança da informação.',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        category: '9 Avalição o de desempenho',
        control: '9.1 (a) - Monitoramento, medição, análise e avaliação',
        description: 'A organização deve determinar:\n\nO que precisa ser monitorado e medido, incluindo controles e processos da segurança da informação;',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        category: '9 Avalição o de desempenho',
        control: '9.1 (b) - Monitoramento, medição, análise e avaliação',
        description: 'A organização deve determinar:\n\nOs métodos para monitoramento, medição, análise e avaliação, conforme aplicável, para assegurar resultados válidos. Convém que os métodos selecionados produzam resultados comparáveis\ne reproduzíveis a serem considerados válidos;',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        category: '9 Avalição o de desempenho',
        control: '9.1 (c) - Monitoramento, medição, análise e avaliação',
        description: 'A organização deve determinar:\n\nQuando o monitoramento e a medição devem ser realizados;',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        category: '9 Avalição o de desempenho',
        control: '9,1 (d) - Monitoramento, medição, análise e avaliação',
        description: 'A organização deve determinar:\n\nQuem deve monitorar e medir;',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        category: '9 Avalição o de desempenho',
        control: '9.1 (e) - Monitoramento, medição, análise e avaliação',
        description: 'A organização deve determinar:\n\nQuando os resultados do monitoramento e da medição devem ser analisados e avaliados;',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        category: '9 Avalição o de desempenho',
        control: '9.1 (f) - Monitoramento, medição, análise e avaliação',
        description: 'A organização deve determinar:\n\nQuem deve analisar e avaliar estes resultados.',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        category: '9 Avalição o de desempenho',
        control: '9.1 (final) - Monitoramento, medição, análise e avaliação',
        description: 'Informação documentada deve ser disponibilizada como evidência dos resultados.\n\nA organização deve avaliar o desempenho da segurança da informação e a eficácia do sistema de gestão da segurança da informação',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        category: '9 Avalição o de desempenho',
        control: '9.2.1 (a) - Auditoria interna',
        description: 'A organização deve conduzir auditorias internas a intervalos planejados para prover informações sobre se o sistema de gestão da segurança da informação:\n\nestá em conformidade com:',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        category: '9 Avalição o de desempenho',
        control: '9.2.1 (a.1) - Auditoria interna',
        description: 'A organização deve conduzir auditorias internas a intervalos planejados para prover informações sobre se o sistema de gestão da segurança da informação:\n\nestá em conformidade com:\n\nOs próprios requisitos da organização para o seu sistema de gestão da segurança da informação;',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        category: '9 Avalição o de desempenho',
        control: '9.2.1 (a.2) - Auditoria interna',
        description: 'A organização deve conduzir auditorias internas a intervalos planejados para prover informações sobre se o sistema de gestão da segurança da informação:\n\nestá em conformidade com:\n\nOs requisitos deste documento;',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        category: '9 Avalição o de desempenho',
        control: '9.2.1 (b) - Auditoria interna',
        description: 'A organização deve conduzir auditorias internas a intervalos planejados para prover informações sobre se o sistema de gestão da segurança da informação:\n\nEstá efetivamente implementado e mantido.',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        category: '9 Avalição o de desempenho',
        control: '9.2.2 (a) - Programa de auditoria interna',
        description: 'A organização deve planejar, estabelecer, implementar e manter programa(s) de auditoria, incluindo frequência, métodos, responsabilidades, requisitos de planejamento e relato.\n\nAo estabelecer programa(s) de auditoria interna, a organização deve considerar a importância dos processos pertinentes e os resultados de auditorias anteriores.\n\nA organização deve:\n\nDefinir os critérios e o escopo da auditoria, para cada auditoria;',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        category: '9 Avalição o de desempenho',
        control: '9.2.2 (b) - Programa de auditoria interna',
        description: 'A organização deve planejar, estabelecer, implementar e manter programa(s) de auditoria, incluindo frequência, métodos, responsabilidades, requisitos de planejamento e relato.\n\nAo estabelecer programa(s) de auditoria interna, a organização deve considerar a importância dos processos pertinentes e os resultados de auditorias anteriores.\n\nA organização deve:\n\nSelecionar auditores e conduzir auditorias que assegurem objetividade e imparcialidade do processo de auditoria;',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        category: '9 Avalição o de desempenho',
        control: '9.2.2 (c) - Programa de auditoria interna',
        description: 'A organização deve planejar, estabelecer, implementar e manter programa(s) de auditoria, incluindo frequência, métodos, responsabilidades, requisitos de planejamento e relato.\n\nAo estabelecer programa(s) de auditoria interna, a organização deve considerar a importância dos processos pertinentes e os resultados de auditorias anteriores.\n\nA organização deve:\n\nAssegurar que os resultados das auditorias sejam relatados para a gestão pertinente.',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        category: '9 Avalição o de desempenho',
        control: 'x - Programa de auditoria interna',
        description: 'Informação documentada deve ser disponibilizada como evidência da implementação do(s) programa(s) de auditoria e dos resultados da auditoria.',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        category: '9 Avalição o de desempenho',
        control: '9.3.1 - Análise crítica pela Direção',
        description: 'A Alta Direção deve analisar criticamente o sistema de gestão da segurança da informação da organização em intervalos planejados, para assegurar a sua contínua adequação, pertinência e eficácia.',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        category: '9 Avalição o de desempenho',
        control: '9.3.2 (a) - Entradas da análise crítica pela Direção',
        description: 'A análise crítica pela Direção deve incluir considerações em relação a:\n\nSituação das ações de análises críticas anteriores pela Direção;',
        created_at: new Date(),
        updated_at: new Date()
      },

      //
      {
        category: '9 Avalição o de desempenho',
        control: '9.3.2 (b) - Entradas da análise crítica pela Direção',
        description: 'A análise crítica pela Direção deve incluir considerações em relação a:\n\nMudanças nas questões internas e externas que sejam relevantes para o sistema de gestão da segurança da informação;',
        created_at: new Date(),
        updated_at: new Date(),
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        category: '9 Avalição o de desempenho',
        control: '9.3.2 (c) - Entradas da análise crítica pela Direção',
        description: 'A análise crítica pela Direção deve incluir considerações em relação a:\n\nMudanças nas necessidades e expectativas das partes interessadas que sejam relevantes para o sistema de gestão da segurança da informação',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        category: '9 Avalição o de desempenho',
        control: '9.3.2 (d) - Entradas da análise crítica pela Direção',
        description: 'A análise crítica pela Direção deve incluir considerações em relação a:\n\nFeedback sobre o desempenho da segurança da informação, incluindo tendências para:',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        category: '9 Avalição o de desempenho',
        control: '9.3.2 (d.1) - Entradas da análise crítica pela Direção',
        description: 'A análise crítica pela Direção deve incluir considerações em relação a:\n\nFeedback sobre o desempenho da segurança da informação, incluindo tendências para:\n\nNão conformidades e ações corretivas;',
        created_at: new Date(),
        updated_at: new Date(),
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        category: '9 Avalição o de desempenho',
        control: '9.3.2 (d.2) - Entradas da análise crítica pela Direção',
        description: 'A análise crítica pela Direção deve incluir considerações em relação a:\n\nFeedback sobre o desempenho da segurança da informação, incluindo tendências para:\n\nResultados da medição e monitoramento;',
        created_at: new Date(),
        updated_at: new Date(),
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        category: '9 Avalição o de desempenho',
        control: '9.3.2 (d.3) - Entradas da análise crítica pela Direção',
        description: 'A análise crítica pela Direção deve incluir considerações em relação a:\n\nFeedback sobre o desempenho da segurança da informação, incluindo tendências para:\n\nResultados de auditorias;',
        created_at: new Date(),
        updated_at: new Date(),
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        category: '9 Avalição o de Desempenho',
        control: '9.3.2 (d.4) - Entradas da análise crítica pela Direção',
        description: 'A análise crítica pela Direção deve incluir considerações em relação a:\n\nFeedback sobre o desempenho da segurança da informação, incluindo tendências para:\n\nCumprimento dos objetivos da segurança da informação;',
        created_at: new Date(),
        updated_at: new Date(),
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        category: '9 Avalição o de Desempenho',
        control: '9.3.2 (e) - Entradas da análise crítica pela Direção',
        description: 'A análise crítica pela Direção deve incluir considerações em relação a:\n\nFeedback das partes interessadas;',
        created_at: new Date(),
        updated_at: new Date(),
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        category: '9 Avalição o de Desempenho',
        control: '9.3.2 (f) - Entradas da análise crítica pela Direção',
        description: 'A análise crítica pela Direção deve incluir considerações em relação a:\n\nResultados da avaliação dos riscos e situação do plano de tratamento de riscos;',
        created_at: new Date(),
        updated_at: new Date(),
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        category: '9 Avalição o de Desempenho',
        control: '9.3.2 (g) - Entradas da análise crítica pela Direção',
        description: 'A análise crítica pela Direção deve incluir considerações em relação a:\n\nOportunidades para a melhoria contínua.',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        category: '9 Avalição o de Desempenho',
        control: '9.3.3 - Resultados da análise crítica pela Direção',
        description: 'Os resultados da análise crítica pela Direção devem incluir decisões relativas às oportunidades para melhoria contínua e quaisquer necessidades de mudanças do sistema de gestão da segurança da informação.\n\nInformação documentada deve ser disponibilizada como evidência dos resultados das análises críticas pela Direção.',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        category: '10 Melhoria',
        control: '10.1 - Melhoria Contínua',
        description: 'A organização deve melhorar continuamente a pertinência, a adequação e a eficácia do sistema de gestão da segurança da informação.',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        category: '10 Melhoria',
        control: '10.2 (a) - Não conformidade e ação corretiva',
        description: 'Quando uma não conformidade ocorre, a organização deve:\n\nReagir à não conformidade e, conforme apropriado:',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        category: '10 Melhoria',
        control: '10.2 (a.1) - Não conformidade e ação corretiva',
        description: 'Quando uma não conformidade ocorre, a organização deve:\n\nReagir à não conformidade e, conforme apropriado:\n\nTomar ações para controlá-la e corrigi-la;',
        created_at: new Date(),
        updated_at: new Date(),
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        category: '10 Melhoria',
        control: '10.2 (a.2) - Não conformidade e ação corretiva',
        description: 'Quando uma não conformidade ocorre, a organização deve:\n\nReagir à não conformidade e, conforme apropriado:\n\nLidar com as consequências;',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        category: '10 Melhoria',
        control: '10.2 (b) - Não conformidade e ação corretiva',
        description: 'Quando uma não conformidade ocorre, a organização deve:\n\nAvaliar a necessidade de ações para eliminar as causas de não conformidade, para evitar sua repetição ou ocorrência em outro lugar, por um dos seguintes meios:',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        category: '10 Melhoria',
        control: '10.2 (b.1) - Não conformidade e ação corretiva',
        description: 'Quando uma não conformidade ocorre, a organização deve:\n\nAvaliar a necessidade de ações para eliminar as causas de não conformidade, para evitar sua repetição ou ocorrência em outro lugar, por um dos seguintes meios:\n\nAnalisando criticamente a não conformidade;',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        category: '10 Melhoria',
        control: '10.2 (b.2) - Não conformidade e ação corretiva',
        description: 'Quando uma não conformidade ocorre, a organização deve:\n\nAvaliar a necessidade de ações para eliminar as causas de não conformidade, para evitar sua repetição ou ocorrência em outro lugar, por um dos seguintes meios:\n\nDeterminando as causas da não conformidade; e',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        category: '10 Melhoria',
        control: '10.2 (b.3) - Não conformidade e ação corretiva',
        description: 'Quando uma não conformidade ocorre, a organização deve:\n\nAvaliar a necessidade de ações para eliminar as causas de não conformidade, para evitar sua repetição ou ocorrência em outro lugar, por um dos seguintes meios:\n\nDeterminando se não conformidades similares existem, ou se podem potencialmente ocorrer;',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        category: '10 Melhoria',
        control: '10.2 (c) - Não conformidade e ação corretiva',
        description: 'Quando uma não conformidade ocorre, a organização deve:\n\nImplementar quaisquer ações necessárias;',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        category: '10 Melhoria',
        control: '10.2 (d) - Não conformidade e ação corretiva',
        description: 'Quando uma não conformidade ocorre, a organização deve:\n\nAnalisar criticamente a eficácia de quaisquer ações corretivas tomadas; e',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        category: '10 Melhoria',
        control: '10.2 (e) - Não conformidade e ação corretiva',
        description: 'Quando uma não conformidade ocorre, a organização deve:\n\nRealizar mudanças no sistema de gestão da segurança da informação, quando necessário.',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        category: '10 Melhoria',
        control: '10.2 (f) - Não conformidade e ação corretiva',
        description: 'Quando uma não conformidade ocorre, a organização deve:\n\nNatureza das não conformidades e quaisquer ações subsequentes tomadas; e',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        category: '10 Melhoria',
        control: '10.2 (g) - Não conformidade e ação corretiva',
        description: 'Quando uma não conformidade ocorre, a organização deve:\n\nResultados de qualquer ação corretiva.',
        created_at: new Date(),
        updated_at: new Date()
      }
    ], {})
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
