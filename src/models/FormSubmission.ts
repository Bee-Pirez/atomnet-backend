import { sequelize } from '../database'
import { DataTypes, Model, Optional } from "sequelize"

//interface para o objeto
export interface FormSubmission {
  id: number
  sendDate: Date
  userId: number
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
  sendDate: {
    allowNull: false,
    type: DataTypes.DATE,
    field: "send_date",
  },
  userId: {
    allowNull: false,
    type: DataTypes.INTEGER,
    references: { model: 'users', key: 'id' },
    onUpdate: 'CASCADE',
    onDelete: 'RESTRICT'
  },
  }, {
  tableName: 'form_submisions'
})