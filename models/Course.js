import { DataTypes } from 'sequelize';
import { db } from '../db.js';

const Course = db.define(
  'Course',
  {
    courseId: {
      type: DataTypes.STRING,
      primaryKey: true
    },

    courseName: {
      type: DataTypes.STRING
    },

    id: {
      type: DataTypes.VIRTUAL,
      get() {
        return this.courseId.slice(-3);
      }
    }
  }
);

export { Course };