import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { RestService } from './rest.service';
import { DatePipe } from "@angular/common";
import { EmailValidator } from '../../validators/email.validator';
import { EqualPasswordsValidator } from '../../validators/eqPassword.validator';
@Component({
  selector: 'app-form-register',
  templateUrl: './form-register.component.html',
  styleUrls: ['./form-register.component.css']
})
export class FormRegisterComponent implements OnInit {


  registerForm: FormGroup;
  response: string;

  constructor(private fb: FormBuilder, private restService: RestService) {
  }

  ngOnInit() {
    this.registerForm = this.fb.group({
       firstName: [null, Validators.compose([Validators.minLength(3), Validators.required, Validators.pattern('[A-Za-z]*')])],
       lastName: [null, Validators.compose([Validators.minLength(3), Validators.required])],
       username: [null, Validators.compose([Validators.minLength(5), Validators.required])],
       email: [null, Validators.compose([Validators.required, EmailValidator.validate])],
       passwords: this.fb.group({
         password: [null, Validators.compose([Validators.required, Validators.minLength(8)])],
         con_password: [null, Validators.compose([Validators.required, Validators.minLength(8)])],
       }, { validator: EqualPasswordsValidator.validate('password', 'con_password')}),
       bio: [null],
       birthDate: [null, Validators.compose([Validators.required]) ]
      })
  }

  signUp(formValue: any, event: Event){
    let firstName = formValue.controls['firstName'].value
    let lastName = formValue.controls['lastName'].value
    let username = formValue.controls['username'].value
    let email = formValue.controls['email'].value
    let password = (<FormGroup> formValue.controls['passwords']).controls['password'].value
    let confirmPassword = (<FormGroup> formValue.controls['passwords']).controls['con_password'].value
    let bio = formValue.controls['bio'].value
    var datePipe = new DatePipe('en-US');
    //let birthDate = datePipe.transform(formValue.controls['birthDate'].value, 'dd/MM/yyyy')
    let birthDate = formValue.controls['birthDate'].value
    let request = JSON.stringify({firstName: firstName, lastName: lastName, username: username, email: email, password: password, confirmPassword: confirmPassword, birthDate: birthDate, bio: bio})
    this.restService.postSignUp(request)
      .subscribe(
        response  => this.response = response,
        error => error = error,
        () => { console.log(this.response);}
      );
  }

}
