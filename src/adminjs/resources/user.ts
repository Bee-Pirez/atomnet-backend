import { ResourceOptions } from "adminjs";

const userResourceOptions: ResourceOptions = {
  navigation: 'Administração',
  properties: {
    password: {
      type: 'password'
    },
    role: {
      availableValues: [
        { value: 'admin', label: 'Administrador' },
        { value: 'user', label: 'Usuário Padrão' }
      ]
    }
  },
  editProperties: [
    'corporateName',
    'cnpj',
    'postalCode',
    'city',
    'state',
    'street',
    'email',
    'password',
    'role'
  ],
  filterProperties: [
    'corporateName',
    'cnpj',
    'city',
    'state',
    'email',
    'role',
    'createdAt',
    'updatedAt'
  ],
  listProperties: [
    'id',
    'corporateName',
    'email',
    'role'
  ],
  showProperties: [
    'id',
    'corporateName',
    'cnpj',
    'postalCode',
    'city',
    'state',
    'street',
    'email',
    'password',
    'role',
    'createdAt',
    'updatedAt'
  ],
}

export { userResourceOptions }