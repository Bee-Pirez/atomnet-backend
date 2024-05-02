import { Request, Response } from 'express'
import { QuestionACategory } from '../models'
import { questionACategoryService } from '../services/questionsACategoriesService'

export const questionsACategoriesController = {
  //função assíncrona para controllar a rota (caminho da rota e função de callback para comportamento quando a rota for chamada)
  index: async (req: Request, res: Response) => {
    try {
      const questionsACategories = await QuestionACategory.findAll({
        attributes: ['id', 'category', 'control', 'theme', 'description'],
        order: [['category', 'ASC']]
      })
  
      return res.json(questionsACategories)
    } catch (err) {
      if (err instanceof Error) {
        return res.status(400).json({ message: err.message })
      }
    }
  },

  // GET /questionsACategories/:id
  show: async (req: Request, res: Response) => {
    const { id } = req.params

    try {
      const category = await questionACategoryService.findByIdWithQuestionsA(id)
      return res.json(category)
    } catch (err) {
      if (err instanceof Error) {
        return res.status(400).json({ message: err.message })
      }
    }
  }

}
