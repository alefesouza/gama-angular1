import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Store } from '@ngrx/store';
import { AuthState } from '../store/reducers/auth.reducer';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email =  '';
  senha = '';

  constructor(
    private afAuth: AngularFireAuth
  ) {
    afAuth.user.subscribe((v) => {
      console.log(v);
    });
  }

  onSubmitClick() {
    this.afAuth.auth.signInWithEmailAndPassword(this.email, this.senha)
      .then((v: any) => {
        console.log(v);
        alert('Usuário logado com sucesso');
      }, error => {
        switch (error.code) {
          case 'auth/user-not-found':
            alert('Usuário não encontrado');
          break;
          case 'auth/wrong-password':
            alert('Senha inválida');
          break;
          case 'auth/user-disabled':
            alert('Usuário desabilitado');
          break;
          default:
            alert('Houve um erro');
          break;
        }
      });
  }

  onFacebookButtonClick() {
    const provider = new firebase.auth.FacebookAuthProvider();

    this.afAuth.auth
      .signInWithPopup(provider)
      .then(v => {
        console.log(v);
        alert('Usuário logado com sucesso via Facebook');
      }, error => {
        console.log(error);
        alert('Erro ao fazer login');
      });
  }
}
