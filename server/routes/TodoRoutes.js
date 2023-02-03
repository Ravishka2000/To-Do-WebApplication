import express from 'express';
import TodoController from '../controllers/TodoController';

const router = express.Router();

router.get('/create', TodoController.createTodo);

export default router;