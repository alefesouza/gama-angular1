import { Action } from '@ngrx/store';
import { Todo } from '../../todo.service';

export class LoadTodosAction implements Action {
  readonly type = 'LOAD_TODOS';
}

export class SetTodosAction implements Action {
  readonly type = 'SET_TODOS';

  constructor(public payload: Todo[]) {}
}

export class AddTodoAction implements Action {
  readonly type = 'ADD_TODO';

  constructor(public payload: Todo) {}
}

export class DeleteTodoAction implements Action {
  readonly type = 'DELETE_TODO';

  constructor(public payload: {
    id: number
  }) {}
}

export type TodoTypes = LoadTodosAction | SetTodosAction | AddTodoAction | DeleteTodoAction;
