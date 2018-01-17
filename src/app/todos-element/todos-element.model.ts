export class TodoElementModel {
  todoText: string;
  finished: boolean;
  edit: boolean;

  constructor(todoText: string, finished: boolean) {
    this.todoText = todoText;
    this.finished = finished;
    this.edit = false;
  }
}
