// src/controllers/authController.ts

import { Request, Response } from 'express'
import { userService } from '../services/userService'

//exportar um objeto
export const authController = {
  // POST /auth/register
  register: async (req: Request, res: Response) => {
    //desestruturaçaõ de objeto
    const { corporateName, cnpj, postalCode, city, state, street, email, password} = req.body

    try {
      const userAlreadyExists = await userService.findByEmail(email)

      if (userAlreadyExists) {
        throw new Error('Este e-mail já está cadastrado.')
      }

      const user = await userService.create({
        corporateName, 
        cnpj, 
        postalCode, 
        city, 
        state, 
        street, 
        email, 
        password,
        role: 'user'
      })

      return res.status(201).json(user)
    } catch (err) {
      if (err instanceof Error) {
        return res.status(400).json({ message: err.message })
      }
    }
  }
}