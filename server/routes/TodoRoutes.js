import express from 'express';
import TodoController from '../controllers/TodoController.js';

const router = express.Router();

router.post('/create', TodoController.createTodo);
router.get('/', TodoController.readTodos);
router.get('/update/:id', TodoController.readTodos);


export default router;