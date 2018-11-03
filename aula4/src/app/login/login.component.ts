import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Store } from '@ngrx/store';
import { AuthState } from '../store/reducers/auth.reducer';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email =  '';
  senha = '';

  constructor(
    private authService: AuthService,
    private store: Store<AuthState>
  ) {
    store.select('auth').subscribe((v) => {
      console.log(v);
    });
  }

  onSubmitClick() {
    this.authService.logIn(this.email, this.senha)
      .subscribe((v: any) => {
        localStorage.setItem('userToken', v.idToken);

        this.store.dispatch({
          type: 'SET_USER',
          payload: {
            token: v.idToken,
            user: {
              email: v.email,
              localId: v.localId,
            }
          },
        });

        alert('Usuário logado com sucesso');
      }, error => {
        console.log(error);

        switch (error.error.error.message) {
          case 'EMAIL_NOT_FOUND':
            alert('E-mail não encontrado');
          break;
          case 'INVALID_PASSWORD':
            alert('Senha inválida');
          break;
          case 'USER_DISABLED':
            alert('Usuário desabilitado');
          break;
          default:
            alert('Houve um erro');
          break;
        }
      });
  }


  ngOnInit() {
  }
}
