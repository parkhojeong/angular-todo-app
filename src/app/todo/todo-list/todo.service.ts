import {Injectable} from '@angular/core';
import {TodoItem} from "../../todo-item";

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor() {
  }

  allItems: TodoItem[] = [];

  getItems() {
    return this.allItems;
  }

  addItem(description: string) {
    const newItem: TodoItem = {description, done: false};
    this.allItems = [newItem, ...this.allItems];
  }
}
