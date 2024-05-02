import { User } from '../models'
import { UserCreationAttributes } from '../models/User'

export const userService = {
  //métodos
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
    })
    return user
  },

  create: async (attributes: UserCreationAttributes) => {
    const user = await User.create(attributes)
    return user
  }
}