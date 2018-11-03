import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { MessageState } from '../store/reducers/messages.reducer';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  messageCount = 0;

  constructor(
    private store: Store<MessageState>
  ) {
    store.select('messages').subscribe((v) => {
      this.messageCount = v.messagesList.length;
    });
  }

  ngOnInit() {
  }

}
