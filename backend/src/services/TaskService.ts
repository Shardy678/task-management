import TaskFactory from '../factories/TaskFactory';
import Task from '../models/Task';

class TaskService {
  private static tasks: Task[] = [];

  static getTasks(): Task[] {
    return this.tasks;
  }

  static createTask(data: Partial<Task>): Task {
    const newTask = TaskFactory.createTask(data.title, data.description);
    this.tasks.push(newTask);
    return newTask;
  }

  static updateTask(id: string, data: Partial<Task>): Task | undefined {
    const task = this.tasks.find(t => t.id === id);
    if (task) {
      task.update(data);
    }
    return task;
  }

  static deleteTask(id: string): void {
    this.tasks = this.tasks.filter(t => t.id !== id);
  }
}

export default TaskService;