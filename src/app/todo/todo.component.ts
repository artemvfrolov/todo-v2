import { Component, OnInit } from '@angular/core';
import { TodoStoreService } from '../service/todo-store.service';
import { TodoElementModel } from '../todos-element/todos-element.model';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})

export class TodoComponent implements OnInit {
  todoStore = new TodoStoreService([
    new TodoElementModel('Поесть', false),
    new TodoElementModel('Посрать', false),
    new TodoElementModel('Поспать', true),
    new TodoElementModel('Почпокаться', true),
  ]);
  todosList: TodoElementModel[];

  constructor() {
    console.log('TodoComponent constructor');
    this.updateStore();
  }

  ngOnInit() {
  }

  addNewTodo(todoText: HTMLInputElement) {
    this.todoStore.addNewTodo(todoText);
    this.updateStore();
    return false;
  }

  removeTodo(todo: TodoElementModel) {
    this.todoStore.removeTodoElement(todo);
  }

  changeTodoStatus(todo: TodoElementModel) {
    this.todoStore.changeTodoElementStatus(todo);
  }

  counter() {
    const result =  this.todosList.filter(((value) => value.finished === true));
    return result.length;
  }

  showAll() {
    this.todosList = this.todoStore.todoStore;
  }

  showFinished() {
    this.todosList = this.todoStore.todoStore.filter(((value) => value.finished === true));
  }

  showInProgress() {
    this.todosList = this.todoStore.todoStore.filter(((value) => value.finished === false));
  }

  updateStore() {
    this.todosList = this.todoStore.todoStore;
  }

  editTodo(data: object) {
    this.todoStore.editTodoElement(data);
  }
}
