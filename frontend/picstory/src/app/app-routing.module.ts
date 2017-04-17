import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormRegisterComponent } from './register/form-register/form-register.component';
import { WallComponent } from './feed/wall/wall.component';
import { NewsfeedComponent } from './feed/newsfeed/newsfeed.component';
import { LoginAppComponent } from "./login/login-app/login-app.component";
import { AuthGuard } from "./guards/auth.guard";

const routes: Routes = [
  {
    path: '', component: LoginAppComponent
  },
  {
    path: 'home', component: NewsfeedComponent
  },
  {
    path: 'home/:id', component: WallComponent, canActivate: [AuthGuard]
  },
  {
    path: 'register', component: FormRegisterComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes),],
  exports: [RouterModule]
})
export class AppRoutingModule { }
