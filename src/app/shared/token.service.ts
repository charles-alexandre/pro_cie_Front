import { Injectable } from '@angular/core';
import { loginResponse } from '../private/model/loginResponse';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { }

  getToken(): string {
    if (sessionStorage.getItem('token')) {
      return JSON.parse(sessionStorage.getItem('token')).id;
    } else {
      return '';
    }
  }

  getUserId(): number {
    if (sessionStorage.getItem('token')) {
      return JSON.parse(sessionStorage.getItem('token')).userId;
    } else {
      return undefined;
    }
  }

  setToken(token: loginResponse) {
    sessionStorage.setItem('token', JSON.stringify(token));
  }

  deleteToken() {
    sessionStorage.removeItem('token');
  }
}
