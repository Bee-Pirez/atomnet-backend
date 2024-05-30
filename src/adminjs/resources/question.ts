import { ResourceOptions } from "adminjs";

export const questionResourceOptions: ResourceOptions = {
  navigation: 'Formulários',
  editProperties: ['question', 'formId', 'questionCategoryId',],
  filterProperties: ['question', 'formId', 'questionCategoryId', 'createdAt', 'updatedAt'],
  listProperties: ['id', 'question', 'formId', 'questionCategoryId'],
  showProperties: ['id', 'question', 'formId', 'questionCategoryId', 'createdAt', 'updatedAt']
}