import { Component, OnInit } from '@angular/core';
import { TodoElementModel } from '../todos-element/todos-element.model';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})

export class TodoComponent implements OnInit {
  todosList: TodoElementModel[];

  constructor() {
    this.todosList = [
      new TodoElementModel('Поесть', false),
      new TodoElementModel('Посрать', false),
      new TodoElementModel('Поспать', true),
    ];
  }

  ngOnInit() {
  }

  addNewTodo(todotext: HTMLInputElement) {
    if (todotext.value) {
      this.todosList.push(new TodoElementModel(todotext.value, false));
      todotext.value = '';
    }
    return false;
  }

  removeTodoElement(todo) {
    console.log('removeTodoElement');
    const pos = this.todosList.indexOf(todo);
    this.todosList.splice(pos, 1);
  }
}
