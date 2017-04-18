import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ ]
})
export class AppComponent {
  user = JSON.parse(localStorage.getItem('currentUser'));
  constructor( ){}

  logOut() {
    localStorage.removeItem(this.user);
  }
}
