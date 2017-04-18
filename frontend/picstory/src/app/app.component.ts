import { Component, OnInit } from '@angular/core'; 
import { AuthenticationService } from '../../login/login-app/auth.service'; 
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ AuthenticationService]
})
export class AppComponent {
   public isAuth: boolean; 
 
 
  constructor(private authenticationService: AuthenticationService, private router: Router) { 
    this.isAuth = true; 
  } 
  ngOnInit() { 
    if (this.authenticationService.token != null) { 
      this.isAuth = false; 
  } 
  public eraseToken() { 
    this.authenticationService.logout(); 
    console.log(this.authenticationService.token); 
  } 
}
