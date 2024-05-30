import { sequelize } from '../database'
import { DataTypes, Model, Optional } from "sequelize"

//interface para o objeto
export interface Answer {
  id: number
  isApplicable: boolean
  formSubmissionId: number
  questionId: number
}

export interface AnswerCreationAttributes extends Optional<Answer, 'id'> {}

//interface para instancia
export interface AnswerInstance extends Model<Answer, AnswerCreationAttributes>, Answer {}

export const Answer = sequelize.define<AnswerInstance, Answer>('Answer', {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  isApplicable: {
    allowNull: false,
    type: DataTypes.BOOLEAN
  },
  formSubmissionId: {
    allowNull: false,
    type: DataTypes.INTEGER,
    references: { model: 'form_submissions', key: 'id' },
    onUpdate: 'CASCADE',
    onDelete: 'RESTRICT'
  },
  questionId: {
    allowNull: false,
    type: DataTypes.INTEGER,
    references: { model: 'questions', key: 'id' },
    onUpdate: 'CASCADE',
    onDelete: 'RESTRICT'
  }
})