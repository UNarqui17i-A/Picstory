import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WallComponent } from './wall/wall.component';
import { NewsfeedComponent } from './newsfeed/newsfeed.component';
import { PostComponent } from './post/post.component';
import {
  MaterialModule, MdDialogConfig, MdDialogContainer, MdDialogContent, MdDialogModule,
  MdGridListModule, MdListModule
} from "@angular/material";
import { ImageUploadModule } from "angular2-image-upload";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RatingModule } from "ng2-bootstrap";
import { InfiniteScrollModule } from "angular2-infinite-scroll";
import { DetailComponent } from './detail/detail.component';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    ImageUploadModule,
    RatingModule,
    InfiniteScrollModule,
    MdGridListModule,
    MdDialogModule,
    BrowserAnimationsModule,
    MdListModule
  ],
  declarations: [WallComponent, NewsfeedComponent, PostComponent, DetailComponent],
  entryComponents: [DetailComponent]
})
export class FeedModule { }
