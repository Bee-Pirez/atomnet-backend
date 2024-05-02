import { sequelize } from '../database'
import { DataTypes, Model, Optional } from "sequelize"

//interface para o objeto
export interface FormA {
  id: number
}

export interface FormCreationAttributes extends Optional<FormA, 'id'> {}

//interface para instancia
export interface FormInstance extends Model<FormA, FormCreationAttributes>, FormA {}

export const FormA = sequelize.define<FormInstance, FormA>('FormA', {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  }
})