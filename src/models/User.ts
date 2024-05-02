// src/models/User.ts

import { sequelize } from '../database'
import { DataTypes, Model, Optional } from 'sequelize'
import bcrypt from 'bcrypt'

export interface User {
  id: number
  corporateName: string
  cnpj: string
  postalCode: string
  city: string
  state: string
  street: string
  email: string
  password: string
  role: 'admin' | 'user'
}

export interface UserCreationAttributes extends Optional<User, 'id'> { }

export interface UserInstance
  extends Model<User, UserCreationAttributes>, User {}

export const User = sequelize.define<UserInstance, User>('User', {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  corporateName: {
    allowNull: false,
    type: DataTypes.STRING,
    field: 'corporate_name'
  },
  cnpj: {
    allowNull: false,
    unique: true,
    type: DataTypes.STRING
  },
  postalCode: {
    allowNull: false,
    type: DataTypes.STRING,
    field: 'postal_code'
  },
  city: {
    allowNull: false,
    type: DataTypes.STRING
  },
  state: {
    allowNull: false,
    type: DataTypes.STRING
  },
  street: {
    allowNull: false,
    type: DataTypes.STRING
  },
  email: {
    allowNull: false,
    unique: true,
    type: DataTypes.STRING,
    validate: {
      isEmail: true
    }
  },
  password: {
    allowNull: false,
    type: DataTypes.STRING
  },
  role: {
    allowNull: false,
    type: DataTypes.STRING,
    validate: {
      isIn: [['admin', 'user']]
    }
  },
}, {
  createdAt: 'created_at',
  updatedAt: 'updated_at',
  //passar coo sendo um objeto
  hooks: {
    //função assincrona
    beforeSave: async (user) => {
      if (user.isNewRecord || user.changed('password')) {
        user.password = await bcrypt.hash(user.password.toString(), 10);
      }
    }
  }
})
