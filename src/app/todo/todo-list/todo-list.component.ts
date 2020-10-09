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

  returnAllTodos(): void {
    this.todoService.returnAllTodos();
  }

  returnActiveTodos(): void {
    this.todoService.returnActiveTodos();
  }

  returnDoneTodos(): void {
    this.todoService.returnDoneTodos();
  }
}
