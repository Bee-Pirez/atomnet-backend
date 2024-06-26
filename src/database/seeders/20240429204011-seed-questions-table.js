'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    // const [questions_categories] = await queryInterface.sequelize.query('SELECT id FROM questions_categorys;')

    await queryInterface.bulkInsert('questions', [
      { question: 'Existe uma política de segurança da informação na organização?', form_id: 1, question_category_id: 1, created_at: new Date(), updated_at: new Date() },
      { question: 'São aprovadas e publicadas as políticas de PSI, e são comunicadas aos funcionários e partes externas?', form_id: 1, question_category_id: 1, created_at: new Date(), updated_at: new Date() },
      { question: 'As políticas são regularmente revisadas?', form_id: 1, question_category_id: 1, created_at: new Date(), updated_at: new Date() },

      { question: 'Existe um documento que identifica os responsáveis pelos ativos individuais e pelos processos de segurança específicos?', form_id: 1, question_category_id: 2, created_at: new Date(), updated_at: new Date() },
      { question: 'Essa identificação é clara e objetiva, e esses documentos são revisados periodicamente?', form_id: 1, question_category_id: 2, created_at: new Date(), updated_at: new Date() },
      { question: 'As responsabilidades foram adequadamente comunicadas às partes relevantes?', form_id: 1, question_category_id: 2, created_at: new Date(), updated_at: new Date() },

      { question: 'As funções conflitantes e áreas de responsabilidade são segregadas? A segregação deve ser implementada para diminuir as chances de alterações não autorizadas ou não intencionais e prevenir o uso indevido dos ativos de informação e serviços da organização.', form_id: 1, question_category_id: 3, created_at: new Date(), updated_at: new Date() },
      
      { question: 'A Direção e demais gestores (de todos os níveis) estão comprometidos em orientar e encorajar funcionários, contratados e terceirizados a aplicarem a SI de acordo com o estabelecido nas políticas e procedimentos? ', form_id: 1, question_category_id: 4, created_at: new Date(), updated_at: new Date() },
      { question: 'Como ocorre o encorajamento? É feito de forma periódica?', form_id: 1, question_category_id: 4, created_at: new Date(), updated_at: new Date() },
      { question: 'Esse processo está formalizado? Há a devida revisão periódica do documento?', form_id: 1, question_category_id: 4, created_at: new Date(), updated_at: new Date() },

      { question: 'A organização estabelece e mantém contato com autoridades relevantes, documentando quando e por quem o contato deve ser feito?', form_id: 1, question_category_id: 5, created_at: new Date(), updated_at: new Date() },
      { question: 'Existe um processo para relatar incidentes de segurança em tempo hábil? Esses documentos são revisados periodicamente ou em caso de mudanças significativas nos processos?', form_id: 1, question_category_id: 5, created_at: new Date(), updated_at: new Date() },

      { question: 'A organização mantém contatos com grupos especializados, fóruns ou associações profissionais de segurança da informação?', form_id: 1, question_category_id: 6, created_at: new Date(), updated_at: new Date() },
      { question: 'Esse processo é formalizado em um documento e é revisado periodicamente ou em caso de mudanças significativas nos processos?', form_id: 1, question_category_id: 6, created_at: new Date(), updated_at: new Date() },

      { question: 'A organização coleta informações relacionadas a ameaças à segurança da informação e produz inteligência de ameaças?', form_id: 1, question_category_id: 7, created_at: new Date(), updated_at: new Date() },
      { question: 'O procedimento de coleta/análise dessas informações está documentado e armazenado em algum local específico?', form_id: 1, question_category_id: 7, created_at: new Date(), updated_at: new Date() },

      { question: 'Os projetos da organização passam por avaliações de segurança da informação?', form_id: 1, question_category_id: 8, created_at: new Date(), updated_at: new Date() },
      { question: 'Existe um procedimento formal e documentado que aborda a necessidade e o processo para que todos os projetos sejam avaliados em termos de segurança da informação, incluindo a especificação de requisitos de segurança tanto para novos sistemas como para aprimoramentos de sistemas já existentes?', form_id: 1, question_category_id: 8, created_at: new Date(), updated_at: new Date() },

      { question: 'Existe um inventário de informações e outros ativos, com proprietários claramente definidos?', form_id: 1, question_category_id: 9, created_at: new Date(), updated_at: new Date() },
      { question: 'Os proprietários são notificados de suas responsabilidades, e o inventário é atualizado regularmente?', form_id: 1, question_category_id: 9, created_at: new Date(), updated_at: new Date() },

      { question: 'Existem regras e procedimentos para o uso e manuseio de informações e ativos associados?', form_id: 1, question_category_id: 10, created_at: new Date(), updated_at: new Date() },
      { question: 'Essas regras estão documentadas em uma política, e as pessoas com acesso às informações da organização são informadas sobre essa política?', form_id: 1, question_category_id: 10, created_at: new Date(), updated_at: new Date() },

    ])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('questions_a', null, {})
  }
};
