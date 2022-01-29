import {Component} from '@angular/core';
import {TodoService} from "./todo-list/todo.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-todo-app';

  constructor(private todoListService: TodoService) {
  }

  get items() {
    return this.todoListService.getItems()
  }

  addItem(description: string) {
    this.todoListService.addItem(description);
  }
}
