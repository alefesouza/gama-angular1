import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ContadorComponent } from './contador/contador.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { HttpClientModule } from '@angular/common/http';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { CepDetailsComponent } from './cep-details/cep-details.component';
import { CepExibicaoComponent } from './cep-exibicao/cep-exibicao.component';
import { CepBuscaComponent } from './cep-busca/cep-busca.component';
import { FormsModule } from '@angular/forms';
import { TodoFormComponent } from './todo-form/todo-form.component';
import { BoolPipe } from './bool.pipe';
import { LoginComponent } from './login/login.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { StoreModule } from '@ngrx/store';
import { authReducer } from './store/reducers/auth.reducer';

const appRoutes = [{
  path: '', component: HomeComponent,
}, {
  path: 'todos', component: TodoListComponent,
}, {
  path: 'todos/add',
  component: TodoFormComponent
}, {
  path: 'login', component: LoginComponent
}, {
  path: 'cadastro', component: CadastroComponent
}, {
  path: 'cep', component: CepBuscaComponent,
}, {
  path: 'cep/:cep', component: CepDetailsComponent,
}, {
  path: '**', redirectTo: ''
}];

@NgModule({
  declarations: [
    AppComponent,
    ContadorComponent,
    TodoListComponent,
    TodoItemComponent,
    HomeComponent,
    CepDetailsComponent,
    CepExibicaoComponent,
    CepBuscaComponent,
    TodoFormComponent,
    BoolPipe,
    LoginComponent,
    CadastroComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    StoreModule.forRoot({
      auth: authReducer,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
