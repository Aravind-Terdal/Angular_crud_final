import { Component, OnInit } from '@angular/core';
import { Itodo } from 'src/app/shared/model/todo';
import { TodoService } from 'src/app/shared/services/todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

    todosData ! : Array<Itodo>

  constructor(
    private _todoServices : TodoService
  ) { }

  ngOnInit(): void {
    this.todosData = this._todoServices.fetchAllTodo() 
  }

  onRemoveTodo(todo : Itodo){
    this._todoServices.removeTodo(todo);
  }

}
