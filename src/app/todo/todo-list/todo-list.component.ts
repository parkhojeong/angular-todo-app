import {Component, Input, OnInit} from '@angular/core';
import {TodoItem} from "../../todo-item";

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() items: TodoItem[] = [];
}
