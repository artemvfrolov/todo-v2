import { Injectable } from '@angular/core';
import { TodoElementModel } from '../todos-element/todos-element.model';

@Injectable()
export class TodoStoreService {
  todoStore: TodoElementModel[];

  constructor(newStore: TodoElementModel[]) {
    console.log('TodoStoreService constructor');
    this.todoStore = newStore;
  }

  addNewTodo(todotext: HTMLInputElement) {
    if (todotext.value) {
      this.todoStore.push(new TodoElementModel(todotext.value, false));
      todotext.value = '';
    }
  }

  removeTodoElement(todo: TodoElementModel) {
    const pos = this.todoStore.indexOf(todo);
    this.todoStore.splice(pos, 1);
  }

  changeTodoElementStatus(todo: TodoElementModel) {
    const pos = this.todoStore.indexOf(todo);
    this.todoStore[pos].finished = !this.todoStore[pos].finished;
  }

  editTodoElement(data: object) {
    const pos = this.todoStore.indexOf(data[1]);
    this.todoStore[pos].todoText = data[0];
  }
}

