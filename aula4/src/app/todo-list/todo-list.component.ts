import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AuthState } from '../store/reducers/auth.reducer';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  todos$: Observable<Todo[]>;

  constructor(
    private todoService: TodoService,
    private afAuth: AngularFireAuth
  ) {
    afAuth.user.subscribe(v => {
      if (v !== null) {
        this.todos$ = todoService.getTodos(v.uid);
      }
    });
  }

  ngOnInit() {
  }

}
