import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { MaterializeModule } from 'angular2-materialize';
import 'hammerjs';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FeedModule } from './feed/feed.module';
import { LoginModule } from './login/login.module';
import { RegisterModule } from './register/register.module';
import { StaticModule } from './static/static.module';
import { NgUploaderModule } from "ngx-uploader";
import { ImageUploadModule } from "angular2-image-upload";
import { AuthGuard} from './guards/auth.guard';
import { HomeComponent } from './home/home.component'


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    MaterialModule,
    MaterializeModule,
    NgUploaderModule,
    ImageUploadModule.forRoot(),

    FeedModule,
    LoginModule,
    RegisterModule,
    StaticModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
