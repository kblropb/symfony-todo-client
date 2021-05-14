import { Component, OnInit } from '@angular/core';
import { faEye, faTrash, faPlus } from '@fortawesome/free-solid-svg-icons';
import {Todo, TodoService} from "../todo.service";

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.less']
})
export class TodosComponent implements OnInit {
  faEye = faEye;
  faTrash = faTrash;
  faPlus = faPlus;
  todos: Todo[];
  errorMessage: string;

  constructor(private todoService: TodoService) {
    this.todos = [];
    this.errorMessage = "";
  }

  ngOnInit(): void {
    this.getTodos();
  }

  getTodos() {
    return this.todoService
      .getTodos()
      .subscribe(
        todos => this.todos = todos,
        error => this.errorMessage = <any>error
      );
  }
}
