import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { MessageState } from '../store/reducers/messages.reducer';
import { AddMessageAction, DeleteMessageAction } from '../store/actions/messages.actions';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  messageText = '';
  messagesList = [];

  constructor(
    private store: Store<MessageState>
  ) {
    store.select('messages').subscribe(v => {
      console.log(v);
      this.messagesList = v.messagesList;
    });
  }

  ngOnInit() {
  }

  onSendClick() {
    console.log(this.messageText);
    this.store.dispatch(new AddMessageAction({
      text: this.messageText,
      date: new Date(),
    }));

    this.messageText = '';
  }

  deleteMessage(i: number) {
    this.store.dispatch(new DeleteMessageAction({
      indice: i,
    }));
  }

}
