import { Component, OnInit } from '@angular/core';
import {TodoService} from "./todo-list/todo.service";

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  constructor(private todoListService: TodoService) {
  }

  ngOnInit(): void {
  }

  get items() {
    return this.todoListService.getItems()
  }

  addItem(description: string) {
    this.todoListService.addItem(description);
  }
}
