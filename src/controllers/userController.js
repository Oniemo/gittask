import {
  listUsers,
  getUser,
  addUser,
  editUser,
  deleteUser,
} from '../services/userService.js';

export const getAll = async (req, res) => {
  try {
    const users = await listUsers();
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getOne = async (req, res) => {
  try {
    const user = await getUser(Number(req.params.id));
    res.json(user);
  } catch (err) {
    res.status(err.message === 'User not found' ? 404 : 500).json({ error: err.message });
  }
};

export const create = async (req, res) => {
  try {
    const user = await addUser(req.body);
    res.status(201).json(user);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const update = async (req, res) => {
  try {
    const user = await editUser(Number(req.params.id), req.body);
    res.json(user);
  } catch (err) {
    res.status(err.message === 'User not found' ? 404 : 400).json({ error: err.message });
  }
};

export const remove = async (req, res) => {
  try {
    await deleteUser(Number(req.params.id));
    res.status(204).send();
  } catch (err) {
    res.status(err.message === 'User not found' ? 404 : 500).json({ error: err.message });
  }
};
