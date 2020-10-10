import { Component } from '@angular/core';
import {TodoService} from '../todo.service';

@Component({
  selector: 'app-todo-input',
  templateUrl: './todo-input.component.html',
  styleUrls: ['./todo-input.component.scss']
})
export class TodoInputComponent {
    newTodo = '';

    constructor(
      private todoService: TodoService
    ) {}

    addTodo(): void {
      this.todoService.addTodo(this.newTodo);
    }


}
