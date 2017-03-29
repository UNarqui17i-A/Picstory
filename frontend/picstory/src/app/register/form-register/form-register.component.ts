import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

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
  minDate: Date;
  maxDate: Date;

  constructor(private fb: FormBuilder, private restService: RestService) {
  }

  ngOnInit() {
    /// TODO
    this.minDate = new Date();
    this.minDate.setFullYear(1930,1,1);
    this.maxDate = new Date();
    ///

    this.registerForm = this.fb.group({
       firstName: [null, Validators.compose([Validators.minLength(3), Validators.required])],
       lastName: [null, Validators.compose([Validators.minLength(3), Validators.required])],
       username: [null, Validators.compose([Validators.minLength(3), Validators.required])],
       email: [null, Validators.compose([Validators.required, EmailValidator.validate])],
       passwords: this.fb.group({
         password: [null, Validators.compose([Validators.required])],
         con_password: [null, Validators.compose([Validators.required])],
       }, { validator: EqualPasswordsValidator.validate('password', 'con_password')}),
       bio: [null],
       birthDate: [null, Validators.compose([Validators.required]) ]
      })
  }

  signUp(formValue: any){
    let firstName = formValue.controls['firstName'].value
    let lastName = formValue.controls['lastName'].value
    let username = formValue.controls['username'].value
    let email = formValue.controls['email'].value
    let password = (<FormGroup> formValue.controls['passwords']).controls['password'].value
    let bio = formValue.controls['bio'].value
    var datePipe = new DatePipe('en-US');
    let birthDate = datePipe.transform(formValue.controls['birthDate'].value,'dd/MM/yyyy')
    let request = JSON.stringify({firstName, lastName, username, email, password, bio, birthDate})
    console.log(request)
    this.restService.putSignUp(request)
      .subscribe(
        response  => this.response = response,
        error => error = error,
        () => {}
      );
  }

}
