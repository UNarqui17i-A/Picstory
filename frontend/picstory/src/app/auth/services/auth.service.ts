import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { Observable } from 'rxjs';
import { RestService } from './rest.service';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {

  public token: string;
  public user: any;

  constructor(private restService: RestService) {
    let currentUser = JSON.parse(localStorage.getItem('user'));
    this.token = null;

    if (currentUser) {
      this.token = localStorage.getItem('token');
    }
    this.user = {};
  }

  attemptLogin(username: string, password: string): Observable<boolean> {
    return this.restService.post('auth/login', { username: username, password: password })
      .map((response: Response) => {
        let token = response.json() && response.json().token;

        if (token) {
          this.token = token;
          this.user = response.json().user;

          localStorage.setItem('current', JSON.stringify(this.user));
          localStorage.setItem('token', token);

          return true;
        } else {
          return false;
        }
      });
  }

  logout(): void {
    this.token = null;
    localStorage.removeItem('current');
  }

}
