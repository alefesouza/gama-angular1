import { Effect, Actions } from '@ngrx/effects';
import { switchMap, map } from 'rxjs/operators';
import { TodoService } from 'src/app/todo.service';
import { Injectable } from '@angular/core';
import { SetTodosAction } from '../actions/todos.actions';

@Injectable()
export class TodoEffects {

  constructor(
    private actions$: Actions,
    private todoService: TodoService
  ) {
  }

  @Effect()
  loadTodos$ = this.actions$
    .ofType('LOAD_TODOS')
    .pipe(
      switchMap(() => this.todoService.getTodos().pipe(
        map(todos => { console.log(todos); return new SetTodosAction(todos); })
      ))
    );

}
