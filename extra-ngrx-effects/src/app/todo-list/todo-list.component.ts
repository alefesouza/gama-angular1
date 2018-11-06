import { Component, OnInit } from '@angular/core';
import { TodoState } from '../store/reducers/todos.reducer';
import { Store } from '@ngrx/store';
import { LoadTodosAction } from '../store/actions/todos.actions';
import { Observable } from 'rxjs';
import { Todo } from '../todo.service';
import { pluck } from 'rxjs/operators';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {
  todos$: Observable<Todo[]>;

  constructor(
    private store: Store<TodoState>
  ) {
    this.todos$ = store.select('todos')
      .pipe(
        pluck('todos')
      );

    store.dispatch(new LoadTodosAction());
  }

}
