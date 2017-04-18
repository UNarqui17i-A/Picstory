import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../login/login-app/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-ps',
  templateUrl: './header-ps.component.html',
  styleUrls: ['./header-ps.component.css'],
  providers: [AuthenticationService]
})
export class HeaderPsComponent implements OnInit {

  public isAuth: boolean;


  constructor(private authenticationService: AuthenticationService, private router: Router) {
    this.isAuth = true;
  }

  public isCollapsed: boolean = false;

  ngOnInit() {
    if (this.authenticationService.token != null) {
      this.isAuth = false;
    }
  }

  public redirect(){
    this.router.navigate(['']);
  }

  public eraseToken() {
    this.authenticationService.logout();
    console.log(this.authenticationService.token);
  }
}
