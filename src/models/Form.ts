import { sequelize } from '../database'
import { DataTypes, Model, Optional } from "sequelize"

//interface para o objeto
export interface Form {
  id: number
  formName: string
}

export interface FormCreationAttributes extends Optional<Form, 'id'> {}

//interface para instancia
export interface FormInstance extends Model<Form, FormCreationAttributes>, Form {}

export const Form = sequelize.define<FormInstance, Form>('Form', {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  formName: {
    allowNull: false,
    type: DataTypes.STRING,
    field: "form_name",
  },
})