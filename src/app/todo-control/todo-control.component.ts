import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TodoElementModel } from '../todos-element/todos-element.model';

@Component({
  selector: 'app-todo-control',
  templateUrl: './todo-control.component.html',
  styleUrls: ['./todo-control.component.scss']
})

export class TodoControlComponent implements OnInit {
  @Input() todo: TodoElementModel;
  @Output() removeTodo: EventEmitter<any>;

  constructor() {
    this.removeTodo = new EventEmitter();
  }

  ngOnInit() {
  }

  remove() {
    console.log('remove');
    this.removeTodo.emit(this.todo);
  }
}
