import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WallComponent } from './wall/wall.component';
import { NewsfeedComponent } from './newsfeed/newsfeed.component';
import { PostComponent } from './post/post.component';
import { MdCardModule, MdInputModule, MdButtonModule } from "@angular/material";
import { ImageUploadModule } from "angular2-image-upload";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RatingModule } from "ng2-bootstrap";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MdCardModule,
    MdInputModule,
    MdButtonModule,
    ImageUploadModule,
    RatingModule

  ],
  declarations: [WallComponent, NewsfeedComponent, PostComponent]
})
export class FeedModule { }
