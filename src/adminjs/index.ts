import AdminJS  from "adminjs";
import AdminJSExpress from "@adminjs/express"
import AdminJSSequelize from "@adminjs/sequelize"
import { sequelize } from "../database";
import bcrypt from 'bcrypt'
import { componentLoader, Components } from './components/components'; // Atualize a importação aqui
import { brandingOptions } from "./branding";
import { adminJsResources } from "./resources";
import { locale } from "./locale";

import { Form, QuestionCategory, Question, User, FormSubmission, Answer } from '../models'



AdminJS.registerAdapter(AdminJSSequelize)

export const adminJs = new AdminJS({
    databases: [sequelize],
    rootPath: "/admin",
    branding: brandingOptions,
    resources: adminJsResources,
    dashboard: {
      component: Components.Dashboard, 

      handler: async (req, res, context) => {
        const forms = await Form.count()
        const questionCategories = await QuestionCategory.count()
        const questions = await Question.count()
        const formSubmissions = await FormSubmission.count()
        const answers = await Answer.count()
        const standardUsers = await User.count({ where: { role: 'user' } })
  
        res.json({
          'Formulários': forms,
          'Categorias de Perguntas': questionCategories,
          'Perguntas': questions,
          'Usuários': standardUsers,
          'Formulários Enviados': formSubmissions,
          'Respostas Enviadas': answers,
        })
      },
    },
    locale: locale,
    componentLoader
})

export const adminJsRouter = AdminJSExpress.buildAuthenticatedRouter(adminJs, {
    authenticate: async (email, password) => {
      const user = await User.findOne({ where: { email } })
  
      if (user && user.role === 'admin') {
        const matched = await bcrypt.compare(password, user.password)
  
        if (matched) {
          return user
        }
      }
  
      return false
    },
    cookiePassword: 'senha-do-cookie'
  }, null, {
      resave: false,
      saveUninitialized: false
  })