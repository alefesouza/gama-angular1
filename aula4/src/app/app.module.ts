import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ContadorComponent } from './contador/contador.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { HttpClientModule } from '@angular/common/http';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { TodoFormComponent } from './todo-form/todo-form.component';
import { BoolPipe } from './bool.pipe';
import { LoginComponent } from './login/login.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { StoreModule } from '@ngrx/store';
import { authReducer } from './store/reducers/auth.reducer';
import { AuthGuard } from './auth.guard';

const appRoutes: Routes = [{
  path: '', component: HomeComponent,
}, {
  path: 'todos', component: TodoListComponent, canActivate: [AuthGuard]
}, {
  path: 'todos/add',
  component: TodoFormComponent, canActivate: [AuthGuard]
}, {
  path: 'todos/:id/edit', component: TodoFormComponent, canActivate: [AuthGuard]
}, {
  path: 'login', component: LoginComponent
}, {
  path: 'cadastro', component: CadastroComponent
}, {
  path: 'cep', loadChildren: '../cep/cep.module#CepModule',
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
