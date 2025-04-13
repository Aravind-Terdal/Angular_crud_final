import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TodoService } from 'src/app/shared/services/todo.service';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent implements OnInit {
  @ViewChild('todoForm') todoForm !: NgForm
  constructor(
    private _todoServices : TodoService
  ) { }

  ngOnInit(): void {
  }

  OntodoAdd(){
    if(this.todoForm.valid){
      let newTodo = this.todoForm.value;
      this._todoServices.createNewTodo(newTodo);
      this.todoForm.reset()
      
    }
  }
}
