import { ResourceOptions } from "adminjs";

export const questionCategoryResourceOptions: ResourceOptions = {
  navigation: 'Formulários',
  editProperties: ['category', 'control', 'theme', 'description'],
  filterProperties: ['category', 'theme', 'createdAt', 'updatedAt'],
  listProperties: ['id', 'control',],
}