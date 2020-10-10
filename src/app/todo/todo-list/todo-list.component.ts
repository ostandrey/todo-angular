import { Component, OnInit } from '@angular/core';
import {ITodo} from '../todo.interface';
import {Observable} from 'rxjs';
import {TodoService} from '../todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit{

  todos$: Observable<ITodo[]>;

  constructor(
    private todoService: TodoService
  ) {}

  ngOnInit(): void {
    this.todos$ = this.todoService.todoItems;
  }

  returnTodoItems(value): void {
    this.todoService.returnTodoItems(value);
    console.log(value);

  }
}
