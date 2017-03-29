import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { RestService } from './rest.service';
import { DatePipe } from "@angular/common";

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
    this.minDate = new Date();
    this.minDate.setFullYear(1930,1,1);
    this.maxDate = new Date();

    this.registerForm = this.fb.group({
       firstName: ["", Validators.minLength(3)],
       lastName: ["", Validators.minLength(3)],
       username: [""],
       email: [""],
       passwords: this.fb.group({
         password: [""],
         con_password: [""],
       }),
       bio: [""],
       birthDate: [""]
      })
  }

  signUp(){
    let firstName = this.registerForm.controls['firstName'].value
    let lastName = this.registerForm.controls['lastName'].value
    let username = this.registerForm.controls['username'].value
    let email = this.registerForm.controls['email'].value
    let password = (<FormGroup> this.registerForm.controls['passwords']).controls['password'].value
    let bio = this.registerForm.controls['bio'].value
    var datePipe = new DatePipe('en-US');
    let birthDate = datePipe.transform(this.registerForm.controls['birthDate'].value,'dd/MM/yyyy')
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
