import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CalendarModule, SharedModule } from 'primeng/primeng';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';

import { AuthService } from './services/auth.service';
import { RestService } from './services/rest.service';

import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { ForgotComponent } from './forgot/forgot.component';


@NgModule({
  imports: [
    ReactiveFormsModule,
    CommonModule,
    RouterModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    CalendarModule,
    SharedModule,
    BrowserAnimationsModule
  ],
  providers: [AuthService, RestService],
  declarations: [SigninComponent, SignupComponent, ForgotComponent],
  exports: [SigninComponent, SignupComponent, ForgotComponent]
})
export class AuthModule { }
