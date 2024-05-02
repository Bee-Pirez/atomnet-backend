import { Sequelize } from 'sequelize'

export const sequelize = new Sequelize({
  dialect: 'mysql',
  host: 'localhost',
  port: 3306,
  database: 'atomnet_development',
  username: 'root',
  password: 'K#A@j173*17g',
	define: {
    underscored: true
  }
})