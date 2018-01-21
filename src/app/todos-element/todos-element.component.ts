import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {TodoElementModel} from './todos-element.model';

@Component({
  selector: 'app-todos-element',
  templateUrl: './todos-element.component.html',
  styleUrls: ['./todos-element.component.scss']
})

export class TodosElementComponent implements OnInit {
  @Input() todo: TodoElementModel;
  @Output() removeTodoElement = new EventEmitter();
  @Output() changeTodoElementStatus = new EventEmitter();
  @Output() editTodoElement = new EventEmitter();

  constructor() {
    console.log('TodosElementComponent constructor');
  }

  ngOnInit() {
  }

  removeTodo(todo: TodoElementModel) {
    this.removeTodoElement.emit(todo);
  }

  changeTodoStatus(todo: TodoElementModel) {
    this.changeTodoElementStatus.emit(todo);
  }

  edit(todo: TodoElementModel) {
    todo.edit = !todo.edit;
  }

  editTodo(todoText: HTMLInputElement, todo: TodoElementModel) {
    this.editTodoElement.emit([todoText.value, todo]);
    todo.edit = false;
    return false;
  }

  blurEditTodo(todoText: HTMLInputElement, todo: TodoElementModel) {
    console.log('blurEditTodo');
    this.editTodoElement.emit([todoText.value, todo]);
    todo.edit = false;
    return false;
  }
}
