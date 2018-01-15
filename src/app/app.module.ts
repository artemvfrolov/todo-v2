import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { TodoComponent } from './todo/todo.component';
import { TodosListComponent } from './todos-list/todos-list.component';
import { TodoControlComponent } from './todo-control/todo-control.component';
import { TodosElementComponent } from './todos-element/todos-element.component';


@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    TodosListComponent,
    TodoControlComponent,
    TodosElementComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
