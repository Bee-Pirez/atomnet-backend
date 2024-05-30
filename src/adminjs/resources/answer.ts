import { ResourceOptions } from "adminjs";

const answerResourceOptions: ResourceOptions = {
  navigation: 'Administração',
  actions: {
    edit: {
      isAccessible: false,
    },
    new: {
      isAccessible: false,
    }
  },
  filterProperties: [
    'isApplicable', 'formSubmissionId', 'createdAt', 'updatedAt'
  ],
  listProperties: [
    'id', 'isApplicable','isApplicable', 'formSubmissionId', 'questionId'
  ],
  showProperties: [
    'id', 'isApplicable','isApplicable', 'formSubmissionId', 'questionId', 'createdAt', 'updatedAt'
  ],
}

export { answerResourceOptions };