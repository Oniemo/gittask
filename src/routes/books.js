import { Router } from 'express';
import Book from '../models/book.js';

const router = Router();

// GET /api/books — список всех книг
router.get('/', async (req, res) => {
  try {
    const books = await Book.findAll();
    res.json(books);
  } catch (err) {
    res.status(500).json({ message: 'Ошибка при получении списка книг' });
  }
});

export default router;
