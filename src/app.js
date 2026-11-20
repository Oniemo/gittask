
const express = require('express');
const sequelize = require('./db');
const bookRoutes = require('./routes/books');

const app = express();

app.use(express.json());
app.use('/api/books', bookRoutes);

sequelize.sync()
  .then(() => console.log('База данных синхронизирована'))
  .catch((err) => console.error('Ошибка синхронизации:', err));
  
const Book = require('./models/book');
(async () => {
  await Book.bulkCreate([
    { title: 'Мастер и Маргарита', author: 'М. Булгаков', year: 1967 },
    { title: 'Преступление и наказание', author: 'Ф. Достоевский', year: 1866 },
  ]);
})();

module.exports = app;