import express from 'express'
import { sequelize } from './database'
import { router } from './routes'

const app = express()

app.use(express.static('public'))

app.use(express.json())

app.use(router)

const PORT = process.env.PORT || 3000


app.listen(PORT, () => {
  sequelize.authenticate().then(() => {
    console.log('DB connection successfull.')
  })

  console.log(`Servidor iniciou com sucesso na porta ${PORT}`)
})