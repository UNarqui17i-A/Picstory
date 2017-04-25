import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './guards/auth.guard';

import { UnauthorizedComponent } from './responses/unauthorized/unauthorized.component';
import { NewsfeedComponent } from './feed/newsfeed/newsfeed.component';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { ForgotComponent } from './auth/forgot/forgot.component';
import { WallComponent } from './feed/wall/wall.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {
    path: '', component: SigninComponent
  },
  {
    path: 'auth',
    children: [
      { path: 'signin', component: SigninComponent },
      { path: 'signup', component: SignupComponent },
      { path: 'forgot', component: ForgotComponent }
    ]
  },
  { path: 'posts', component: NewsfeedComponent, canActivate: [AuthGuard]},
  { path: 'posts/:username', component: WallComponent, canActivate: [AuthGuard] },
  { path: '**', component: UnauthorizedComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes),],
  exports: [RouterModule]
})
export class AppRoutingModule { }
