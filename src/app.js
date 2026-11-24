import express from 'express';
import sequelize from './db.js';
import bookRoutes from './routes/books.js';

const app = express();

app.use(express.json());
app.use('/api/books', bookRoutes);

sequelize.sync()
  .then(() => console.log('База данных синхронизирована'))
  .catch((err) => console.error('Ошибка синхронизации:', err));

export default app;
