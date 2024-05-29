// src/controllers/authController.ts

import { Request, Response } from 'express'
import { userService } from '../services/userService'
import { jwtService } from '../services/jwtService'
import bcrypt from 'bcrypt'

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
  },

  // POST /auth/login
  login: async (req: Request, res: Response) => {
    const { email, password} = req.body

    try{
      const user = await userService.findByEmail(email)

      if (!user) {
        return res.status(404).json({ error: 'E-mail não registrado.' })
      }

      const isMatch = await bcrypt.compare(password, user.password)

      if (isMatch) {
        const payload = {
          id: user.id,
          corporateName: user.corporateName,
          email: user.email,
        }
        const token = jwtService.signPayload(payload, '1d')

        return res.json({authenticated: true, ...payload, token})

      } else {
        return res.status(401).json({ error: 'Senha incorreta.' })
      }

    } catch(err) {
      if(err instanceof Error){
        return res.status(400).json({message: err.message})
      }
    }
  }
}