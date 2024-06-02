import { FormSubmission } from '../models';

export const formSubmissionService = {
  findSubmissionByUserIdAndFormId: async (userId: number, formId: number) => {
    try {
      const submission = await FormSubmission.findOne({
        where: { userId, formId },
        order: [['created_at', 'DESC']],
      });
      return submission;
    } catch (error) {
      console.error('Erro ao buscar envio de formulário:', error);
      throw error;
    }
  },

  createSubmission: async (submissionData: any) => {
    try {
      const submission = await FormSubmission.create(submissionData);
      return submission;
    } catch (error) {
      console.error('Erro ao criar envio de formulário:', error);
      throw error;
    }
  },

};
