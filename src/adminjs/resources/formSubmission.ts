import { ResourceOptions } from "adminjs";

const formSubmissionResourceOptions: ResourceOptions = {
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
    'createdAt'
  ],
  listProperties: [
    'id',
  ],
  showProperties: [
    'id', 'createdAt',
  ],
}

export { formSubmissionResourceOptions };