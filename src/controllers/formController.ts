// src/controllers/formsController.ts
// src/controllers/formsController.ts

import { Response } from "express";
import { AuthenticatedRequest } from "../middlewares/auth";
import { formService } from "../services/formService";
import { FormInstance } from "../models/FormA";

interface ErrorResponse {
  message: string;
}

export const formsController = {
  findByCurrentUser: async (req: AuthenticatedRequest, res: Response<FormInstance | ErrorResponse>) => {
    const userId = req.user ? req.user.id : null;

    if (!userId) {
      return res.status(400).json({ message: "User ID not provided." });
    }

    try {
      const form = await formService.findByUserId(userId);
      res.status(200).json(form);
    } catch (err) {
      if (err instanceof Error) {
        return res.status(400).json({ message: err.message });
      }
    }
  },
};
