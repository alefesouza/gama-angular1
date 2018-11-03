import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AuthState } from '../store/reducers/auth.reducer';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {
  todo: Todo = {
    id: 0,
    finished: false,
    title: '',
    description: '',
    date: '',
    userId: '',
  };

  constructor(
    private todoService: TodoService,
    private state: Store<AuthState>,
    private router: Router
  ) {
    state.select('auth').subscribe(v => {
      if (v.user) {
        this.todo.userId = v.user.localId;
      }
    });
  }

  ngOnInit() {
  }

  onFormSend() {
    this.todoService.addTodo(this.todo)
    .subscribe(valor => {
      console.log(valor);
      alert('To-Do adicionado com sucesso');

      this.router.navigateByUrl('/todos');
    }, error => {
      alert('Erro ao adicionar');
    });
  }

}
