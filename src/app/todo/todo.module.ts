import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TodoComponent} from "./todo.component";
import {TodoListComponent} from "../todo-list/todo-list.component";

@NgModule({
  declarations: [TodoComponent, TodoListComponent],
  imports: [
    CommonModule
  ],
  exports: [
    TodoComponent
  ]
})
export class TodoModule { }
