import { Response } from "express";
import { AuthenticatedRequest } from "../middlewares/auth";
import { User } from "../models";
import { userService } from "../services/userService";
import bcrypt from "bcrypt";

export const usersController = {
  // GET /users/current
  index: async (req: Request, res: Response) => { // Corrija o tipo do parâmetro req para Request
    try {
      const users = await User.findAll({
        attributes: [
          "id",
          "corporateName",
          "postalCode",
          "city",
          "state",
          "street",
          "email",
        ],
        order: [["id", "ASC"]],
      });

      return res.json(users);
    } catch (err) {
      if (err instanceof Error) {
        return res.status(400).json({ message: err.message });
      }
    }
  },

  // GET /users/current
  show: async (req: AuthenticatedRequest, res: Response) => {
    try {
      const currentUser = req.user!
      return res.json(currentUser)
    } catch (err) {
      if (err instanceof Error) {
        return res.status(400).json({ message: err.message })
      }
    }
  },

  // PUT /users/current
  update: async (req: AuthenticatedRequest, res: Response) => {
    const { id } = req.user!;
    const { corporateName, postalCode, city, state, street, email } = req.body;

    try {
      const updatedUser = await userService.update(id, {
        corporateName,
        postalCode,
        city,
        state,
        street,
        email,
      });

      return res.json(updatedUser);
    } catch (err) {
      if (err instanceof Error) {
        return res.status(400).json({ message: err.message });
      }
    }
  },

  // PUT /users/current/password
  updatePassword: async (req: AuthenticatedRequest, res: Response) => {
    const user = req.user!;
    const { currentPassword, newPassword } = req.body;

    try {
      const isMatch = await bcrypt.compare(currentPassword, user.password);
      if (!isMatch) {
        return res.status(400).json({ message: "Senha atual incorreta" });
      }

      const hashedNewPassword = await bcrypt.hash(newPassword, 10);
      await userService.updatePassword(user.id, hashedNewPassword);

      return res.status(204).send();
    } catch (err) {
      return res.status(500).json({ message: "Erro ao atualizar senha" });
    }
  },
};
