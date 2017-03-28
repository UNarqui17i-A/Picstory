import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormRegisterComponent } from './register/form-register/form-register.component';


const routes: Routes = [
  {
    path: '',
    children: []
  },
  {
    path: 'register', component: FormRegisterComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
