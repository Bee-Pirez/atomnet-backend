import { sequelize } from '../database'
import { DataTypes, Model, Optional } from "sequelize"

//interface para o objeto
export interface QuestionACategory {
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
export interface QuestionCreationAttributes extends Optional<QuestionACategory, 'id'> {}

//interface para instancia
export interface QuestionInstance extends Model<QuestionACategory, QuestionCreationAttributes>, QuestionACategory {}

export const QuestionACategory = sequelize.define<QuestionInstance, QuestionACategory>('QuestionACategory', {
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
    tableName: 'questions_a_categories'  // Adicionando explicitamente o nome da tabela
})