import { Request, Response } from 'express'
import { QuestionACategory } from '../models'
import { QuestionA } from '../models'
import {AnswerA } from '../models'

export const questionsAController = {

  // POST /questionsA
  create: async (req: Request, res: Response) => {
    const { question, questionACategoryId } = req.body;

    try {
      const categoryExists = await QuestionACategory.findByPk(questionACategoryId);
      if (!categoryExists) {
        return res.status(404).json({ message: 'Categoria não encontrada' });
      }

      const newQuestion = await QuestionA.create({ question, questionACategoryId });
      return res.status(201).json(newQuestion);
    } catch (err) {
      if (err instanceof Error) {
        return res.status(500).json({ message: err.message });
      }
    }
  },

  // DELETE /questionsA/:id
  delete: async (req: Request, res: Response) => {
    const { id } = req.params;

    try {
      // Verificar se existem respostas associadas à pergunta
      const associatedAnswers = await AnswerA.findOne({
        where: { questionAId: id }
      });

      if (associatedAnswers) {
        return res.status(400).json({ message: 'Não é possível deletar a pergunta porque existem respostas associadas a ela' });
      }

      // Se não houver respostas, deletar a pergunta
      const deletionResult = await QuestionA.destroy({
        where: { id }
      });

      if (deletionResult === 0) {
        return res.status(404).json({ message: 'Pergunta não encontrada' });
      }

      return res.status(200).json({ message: 'Pergunta deletada com sucesso' });
    } catch (err) {
      if (err instanceof Error) {
        return res.status(500).json({ message: err.message });
      }
    }
  }

}