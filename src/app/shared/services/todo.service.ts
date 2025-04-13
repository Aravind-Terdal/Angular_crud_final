import { Injectable } from '@angular/core';
import { Itodo } from '../model/todo';
import { UuidService } from './uuid.service';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todoArray :Array<Itodo>= [
    {
      todoItem : 'Angular',
      todoId : '1'
    },
    {
      todoItem : 'JavaScript',
      todoId : '2'
    }
  ]
  constructor(
    private _uuidService : UuidService
  ) { }

  createNewTodo(todo:Itodo){
    this.todoArray.push(todo);
    // console.log(this.todoArray);
  }

  fetchAllTodo():Array<Itodo>{
    return this.todoArray
  }

  removeTodo(obj:Itodo){
    let getIndex = this.todoArray.findIndex(todo => todo.todoId === obj.todoId);
    this.todoArray.splice(getIndex, 1)
  }

}
