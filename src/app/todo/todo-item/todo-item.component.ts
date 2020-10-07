import {Component, Input} from '@angular/core';
import {TodoService} from '../todo.service';

interface ITodo {
  id: number;
  name: string;
  condition: boolean;
}

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})

export class TodoItemComponent {

  @Input() todo: ITodo;

  constructor(
    private todoService: TodoService
  ) {
  }

  deleteTodo(): void {
    this.todoService.deleteTodo(this.todo.id);
  }
}
