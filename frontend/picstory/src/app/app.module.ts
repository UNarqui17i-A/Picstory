import { BrowserModule } from '@angular/platform-browser';
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


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    MaterialModule,
    MaterializeModule,
    NgUploaderModule,

    FeedModule,
    LoginModule,
    RegisterModule,
    StaticModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
