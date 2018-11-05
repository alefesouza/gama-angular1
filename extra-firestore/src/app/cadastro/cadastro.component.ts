import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { AuthState } from '../store/reducers/auth.reducer';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  email = '';
  senha = '';
  confirmPassword = '';

  constructor(
    private authService: AuthService,
    private store: Store<AuthState>
  ) { }

  ngOnInit() {
  }

  onSubmitClick() {
    if (this.senha !== this.confirmPassword) {
      alert('Senhas não coincidem');
      return;
    }

    this.authService.signUp(this.email, this.senha)
      .subscribe((v: any) => {
        console.log(v);

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
      }, error => {
        console.log(error);

        switch (error.error.error.message) {
          case 'EMAIL_EXISTS':
            alert('E-mail já existente');
          break;
          case 'TOO_MANY_ATTEMPTS_TRY_LATER':
            alert('Muitas tentativas, tente novamente mais tarde');
          break;
          case 'WEAK_PASSWORD':
            alert('A senha deve ter no mínimo 6 caracteres');
          break;
          default:
            alert('Houve um erro');
          break;
        }
      });
  }

}


