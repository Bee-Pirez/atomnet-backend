import { Request, Response } from 'express'
import { Form,  } from '../models'

export const formsController = {
  //função assíncrona para controllar a rota (caminho da rota e função de callback para comportamento quando a rota for chamada)
  index: async (req: Request, res: Response) => {
    try {
      const forms = await Form.findAll({
        attributes: ['id', 'formName'],
        order: [['id', 'ASC']]
      })
  
      return res.json(forms)
    } catch (err) {
      if (err instanceof Error) {
        return res.status(400).json({ message: err.message })
      }
    }
  },

  // GET /questionsACategories/:id
  // show: async (req: Request, res: Response) => {
  //   const { id } = req.params

  //   try {
  //     const category = await questionACategoryService.findByIdWithQuestionsA(id)
  //     return res.json(category)
  //   } catch (err) {
  //     if (err instanceof Error) {
  //       return res.status(400).json({ message: err.message })
  //     }
  //   }
  // },

}

// // src/controllers/formsController.ts
// // src/controllers/formsController.ts

// import { Response } from "express";
// import { AuthenticatedRequest } from "../middlewares/auth";
// import { formService } from "../services/formService";
// import { FormInstance } from "../models/FormSubmission";

// interface ErrorResponse {
//   message: string;
// }

// export const formsController = {
//   findByCurrentUser: async (
//     req: AuthenticatedRequest,
//     res: Response<FormInstance | ErrorResponse>
//   ) => {
//     const userId = req.user ? req.user.id : null;

//     if (!userId) {
//       return res.status(400).json({ message: "User ID not provided." });
//     }

//     try {
//       const form = await formService.findByUserId(userId);
//       res.status(200).json(form);
//     } catch (err) {
//       if (err instanceof Error) {
//         return res.status(400).json({ message: err.message });
//       }
//     }
//   },
// };
