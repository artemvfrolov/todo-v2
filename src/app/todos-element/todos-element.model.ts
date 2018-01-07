export class TodoElementModel {
  todoText: string;
  finished: boolean;

  constructor(todoText: string, finished: boolean) {
    this.todoText = todoText;
    this.finished = finished;
  }

  changeTodoStatus() {
    this.finished = !this.finished;
  }
}
