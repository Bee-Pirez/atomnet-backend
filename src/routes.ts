import express from 'express'
import { questionsACategoriesController } from './controllers/questionsACategoriesController'
import { authController } from './controllers/authController'

const router = express.Router()

router.get('/questionsACategories', questionsACategoriesController.index)
router.get('/questionsACategories/:id', questionsACategoriesController.show)
router.post('/auth/register', authController.register)

export { router }