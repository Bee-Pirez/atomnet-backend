import { QuestionCategory } from "../models"
import { Question } from "../models"; 
import { paginateResults } from '../helpers/getPaginationParams';


export const questionCategoryService = {
  findAllWithPagination: async (page: number, pageSize: number) => {
    try {
      const allCategories = await QuestionCategory.findAll({
        attributes: ['id', 'category', 'control', 'theme', 'description'],
        include: {
          model: Question,
          as: 'questionsA',
          attributes: ['id', 'question']
        }
      });

      const paginatedCategories = paginateResults(page, pageSize, allCategories);

      return paginatedCategories;
    } catch (error) {
      throw new Error("Failed to fetch categories with pagination.");
    }
  },


  


//   findAllPaginated: async (page: number, perPage: number) => {
//     const offset = (page - 1) * perPage

//     const { count, rows } = await Category.findAndCountAll({
//         attributes: ['id', 'name', 'position'],
//         order: [['position', 'ASC']],
//         limit: perPage,
//         offset
//     })

//     return {
//         categories: rows,
//         page,
//         perPage,
//         total: count
//     }
// },

//   findAllPaginated: async () => {
//     try {
//       const categoriesWithQuestions = await QuestionACategory.findAll({
//         include: {
//           model: QuestionA,
//           as: 'questionsA',
//           attributes: ['id', 'question']
//         }
//       });
//       return categoriesWithQuestions;
//     } catch (error) {
//       throw new Error("Failed to find categories with questions.");
//     }
//   },

findByIdWithQuestionsA: async (id: string) => {
    try {
      const categoryWithQuestions = await QuestionCategory.findByPk(id, {
        attributes: ['id', 'category', 'control', 'theme', 'description'],
        include: {
          model: Question,
          as: 'questionsA',
          attributes: ['id', 'question']
        }
      });
      return categoryWithQuestions;
    } catch (error) {
      throw new Error("Failed to find category with questions.");
    }
  }
};