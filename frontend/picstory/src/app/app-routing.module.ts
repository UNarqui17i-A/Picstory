import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormRegisterComponent } from './register/form-register/form-register.component';
import { WallComponent } from './feed/wall/wall.component';
import { NewsfeedComponent } from './feed/newsfeed/newsfeed.component';
import { LoginAppComponent } from "./login/login-app/login-app.component";
import { AuthGuard } from "./guards/auth.guard";
import { HomeComponent } from "./home/home.component";

const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'auth',
    children: [
      { path: 'login', component: LoginAppComponent },
      { path: 'signin', component: FormRegisterComponent }
    ]
  },
  {
    path: 'posts/', component: NewsfeedComponent
  },
  {
    path: 'posts/:id', component: WallComponent, canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes),],
  exports: [RouterModule]
})
export class AppRoutingModule { }
