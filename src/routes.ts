import express from 'express'
import { Request, Response, RequestHandler } from "express";
import { questionsACategoriesController } from './controllers/questionsACategoriesController'
import { questionsAController } from './controllers/questionAController'
import { authController } from './controllers/authController'
import { usersController } from './controllers/userController'
import { ensureAuth } from './middlewares/auth'

const router = express.Router()

router.get('/questionsACategories', questionsACategoriesController.index)
router.get('/questionsACategories/:id', questionsACategoriesController.show)
router.post('/questionsACategories', ensureAuth, questionsACategoriesController.create)
router.get('/questionsACategories', questionsACategoriesController.paginated);

router.post('/questionsA', questionsAController.create);
router.delete('/questionsA/:id', questionsAController.delete);

router.post('/auth/register', authController.register)
router.post('/auth/login', authController.login)

router.get('/users/current', ensureAuth, usersController.show); // Adicione a rota para o método index do usersController
router.get('/users/current', usersController.index as unknown as RequestHandler); // Adicione esta linha


export { router }