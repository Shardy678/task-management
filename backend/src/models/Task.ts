import { v4 as uuidv4 } from 'uuid';

class Task {
  public id: string;
  public title: string;
  public description: string;
  public status: 'todo' | 'in-progress' | 'done';

  constructor(title: string, description: string) {
    this.id = uuidv4();
    this.title = title;
    this.description = description;
    this.status = 'todo';
  }

  update(data: Partial<Task>): void {
    if (data.title) this.title = data.title;
    if (data.description) this.description = data.description;
    if (data.status) this.status = data.status;
  }
}

export default Task;