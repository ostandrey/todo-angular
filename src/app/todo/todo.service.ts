import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {ITodo} from './todo.interface';

const todoItemsList: ITodo[] = [];
let todoIdCounter = 0;
let isDone = false;

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
      id: todoIdCounter,
      name: newTodo,
      isDone
    };
    todoItemsList.push(todoItem);
    this._todoItems.next(todoItemsList);
    console.log(todoItemsList);
    todoIdCounter++;
  }

  deleteTodo(id: number): void {
    const indexTodo = todoItemsList.findIndex((todo: ITodo) => {
      return todo.id === id;
    });
    todoItemsList.splice(indexTodo, 1);
    this._todoItems.next(todoItemsList);
  }

  updateTodo(id: number, status: boolean): void {
    const indexTodo = todoItemsList.findIndex((todo: ITodo) => {
      return todo.id === id;
    });
    todoItemsList[indexTodo].isDone = status;
    this._todoItems.next(todoItemsList);
  }
}
