import { Request, Response } from 'express';
import TaskService from '../services/TaskService';

class TaskController {
  static getAllTasks(req: Request, res: Response) {
    const tasks = TaskService.getTasks();
    res.json(tasks);
  }

  static createTask(req: Request, res: Response) {
    const task = TaskService.createTask(req.body);
    res.status(201).json(task);
  }

  static updateTask(req: Request, res: Response) {
    const updatedTask = TaskService.updateTask(req.params.id, req.body);
    res.json(updatedTask);
  }

  static deleteTask(req: Request, res: Response) {
    TaskService.deleteTask(req.params.id);
    res.status(204).send();
  }
}

export default TaskController;