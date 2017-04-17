import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { RestService } from "./login-app/rest.service";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { LoginAppComponent } from './login-app/login-app.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule
  ],
  declarations: [LoginAppComponent],
  providers: [RestService]
})
export class LoginModule { }
