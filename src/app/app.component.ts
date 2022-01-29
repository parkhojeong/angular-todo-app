import {Component} from '@angular/core';
import {TodoItem} from "./todo-item";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-todo-app';

  allItems: TodoItem[] = [
    {description: 'eat', done: true},
    {description: 'sleep', done: false},
  ];

  get items() {
    return this.allItems;
  }

  addItem(description: string) {
    const newItem: TodoItem = {description, done: false};
    this.allItems = [newItem, ...this.allItems];
  }
}
