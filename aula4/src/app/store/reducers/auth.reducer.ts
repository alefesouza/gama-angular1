import { ActionReducer } from '@ngrx/store';
import { AuthService } from 'src/app/auth.service';

export interface AuthState {
  user: {
    localId: string,
    email: string,
  };
  token: string;
}

const initialState = {
  user: null,
  token: null,
};

export function authReducer (state = initialState, action: any) {

  switch (action.type) {
    case 'SET_USER':
    state = {
      ...state,
      ...action.payload,
    };
    break;
    case 'LOGOUT':
    state = {
      user: null,
      token: null,
    };
    break;
  }

  return state;
}
