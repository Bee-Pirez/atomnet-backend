//questionService.ts
// questionService.ts
import { Question, QuestionCategory } from '../models';


interface QuestionWithCategory extends Question {
  QuestionCategory: {
    category: string;
    control: string;
  };
}


interface QuestionWithCategory extends Question {
  QuestionCategory: {
    category: string;
    control: string;
  };
}

export const questionService = {
  findByFormIdGroupedByCategory: async (formId: number): Promise<{ [key: string]: QuestionWithCategory[] }> => {
    try {
      const questions = await Question.findAll({
        where: { formId: formId }, // Corrigindo a propriedade para 'formId'
        include: [
          {
            model: QuestionCategory,
            attributes: ['category', 'control', 'theme', 'description'],
          },
        ],
      });

      // Agrupar as perguntas por categoria e controle
      const groupedQuestions: { [key: string]: QuestionWithCategory[] } = {};
      questions.forEach((question: QuestionWithCategory) => {
        const key = `${question.QuestionCategory.category}_${question.QuestionCategory.control}`;
        if (!groupedQuestions[key]) {
          groupedQuestions[key] = [];
        }
        groupedQuestions[key].push(question);
      });

      return groupedQuestions;
    } catch (error) {
      console.error('Erro ao buscar perguntas agrupadas por categoria e controle:', error);
      throw error;
    }
  },
};




  



  // findByFormIdGroupedByCategory: async (formId: number) => {
  //   try {
  //     const questions = await Question.findAll({
  //       where: { formId },
  //       include: [{ association: 'QuestionCategory' }],
  //     });

  //     // Agrupa as perguntas por categoria
  //     const groupedQuestions: { [categoryId: number]: Question[] } = {};
  //     questions.forEach(question => {
  //       const categoryId = question.QuestionCategory.id;
  //       if (!groupedQuestions[categoryId]) {
  //         groupedQuestions[categoryId] = [];
  //       }
  //       groupedQuestions[categoryId].push(question);
  //     });

  //     return groupedQuestions;
  //   } catch (error) {
  //     console.error("Erro ao buscar perguntas pelo ID do formulário agrupadas por categoria:", error);
  //     throw error;
  //   }



  
//   findByFormIdWithCategories: async (formId: number) => {
//     try {
//       const questions = await Question.findAll({
//         where: { form_id: formId },
//         include: [
//           {
//             model: QuestionCategory,
//             attributes: ['category']
//           }
//         ]
//       });
//       return questions;
//     } catch (error) {
//       console.error("Erro ao buscar perguntas pelo ID do formulário:", error);
//       throw error; 
//     }
//   },

// };


// const { Question } = require('../models');
// import { QuestionCreationAttributes } from '../models/Question';

// export const questionService = {
//   findByFormId: async (formId: number) => {
//     try {
//       const questions = await Question.findAll({
//         where: { form_id: formId }
//       });
//       return questions;
//     } catch (error) {
//       console.error("Erro ao buscar perguntas pelo ID do formulário:", error);
//       throw error; 
//     }
//   },
