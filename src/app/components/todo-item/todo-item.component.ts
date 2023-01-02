import { Component, Input, OnInit } from '@angular/core';

import { TodoModel } from './../../models/todo.model';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {

  @Input() todo!: TodoModel;
  constructor() { }

  ngOnInit(): void {
  }

}
