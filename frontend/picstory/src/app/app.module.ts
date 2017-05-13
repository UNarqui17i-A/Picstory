import { ImageUploadModule } from "angular2-image-upload";
import { BrowserModule } from '@angular/platform-browser';
import { MaterializeModule } from 'angular2-materialize';
import { MaterialModule, MdDialogModule, MdToolbarModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import 'hammerjs';

import { ResponsesModule } from './responses/responses.module';
import { AppRoutingModule } from './app-routing.module';
import { AuthModule } from './auth/auth.module';
import { FeedModule } from './feed/feed.module';
import { AuthGuard} from './guards/auth.guard';

import { HomeComponent } from './home/home.component';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layouts/header/header.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    MaterializeModule,
    ImageUploadModule.forRoot(),
    BrowserAnimationsModule,
    MdToolbarModule,

    FeedModule,
    AuthModule,
    ResponsesModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
