import Task from '../models/Task';

class TaskFactory {
  static createTask(title?: string, description?: string): Task {
    return new Task(title ?? 'Untitled Task', description ?? '');
  }
}

export default TaskFactory;