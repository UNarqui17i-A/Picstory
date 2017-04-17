import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from '@angular/router';
import { AuthenticationService } from './auth.service';
@Component({
  selector: 'app-login-app',
  templateUrl: './login-app.component.html',
  styleUrls: ['./login-app.component.css'],
  providers: [AuthenticationService]
})
export class LoginAppComponent implements OnInit {

  loginForm: FormGroup;
  response: string;
  error: string;
  constructor(private fb: FormBuilder,
              private authenticationService: AuthenticationService,
              private router: Router
              ) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      username: [null, Validators.compose([Validators.minLength(5), Validators.required])],
      password: [null, Validators.compose([Validators.minLength(8),Validators.required])]
    })
  }

  loginUser(formValue: any, event: Event){
    let username = formValue.controls['username'].value
    let password = formValue.controls['password'].value
    this.authenticationService.login(username, password)
      .subscribe(result => {
        if (result === true) {
          this.router.navigate(['/home', this.authenticationService.id]);
        } else {
          this.error = 'Username or password is incorrect';
        }
      });
  }

}
