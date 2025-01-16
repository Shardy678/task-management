import express from 'express';
import TaskController from '../controllers/TaskController'
import { checkJwt } from '../middleware/authMiddleware';

const router = express.Router()

router.get('/', checkJwt, TaskController.getAllTasks);
router.post('/', checkJwt, TaskController.createTask);
router.put('/:id', checkJwt, TaskController.updateTask);
router.delete('/:id', checkJwt, TaskController.deleteTask);

export default router;
