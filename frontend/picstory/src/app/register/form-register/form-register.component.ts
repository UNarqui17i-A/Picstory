import { Component, OnInit } from '@angular/core';
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
  public dt: Date = new Date();
  public minDate: Date = void 0;
  public dateDisabled: {date: Date, mode: string}[];
  public done: boolean = false;

  constructor(private fb: FormBuilder, private restService: RestService) {
    (this.minDate = new Date()).setDate(this.minDate.getDate()-1000);
    this.dateDisabled = [];
  }

  ngOnInit() {
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

  public getDate(): string{
    var datePipe = new DatePipe()
    return datePipe.transform(this.dt.toString(), 'dd/MM/yyyy')
  }

  signUp(){
    let firstName = this.registerForm.controls['firstName'].value
    let lastName = this.registerForm.controls['lastName'].value
    let username = this.registerForm.controls['username'].value
    let email = this.registerForm.controls['email'].value
    let password = (<FormGroup> this.registerForm.controls['passwords']).controls['password'].value
    let bio = this.registerForm.controls['bio'].value
    let birthDate = this.getDate()
    console.log(birthDate) ;

    this.restService.putSignUp(JSON.stringify({firstName, lastName, username, email, password, bio, birthDate}))
      .subscribe(
        response  => this.response = response,
        error => error = error,
        () => {}
      );
  }

}
