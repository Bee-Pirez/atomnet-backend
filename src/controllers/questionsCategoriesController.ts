import { Request, Response } from 'express'
import { QuestionCategory } from '../models'
import { Question } from '../models'
import { questionCategoryService } from '../services/questionsCategoriesService'


export const questionsCategoriesController = {
  //função assíncrona para controllar a rota (caminho da rota e função de callback para comportamento quando a rota for chamada)
  index: async (req: Request, res: Response) => {
    try {
      const questionsCategories = await QuestionCategory.findAll({
        attributes: ['id', 'category', 'control', 'theme', 'description'],
        order: [['category', 'ASC']]
      })
  
      return res.json(questionsCategories)
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
      const category = await questionCategoryService.findByIdWithQuestionsA(id)
      return res.json(category)
    } catch (err) {
      if (err instanceof Error) {
        return res.status(400).json({ message: err.message })
      }
    }
  },

  // POST /questionsACategories
  create: async (req: Request, res: Response) => {
    try {
      const { category, control, theme, description } = req.body;

      const existingCategory = await QuestionCategory.findOne({ where: { control } });
      if (existingCategory) {
        return res.status(400).json({ message: 'Já existe uma categoria com o mesmo controle' });
      }

      const newCategory = await QuestionCategory.create({ category, control, theme, description });

      return res.status(201).json(newCategory);
    } catch (err) {
      if (err instanceof Error) {
        return res.status(400).json({ message: err.message });
      }
    }
  },

  // DELETE /questionsACategories/:id
  delete: async (req: Request, res: Response) => {
    const { id } = req.params;

    try {
      const associatedQuestions = await Question.findOne({
        where: { questionCategoryId: id }
      });

      if (associatedQuestions) {
        return res.status(400).json({ message: 'Não é possível deletar a categoria porque existem perguntas associadas a ela' });
      }

      const deletionResult = await QuestionCategory.destroy({
        where: { id }
      });

      if (deletionResult === 0) {
        return res.status(404).json({ message: 'Categoria não encontrada' });
      }

      return res.status(200).json({ message: 'Categoria deletada com sucesso' });
    } catch (err) {
      if (err instanceof Error) {
        return res.status(500).json({ message: err.message });
      }
    }
  },


//   index: async (req: Request, res: Response) => {
//     const [page, perPage] = getPaginationParams(req.query)

//     try {
//         const paginatedCategories = await categoryService.findAllPaginated(page, perPage)

//         return res.json(paginatedCategories)
//     } catch (err) {
//         if (err instanceof Error) {
//             return res.status(400).json({ message: err.message })
//         }
//     }
// },

  // findAllPaginatedBlocks: async (req: Request, res: Response) => {
  //   const page = parseInt(req.query.page as string) || 1;
  //   const perPage = 10; // Limite de 10 blocos de perguntas por página
  
  //   try {
  //     const paginatedBlocks = await questionACategoryService.findAllPaginatedBlocks(page, perPage);
  //     return res.json(paginatedBlocks);
  //   } catch (error) {
  //     return res.status(500).json({ message: "Failed to fetch paginated blocks of questions by category." });
  //   }
  // }

  // No controlador

  // findAllPaginatedBlocks: async (req: Request, res: Response) => {
  //   const page = parseInt(req.query.page as string) || 1;
  //   const perPage = 10; // Limite de 10 blocos de perguntas por página

  //   try {
  //     const paginatedBlocks = await questionACategoryService.findAllPaginatedBlocks(page, perPage);
  //     return res.json(paginatedBlocks);
  //   } catch (error) {
  //     return res.status(500).json({ message: "Failed to fetch paginated blocks of questions by category." });
  //   }
  // }
  paginated: async (req: Request, res: Response) => {
    try {
      const page = parseInt(req.query.page as string) || 1; // Página atual
      const pageSize = parseInt(req.query.pageSize as string) || 5; // Tamanho da página

      const paginatedCategories = await questionCategoryService.findAllWithPagination(page, pageSize);

      return res.json(paginatedCategories);
    } catch (error) {
      if (error instanceof Error) {
        return res.status(400).json({ message: error.message });
      }
    }
  }

}
