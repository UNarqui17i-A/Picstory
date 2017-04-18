import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: []
})
export class AppComponent {

  constructor( ){ }

  logOut() {
    localStorage.removeItem('current');
    localStorage.removeItem('token');
  }

  isLogged() {
    return localStorage.getItem('current') ? true : false;
  }

  getCurrentUser() {
    return localStorage.getItem('current');
  }
}
