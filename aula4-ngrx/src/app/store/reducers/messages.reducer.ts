import { ActionReducer } from '@ngrx/store';
import { MessageTypes } from '../actions/messages.actions';

export interface MessageState {
  messagesList: {
    text: string;
    date: Date;
  }[];
  loading: boolean;
}

const initialState = {
  messagesList: [],
  loading: false,
};

export const messagesReducer: ActionReducer<MessageState> = (state = initialState, action: MessageTypes) => {

  switch (action.type) {
    case 'ADD_MESSAGE':
      state = {
        ...state,
        messagesList: [ action.payload, ...state.messagesList ]
      };
    break;
    case 'DELETE_MESSAGE':
      const messages = [...state.messagesList];
      messages.splice(action.payload.indice, 1);

      state = {
        ...state,
        messagesList: messages,
      };
    break;
  }

  return state;
};
