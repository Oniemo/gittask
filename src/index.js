import express from 'express';
import usersRouter from './routes/users.js';
import { sequelize } from './config/database.js';

const app = express();
app.use(express.json());

app.use('/api/users', usersRouter);

const PORT = process.env.PORT || 3000;

const startServer = async () => {
  try {
    await sequelize.sync(); // Создаст таблицы при первом запуске
    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:\${PORT}`);
    });
  } catch (err) {
    console.error('Failed to start server:', err);
  }
};

startServer();
