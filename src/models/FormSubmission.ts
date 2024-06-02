import { sequelize } from '../database'
import { DataTypes, Model, Optional } from "sequelize"

//interface para o objeto
export interface FormSubmission {
  id: number
  formId: number
  userId:number
  createdAt?: Date;
}

export interface FormCreationAttributes extends Optional<FormSubmission, 'id'> {}

//interface para instancia
export interface FormInstance extends Model<FormSubmission, FormCreationAttributes>, FormSubmission {}

export const FormSubmission = sequelize.define<FormInstance, FormSubmission>('FormSubmission', {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  formId: {
    allowNull: false,
    type: DataTypes.INTEGER,
    references: { model: 'forms', key: 'id' },
    onUpdate: 'CASCADE',
    onDelete: 'RESTRICT'
  },
  userId: {
    allowNull: false,
    type: DataTypes.INTEGER,
    references: { model: 'users', key: 'id' },
    onUpdate: 'CASCADE',
    onDelete: 'RESTRICT'
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE
  },
  }, {
  tableName: 'form_submissions'
})