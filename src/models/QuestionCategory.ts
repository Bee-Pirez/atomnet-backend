import { sequelize } from '../database'
import { DataTypes, Model, Optional } from "sequelize"

//interface para o objeto
export interface QuestionCategory {
  id: number;
  category: string;
  control: string;
  theme: string;
  description: string;
  createdAt?: Date;
  updatedAt?: Date;
}

//atributos de criação que serão usados durante a criação de um novo objeto 
//e falo que ele não vai ter id durante a criação
export interface QuestionCreationAttributes extends Optional<QuestionCategory, 'id'> {}

//interface para instancia
export interface QuestionInstance extends Model<QuestionCategory, QuestionCreationAttributes>, QuestionCategory {}

export const QuestionCategory = sequelize.define<QuestionInstance, QuestionCategory>('QuestionCategory', {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  category: {
    allowNull: false,
    type: DataTypes.STRING
  },
  control: {
    allowNull: false,
    unique: true,
    type: DataTypes.STRING
  },
  theme: {
    allowNull: false,
    type: DataTypes.STRING
  },
  description: {
    allowNull: false,
    type: DataTypes.TEXT
  }, 
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'created_at'  
  },
  updatedAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'updated_at' 
  },
  }, {
    tableName: 'question_categories'  // Adicionando explicitamente o nome da tabela
})