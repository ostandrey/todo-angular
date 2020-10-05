import { Component, OnInit } from '@angular/core';
import {ITodo} from '../todo-input/todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent {

  todos: ITodo[];


}
