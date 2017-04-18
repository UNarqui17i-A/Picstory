import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
  providers: [AuthService]
})
export class SigninComponent implements OnInit {

  signinForm: FormGroup;
  message: string;
  error: string;

  constructor(private fb: FormBuilder,
              private authService: AuthService,
              private router: Router,
              private location: Location
              ) { }

  ngOnInit() {
    this.signinForm = this.fb.group({
      username: [null, Validators.compose([Validators.required, Validators.minLength(5)])],
      password: [null, Validators.compose([Validators.required, Validators.minLength(8)])]
    });
  }

  signin(formValue: any, event: Event) {
    let username = formValue.controls['username'].value;
    let password = formValue.controls['password'].value;

    this.authService.attemptLogin(username, password)
      .subscribe(result => {
        if (result == true) {
          this.router.navigate(['posts']);
          this.location.go('posts');

          this.error = null;
        } else {
          this.error = 'Username or Password invalid.';
        }
      }, (error) => {
        if (error.status == 401) {
          let res = JSON.parse(error._body);
          this.error = res.message;
        }
      });
  }
}
