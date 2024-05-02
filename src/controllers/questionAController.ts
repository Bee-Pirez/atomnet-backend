// import { Request, Response } from 'express'
// import { QuestionA } from '../models'

// export const questionsAController = {
//   show: async (req: Request, res: Response) => {
//     const { id } = req.params

//     try {
//       const category = await questionsAService.findByIdWithCourses(id)
//       return res.json(category)
//     } catch (err) {
//       if (err instanceof Error) {
//         return res.status(400).json({ message: err.message })
//       }
//     }
//   }
// }