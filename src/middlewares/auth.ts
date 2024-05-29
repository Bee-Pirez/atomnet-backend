import { NextFunction, Request, Response } from 'express'
import { JwtPayload } from 'jsonwebtoken'
import { UserInstance } from '../models/User'
import { jwtService } from '../services/jwtService'
import { userService } from '../services/userService'

export interface AuthenticatedRequest extends Request {
  user?: UserInstance | null
}

export function ensureAuth(req: AuthenticatedRequest, res: Response, next: NextFunction) {
  //espero que o frontend tenha enviado algum token na requisição (no cabeçalho da requisição)
  const authorizationHeader = req.headers.authorization

  if (!authorizationHeader) {
    return res.status(401).json({ message: 'Não autorizado: nenhum token encontrado' })
  }

  //o authorizationHeader vem em um formato específico que é o Bearer token -> Bearer token...
  const token = authorizationHeader.replace(/Bearer /, '')

  //função de callback
  jwtService.verifyToken(token, (err, decoded) => {
    if (err || typeof decoded === 'undefined') {
      return res.status(401).json({ message: 'Não autorizado: token inválido' })
    }

    userService.findByEmail((decoded as JwtPayload).email).then(user => {
      req.user = user
      next()
    })
  })
}