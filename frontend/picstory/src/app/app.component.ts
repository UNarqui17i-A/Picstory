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
    let a = localStorage.getItem('current').split(',')[2] // username always in third position
    a = a.split('"').join('')
    return a.substr(9, a.length); // username always in char number 9
  }
}
