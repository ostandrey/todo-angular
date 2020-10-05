import {Component, Input, OnInit} from '@angular/core';

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

export class TodoItemComponent implements OnInit{

  @Input() todo: ITodo;

  constructor() {
  }

  ngOnInit(): void {
  }
}
