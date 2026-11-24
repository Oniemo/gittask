import { DataTypes } from 'sequelize';
import sequelize from '../db.js';

const Book = sequelize.define('Book', {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  author: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  year: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
}, {
  tableName: 'books',
  timestamps: true,
});

export default Book;
