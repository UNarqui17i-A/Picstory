import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormRegisterComponent } from './form-register/form-register.component';
import { RestService } from "./form-register/rest.service";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CalendarModule, SharedModule } from 'primeng/primeng';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CalendarModule,
    SharedModule,
    BrowserAnimationsModule
  ],
  declarations: [FormRegisterComponent],
  providers: [RestService]
})
export class RegisterModule { }
