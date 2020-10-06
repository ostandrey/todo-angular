import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {ITodo} from './todo.interface';

const todoItemsList: ITodo[] = [];

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  // tslint:disable-next-line:variable-name
  private _todoItems = new BehaviorSubject<ITodo[]>([]);
  public todoItems = this._todoItems.asObservable();
  constructor() { }

  addTodo(newTodo: string): void {
    const todoItem = {
      id: 0,
      name: newTodo,
      isDone: false
    };
    todoItemsList.push(todoItem);
    this._todoItems.next(todoItemsList);
  }
}
