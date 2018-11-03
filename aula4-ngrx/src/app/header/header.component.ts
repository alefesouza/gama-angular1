import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { MessageState } from '../store/reducers/messages.reducer';
import { Observable } from 'rxjs';
import { pluck } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  messageCount$: Observable<number>;

  constructor(
    private store: Store<MessageState>
  ) {
    this.messageCount$ = store
      .select('messages')
      .pipe(
        pluck('messagesList', 'length')
      );
  }

  ngOnInit() {
  }

}
