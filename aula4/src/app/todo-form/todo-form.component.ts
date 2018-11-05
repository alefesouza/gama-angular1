import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent {
  todo: Todo = {
    id: '',
    finished: false,
    title: '',
    description: '',
    date: '',
    userId: '',
  };

  constructor(
    private todoService: TodoService,
    private router: Router,
    private afAuth: AngularFireAuth
  ) {
    afAuth.user.subscribe(v => {
      if (v !== null) {
        this.todo.userId = v.uid;
      }
    });
  }

  onFormSend() {
    this.todoService.addTodo(this.todo)
      .then(valor => {
        console.log(valor);
        alert('To-Do adicionado com sucesso');

        this.router.navigateByUrl('/todos');
      }, error => {
        alert('Erro ao adicionar');
      });
  }

}
