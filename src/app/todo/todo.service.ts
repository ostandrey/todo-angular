import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {ITodo} from './todo.interface';

const todoItemsList: ITodo[] = [];
let todoIdCounter = 0;

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
      isDone: false
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

  returnTodoItems(value: string): void {
    switch (value) {
      case 'active':
        const activeTodos = todoItemsList.filter((todo: ITodo) => {
          return !todo.isDone;
        });
        this._todoItems.next(activeTodos);
        break;
      case 'done':
        const doneTodos = todoItemsList.filter((todo: ITodo) => {
          return todo.isDone;
        });
        this._todoItems.next(doneTodos);
        break;
      default:
        this._todoItems.next(todoItemsList);
    }
  }

  returnSortingTodoItems(value: string): void {
    if (value === 'descending') {
      const descendingTodos = todoItemsList.sort((a: ITodo , b: ITodo) => {
        if (a.name < b.name) {
          return 1;
        }
      });
      this._todoItems.next(descendingTodos);
    }
    if (value === 'ascending') {
      const ascendingTodos = todoItemsList.sort((a: ITodo , b: ITodo) => {
        if (a.name > b.name) {
          return 1;
        }
      });
      this._todoItems.next(ascendingTodos);
    }
  }
}
