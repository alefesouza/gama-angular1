import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }

  signUp(email: string, senha: string) {
    return this.http.post('https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyD-4Dbg_3Xw32erCdzjX9v9lADwEIurV-Y', {
      email: email,
      password: senha,
    });
  }

  logIn(email: string, senha: string) {
    return this.http.post('https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyD-4Dbg_3Xw32erCdzjX9v9lADwEIurV-Y', {
      email: email,
      password: senha,
    });
  }

  checkToken(idToken: string) {
    return this.http.post('https://www.googleapis.com/identitytoolkit/v3/relyingparty/getAccountInfo?key=AIzaSyD-4Dbg_3Xw32erCdzjX9v9lADwEIurV-Y', {
      idToken: idToken,
    });
  }

}
