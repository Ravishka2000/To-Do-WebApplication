import express from 'express';
import TodoController from '../controllers/TodoController.js';

const router = express.Router();

router.post('/create', TodoController.createTodo);
router.get('/', TodoController.readTodos);
router.get('/get/:id', TodoController.getTodo);
router.put('/update/:id', TodoController.updateTodo);
router.patch('/update-completed/:id', TodoController.updateCompleted);
router.delete('/delete/:id', TodoController.deleteTodo);

export default router;