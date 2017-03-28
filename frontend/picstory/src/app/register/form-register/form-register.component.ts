import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

import { RestService } from './rest.service';

@Component({
  selector: 'app-form-register',
  templateUrl: './form-register.component.html',
  styleUrls: ['./form-register.component.css']
})
export class FormRegisterComponent implements OnInit {

  constructor(private fb: FormBuilder, private restService: RestService) { }

  registerForm: FormGroup;

  ngOnInit() {
    this.registerForm = this.fb.group({
       name: [""],
       email: [""],
       username: [""],
       passwords: this.fb.group({
         password: [""],
         con_password: [""]
       }, {validator: ""})
      })
  }

  signUp(){
    this.restService.putSignUp(JSON.stringify(this.registerForm.value))
      .subscribe(
        response  => response = response,
        error => error = error,
        () => {}
      );
  }

}
