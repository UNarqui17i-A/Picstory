import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { RestService } from './rest.service';

@Component({
  selector: 'app-login-app',
  templateUrl: './login-app.component.html',
  styleUrls: ['./login-app.component.css']
})
export class LoginAppComponent implements OnInit {

  loginForm: FormGroup;
  response: string;
  constructor(private fb: FormBuilder, private restService: RestService) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      username: [null, Validators.compose([Validators.minLength(5), Validators.required])],
      password: [null, Validators.compose([Validators.minLength(8),Validators.required])]
    })
  }

  loginUser(formValue: any, event: Event){
    let username = formValue.controls['username'].value
    let password = formValue.controls['password'].value
    let request = JSON.stringify({username: username, password: password})
    this.restService.postSignUp(request)
      .subscribe(
        response  => this.response = response,
        error => error = error,
        () => { console.log(this.response);}
      );
  }

}
