import { sequelize } from '../database'
import { DataTypes, Model, Optional } from "sequelize"

//interface para o objeto
export interface QuestionA {
  id: number
  question: string
  questionACategoryId: number
}

//atributos de criação que serão usados durante a criação de um novo objeto 
//e falo que ele não vai ter id durante a criação
export interface QuestionACreationAttributes extends Optional<QuestionA, 'id'> {}

//interface para instancia
export interface QuestionAInstance extends Model<QuestionA, QuestionACreationAttributes>, QuestionA {}

export const QuestionA = sequelize.define<QuestionAInstance, QuestionA>('QuestionA', {
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