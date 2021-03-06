/**
 * Created by crow on 16/04/17.
 */
import { Injectable } from '@angular/core';
import {Router, CanActivate} from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private router: Router) { }

  canActivate() {
    if (localStorage.getItem('current')) {
      // logged in so return true
      return true;
    }

    // not logged in so redirect to login page
    console.log('Not logged in');
    this.router.navigate(['auth/signin']);
    return false;
  }
}
