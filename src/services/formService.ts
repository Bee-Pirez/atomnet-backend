// import { User } from '../models';
// import { FormA, FormInstance } from '../models/FormA';

// export const formService = {
//   findByUserId: async (userId: number) => {
//     try {
//       // Busca o usuário com base no ID
//       const user = await User.findByPk(userId);
//       if (!user) {
//         throw new Error('Usuário não encontrado');
//       }

//       // Busca o formulário associado ao usuário
//       const form = await FormA.findOne({ where: { UserId: userId } });

//       return form;
//     } catch (err) {
//       if (err instanceof Error) {
//         throw new Error('Erro ao buscar formulário do usuário: ' + err.message);
//       }
//     }
//   },
// };
