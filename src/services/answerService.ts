import { Answer } from '../models';

export const answerService = {
  createAnswer: async (answerData: any) => {
    try {
      const answer = await Answer.create(answerData);
      return answer;
    } catch (error) {
      console.error('Erro ao criar resposta:', error);
      throw error;
    }
  },
};