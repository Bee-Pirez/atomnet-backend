import { Request, Response } from 'express';
import { formSubmissionService } from '../services/formSubmissionService';

export const formSubmissionController = {
  checkSubmission: async (req: Request, res: Response) => {
    try {
      const { userId, formId } = req.params;
      const submission = await formSubmissionService.findSubmissionByUserIdAndFormId(parseInt(userId), parseInt(formId));
      if (submission) {
        return res.json(submission);
      } else {
        return res.status(404).json({ message: 'No submission found' });
      }
    } catch (error) {
      console.error('Erro ao verificar envio de formulário:', error);
      return res.status(500).json({ message: 'Internal server error' });
    }
  },

  createSubmission: async (req: Request, res: Response) => {
    try {
      const submissionData = req.body;
      const submission = await formSubmissionService.createSubmission(submissionData);
      return res.status(201).json(submission);
    } catch (error) {
      console.error('Erro ao criar envio de formulário:', error);
      return res.status(500).json({ message: 'Internal server error' });
    }
  },
};