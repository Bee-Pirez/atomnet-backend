import express from 'express'
import { Request, Response, RequestHandler } from "express";
import { questionsCategoriesController } from './controllers/questionsCategoriesController'
// import { questionsController } from './controllers/questionController'
import { authController } from './controllers/authController'
import { usersController } from './controllers/userController'
import { ensureAuth } from './middlewares/auth'
import { formsController } from './controllers/formController';
import { questionsController } from './controllers/questionController';
import { formSubmissionController } from './controllers/formSubmissionController';
import { answersController } from './controllers/answerController';

const router = express.Router()

// router.get('/questionsACategories', questionsACategoriesController.index)
// router.get('/questionsACategories/:id', questionsACategoriesController.show)
// router.post('/questionsACategories', ensureAuth, questionsACategoriesController.create)
// router.get('/questionsACategories', questionsACategoriesController.paginated);

// router.post('/questionsA', questionsAController.create);
// router.delete('/questionsA/:id', questionsAController.delete);

router.post('/auth/register', authController.register)
router.post('/auth/login', authController.login)

router.get('/users/current', ensureAuth, usersController.show); // Adicione a rota para o método index do usersController
router.get('/users/current', usersController.index as unknown as RequestHandler); // Adicione esta linha

router.get('/forms', formsController.index); // Adicione esta linha
router.get('/questions/:formId', questionsController.index);

router.get('/submissions/:userId/:formId', formSubmissionController.checkSubmission);
router.post('/submissions', formSubmissionController.createSubmission); // Adicione esta linha
router.post('/answers', answersController.createAnswer); // Adicione esta linha


export { router }