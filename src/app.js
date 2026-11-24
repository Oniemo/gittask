import express from 'express';
import sequelize from './db.js';
import bookRoutes from './routes/books.js';
import path from 'path'
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const app = express();

app.use(express.static(path.join(__dirname, '..', 'public')));

app.use(express.json());
app.use('/api/books', bookRoutes);

sequelize.sync()
  .then(() => console.log('База данных синхронизирована'))
  .catch((err) => console.error('Ошибка синхронизации:', err));

export default app;
