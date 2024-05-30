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
    'sendDate',
    'userId',
  ],
  listProperties: [
    'id',
    'sendDate',
    'userId',
  ],
  showProperties: [
    'id',
    'sendDate',
    'userId',
  ],
}

export { formSubmissionResourceOptions };
