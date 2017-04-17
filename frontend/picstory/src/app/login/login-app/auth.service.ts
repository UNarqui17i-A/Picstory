/**
 * Created by crow on 16/04/17.
 */
import {Response} from "@angular/http";
import {Observable} from "rxjs";
import {RestService} from "./rest.service";
import { Injectable } from '@angular/core';
import "rxjs/add/operator/map";

@Injectable()
export class AuthenticationService{
  public token: string;
  public id: string;

  constructor(private restService: RestService){
    //sets
    var currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.token = currentUser && currentUser.token;
    this.id = "";
  }
  login(username: string, password: string): Observable<boolean> {
    return this.restService.postSignUp(JSON.stringify({ username: username, password: password }))
      .map((response: Response) => {
        // login successful if there's a jwt token in the response
        let token = response.json() && response.json().token;
        if (token) {
          // set token property
          this.token = token;
          this.id = response.json().user;

          // store username and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem('currentUser', JSON.stringify({ username: username, token: token }));

          // return true to indicate successful login
          return true;
        } else {
          // return false to indicate failed login
          return false;
        }
      });
  }
  logout(): void {
    // clear token remove user from local storage to log user out
    this.token = null;
    localStorage.removeItem('currentUser');
  }
}
