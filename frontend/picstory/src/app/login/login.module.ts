import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RestService } from "./login-app/rest.service";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { LoginAppComponent } from './login-app/login-app.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [LoginAppComponent],
  providers: [RestService]
})
export class LoginModule { }
