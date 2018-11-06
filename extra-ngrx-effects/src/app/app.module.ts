import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ChatComponent } from './chat/chat.component';
import { HeaderComponent } from './header/header.component';

import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { messagesReducer } from './store/reducers/messages.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoEffects } from './store/effects/todos.effects';
import { todosReducer } from './store/reducers/todos.reducer';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ChatComponent,
    HeaderComponent,
    TodoListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    StoreModule.forRoot({
      todos: todosReducer,
      messages: messagesReducer,
    }),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
    }),
    EffectsModule.forRoot([TodoEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
