import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { TodoComponent } from './todo/todo.component';
import { TodosElementComponent } from './todos-element/todos-element.component';


@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    TodosElementComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
