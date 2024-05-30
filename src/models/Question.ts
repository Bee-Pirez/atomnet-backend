import { sequelize } from '../database'
import { DataTypes, Model, Optional } from "sequelize"

//interface para o objeto
export interface Question {
  id: number
  question: string
  formId: number
  questionCategoryId: number
}

//atributos de criação que serão usados durante a criação de um novo objeto 
//e falo que ele não vai ter id durante a criação
export interface QuestionCreationAttributes extends Optional<Question, 'id'> {}

//interface para instancia
export interface QuestionAInstance extends Model<Question, QuestionCreationAttributes>, Question {}

export const Question = sequelize.define<QuestionAInstance, Question>('Question', {
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
  formId: {
    allowNull: false,
    type: DataTypes.INTEGER,
    references: { model: 'forms', key: 'id' },
    onUpdate: 'CASCADE',
    onDelete: 'RESTRICT'
  },
  questionCategoryId: {
    allowNull: false,
    type: DataTypes.INTEGER,
    references: { model: 'question_categories', key: 'id' },
    onUpdate: 'CASCADE',
    onDelete: 'RESTRICT'
  },
  }, {
    tableName: 'questions'
})