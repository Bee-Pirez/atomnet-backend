import { QuestionACategory } from "../models"
import { QuestionA } from "../models"; 


export const questionACategoryService = {
  findByIdWithQuestionsA: async (id: string) => {
    try {
      const categoryWithQuestions = await QuestionACategory.findByPk(id, {
        attributes: ['id', 'category', 'control', 'theme', 'description'],
        include: {
          model: QuestionA,
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