import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormRegisterComponent } from './form-register/form-register.component';
import {RestService} from "./form-register/rest.service";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [FormRegisterComponent],
  providers: [RestService]
})
export class RegisterModule { }
