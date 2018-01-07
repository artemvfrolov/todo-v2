import {Component, Input, OnInit} from '@angular/core';
import {TodoElementModel} from './todos-element.model';

@Component({
  selector: 'app-todos-element',
  templateUrl: './todos-element.component.html',
  styleUrls: ['./todos-element.component.scss']
})

export class TodosElementComponent implements OnInit {
  @Input() todo: TodoElementModel;

  constructor() {
  }

  ngOnInit() {
  }
}
