import { sequelize } from '../database'
import { DataTypes, Model, Optional } from "sequelize"

//interface para o objeto
export interface AnswerA {
  id: number
  isApplicable: boolean
  formAId: number
  questionAId: number
}

export interface AnswerCreationAttributes extends Optional<AnswerA, 'id'> {}

//interface para instancia
export interface AnswerInstance extends Model<AnswerA, AnswerCreationAttributes>, AnswerA {}

export const AnswerA = sequelize.define<AnswerInstance, AnswerA>('AnswerA', {
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
  formAId: {
    allowNull: false,
    type: DataTypes.INTEGER,
    references: { model: 'forms_a', key: 'id' },
    onUpdate: 'CASCADE',
    onDelete: 'RESTRICT'
  },
  questionAId: {
    allowNull: false,
    type: DataTypes.INTEGER,
    references: { model: 'questions_a', key: 'id' },
    onUpdate: 'CASCADE',
    onDelete: 'RESTRICT'
  }
})