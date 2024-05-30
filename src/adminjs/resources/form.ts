import { ResourceOptions } from "adminjs";

export const formResourceOptions: ResourceOptions = {
  navigation: 'Formulários',
  editProperties: ['formName',],
  filterProperties: ['formName', 'createdAt', 'updatedAt'],
  listProperties: ['id', 'formName',],
  showProperties: ['id', 'formName','createdAt', 'updatedAt']
}