import checkJwt from '../middleware/auth';
import express from 'express';
import TaskController from '../controllers/TaskController'
const router = express.Router()

router.get('/', checkJwt, TaskController.getAllTasks);
router.post('/', checkJwt, TaskController.createTask);
router.put('/:id', checkJwt, TaskController.updateTask);
router.delete('/:id', checkJwt, TaskController.deleteTask);

export default router;
