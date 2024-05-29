import dotenv from "dotenv"
dotenv.config()
import cors from "cors";

import express from 'express'
import { sequelize } from './database'
import { router } from './routes'
import { adminJs, adminJsRouter } from "./adminjs";

const app = express()

app.use(express.static('public'))

app.use(adminJs.options.rootPath, adminJsRouter)


app.use(express.json())

// Use o middleware cors antes das rotas
app.use(cors());

app.use(router)

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  sequelize.authenticate().then(() => {
    console.log('DB connection successfull.')
  })

  console.log(`Servidor iniciou com sucesso na porta ${PORT}`)
})