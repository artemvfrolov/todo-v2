import { Component, Input } from '@angular/core';
import { TodoElementModel } from '../todos-element/todos-element.model';

@Component({
  selector: 'app-todos-list',
  templateUrl: './todos-list.component.html',
  styleUrls: ['./todos-list.component.scss']
})

export class TodosListComponent {
  @Input() todosList: TodoElementModel[];


}
