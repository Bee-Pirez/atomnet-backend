import { sequelize } from '../database'
import { DataTypes, Model, Optional } from "sequelize"

//interface para o objeto
export interface QuestionADetail {
  id: number
  question: string
  questionACategoryId: number
}

//atributos de criação que serão usados durante a criação de um novo objeto 
//e falo que ele não vai ter id durante a criação
export interface QuestionCreationAttributes extends Optional<QuestionADetail, 'id'> {}

//interface para instancia
export interface QuestionInstance extends Model<QuestionADetail, QuestionCreationAttributes>, QuestionADetail {}

export const QuestionA = sequelize.define<QuestionInstance, QuestionADetail>('QuestionA', {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  question: {
    allowNull: false,
    type: DataTypes.TEXT
  },
  questionACategoryId: {
    allowNull: false,
    type: DataTypes.INTEGER,
    references: { model: 'questions_a_categories', key: 'id' },
    onUpdate: 'CASCADE',
    onDelete: 'RESTRICT'
  },
  }, {
    tableName: 'questions_a'
})