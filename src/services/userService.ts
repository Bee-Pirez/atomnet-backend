import { User } from '../models';
import { UserCreationAttributes } from '../models/User';

export const userService = {
  findByEmail: async (email: string) => {
    const user = await User.findOne({
      attributes: [
        'id',
        ['corporate_name', 'corporateName'],
        'cnpj',
        ['postal_code', 'postalCode'],
        'city',
        'state',
        'street',
        'email',
        'password'
      ],
      where: { email }
    });
    return user;
  },

  create: async (attributes: UserCreationAttributes) => {
    const user = await User.create(attributes);
    return user;
  },

  update: async (id: number, attributes: {
    corporateName: string,
    postalCode: string,
    city: string,
    state: string,
    street: string,
    email: string
  }) => {
    const affectedRows = await User.update(attributes, { where: { id } });
    if (affectedRows[0] === 0) {
      return { message: 'Nenhuma mudança foi feita, usuário não encontrado ou dados iguais.' };
    }
    return { message: 'Usuário atualizado com sucesso.' };
  },

  updatePassword: async (id: number, password: string) => {
    const affectedRows = await User.update({ password }, {
      where: { id },
      individualHooks: true
    });
    if (affectedRows[0] === 0) {
      return { message: 'Senha não atualizada, usuário não encontrado.' };
    }
    return { message: 'Senha atualizada com sucesso.' };
  },
};
