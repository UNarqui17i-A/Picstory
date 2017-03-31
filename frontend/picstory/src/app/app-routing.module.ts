import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormRegisterComponent } from './register/form-register/form-register.component';
import { WallComponent } from './feed/wall/wall.component';
import { LoginAppComponent } from "./login/login-app/login-app.component";

const routes: Routes = [
  {
    path: '', component: LoginAppComponent
  },
  {
    path: 'home', component: WallComponent
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
