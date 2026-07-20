import { DataTypes } from 'sequelize';
import { db } from '../db.js';

const Coordinator = db.define(
  'Coordinator',
  {
    id: {
      type: DataTypes.STRING,
      primaryKey: true
    },

    firstName: {
      type: DataTypes.STRING
    },

    lastName: {
      type: DataTypes.STRING
    },

    fullName: {
      type: DataTypes.VIRTUAL,
      get() {
        return `${this.firstName} ${this.lastName}`;
      }
    }
  }
);

export { Coordinator };