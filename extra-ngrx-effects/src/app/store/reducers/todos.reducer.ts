import { ActionReducer } from '@ngrx/store';
import { Todo } from 'src/app/todo.service';
import { TodoTypes } from '../actions/todos.actions';

export interface TodoState {
  todos: Todo[];
  loading: boolean;
}

const initialState = {
  todos: [],
  loading: false,
};

export const todosReducer: ActionReducer<TodoState> = (state = initialState, action: TodoTypes) => {
  switch (action.type) {
    case 'LOAD_TODOS':
      state = {
        ...state,
        loading: true,
      };
    break;
    case 'SET_TODOS':
      state = {
        ...state,
        todos: action.payload,
        loading: false,
      };
    break;
    case 'ADD_TODO':
      state = {
        ...state,
        todos: [ action.payload, ...state.todos ],
      };
    break;
    case 'DELETE_TODO':
      const todos = state.todos.filter(t => t.id !== action.payload.id);

      state = {
        ...state,
        todos,
      };
    break;
  }

  return state;
};
