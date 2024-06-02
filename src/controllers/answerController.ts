import { Request, Response } from "express";
import { answerService } from "../services/answerService";

export const answersController = {
  createAnswer: async (req: Request, res: Response) => {
    try {
      const answerData = req.body;
      const answer = await answerService.createAnswer(answerData);
      res.status(201).json(answer);
    } catch (error) {
      console.error("Erro ao criar resposta:", error);
      res.status(500).json({ message: "Erro ao criar resposta" });
    }
  },
};
