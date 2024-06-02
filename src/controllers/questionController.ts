import { Request, Response } from "express";
import { questionService } from "../services/questionService";
import { Question } from "../models";
import { Answer } from "../models";



export const questionsController = {
  index: async (req: Request, res: Response) => {
    try {
      const { formId } = req.params;
      const groupedQuestions = await questionService.findByFormIdGroupedByCategory(parseInt(formId));
      return res.json(groupedQuestions);
    } catch (err) {
      if (err instanceof Error) {
        return res.status(500).json({ message: err.message });
      }
  }
}

  // index: async (req: Request, res: Response) => {
  //   try {
  //     const { formId } = req.params;
  //     const questions = await questionService.findByFormIdWithCategories(parseInt(formId));
  //     return res.json(questions);
  //   } catch (err) {
  //     if (err instanceof Error) {
  //       return res.status(500).json({ message: err.message });
  //     }
  //   }
  // },
  // index: async (req: Request, res: Response) => {
  //   try {
  //     const { formId } = req.params;
  //     const questions = await questionService.findByFormId(parseInt(formId));
  //     return res.json(questions);
  //   } catch (err) {
  //     if (err instanceof Error) {
  //       return res.status(500).json({ message: err.message });
  //     }
  //   }
  //},

  // POST /questionsA
  // create: async (req: Request, res: Response) => {
  //   const { question, questionACategoryId } = req.body;

  //   try {
  //     const categoryExists = await QuestionCategory.findByPk(questionACategoryId);
  //     if (!categoryExists) {
  //       return res.status(404).json({ message: 'Categoria não encontrada' });
  //     }

  //     const newQuestion = await Question.create({ question, questionCategoryId });
  //     return res.status(201).json(newQuestion);
  //   } catch (err) {
  //     if (err instanceof Error) {
  //       return res.status(500).json({ message: err.message });
  //     }
  //   }
  // },

  // // DELETE /questionsA/:id
  // delete: async (req: Request, res: Response) => {
  //   const { id } = req.params;

  //   try {
  //     // Verificar se existem respostas associadas à pergunta
  //     const associatedAnswers = await Answer.findOne({
  //       where: { questionId: id }
  //     });

  //     if (associatedAnswers) {
  //       return res.status(400).json({ message: 'Não é possível deletar a pergunta porque existem respostas associadas a ela' });
  //     }

  //     // Se não houver respostas, deletar a pergunta
  //     const deletionResult = await Question.destroy({
  //       where: { id }
  //     });

  //     if (deletionResult === 0) {
  //       return res.status(404).json({ message: 'Pergunta não encontrada' });
  //     }

  //     return res.status(200).json({ message: 'Pergunta deletada com sucesso' });
  //   } catch (err) {
  //     if (err instanceof Error) {
  //       return res.status(500).json({ message: err.message });
  //     }
  //   }
}