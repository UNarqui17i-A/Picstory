import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { RestService } from '../services/rest.service';
import { EmailValidator } from '../../validators/email.validator';
import { EqualPasswordsValidator } from '../../validators/eqPassword.validator';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignupComponent implements OnInit {

  signupForm: FormGroup;
  response: string;
  error: string;

  constructor(private fb: FormBuilder,
              private restService: RestService) { }

  ngOnInit() {
    this.signupForm = this.fb.group({
       firstName: [null, Validators.compose([Validators.required, Validators.required, Validators.pattern('[A-Za-z]*')])],
       lastName: [null, Validators.compose([Validators.required, Validators.required, Validators.pattern('[A-Za-z]*')])],
       username: [null, Validators.compose([Validators.required, Validators.minLength(5)])],
       email: [null, Validators.compose([Validators.required, EmailValidator.validate])],
       passwords: this.fb.group({
         password: [null, Validators.compose([Validators.required, Validators.minLength(8)])],
         confirmPassword: [null, Validators.compose([Validators.required, Validators.minLength(8)])],
       }, { validator: Validators.compose([Validators.required, EqualPasswordsValidator.validate('password', 'confirmPassword')]) }),
       bio: [null],
       birthDate: [null, Validators.compose([Validators.required]) ]
      })
  }

  signup(formValue: any, event: Event){
    let firstName = formValue.controls['firstName'].value
    let lastName = formValue.controls['lastName'].value
    let username = formValue.controls['username'].value
    let email = formValue.controls['email'].value
    let password = (<FormGroup> formValue.controls['passwords']).controls['password'].value
    let confirmPassword = (<FormGroup> formValue.controls['passwords']).controls['confirmPassword'].value
    let bio = formValue.controls['bio'].value
    //let birthDate = datePipe.transform(formValue.controls['birthDate'].value, 'dd/MM/yyyy')
    let birthDate = formValue.controls['birthDate'].value
    let request = {firstName: firstName, lastName: lastName, username: username, email: email, password: password, confirmPassword: confirmPassword, birthDate: birthDate, bio: bio}

    this.restService.post('user', request)
      .subscribe(
        response  => {
          let res = JSON.parse(response._body);
          if (res.newUser) {
            this.response = 'User created successfully';
          }
        },
        error => {
          if (error.status) {
           this.error = error.message;
          }
        }
      );
  }

}
