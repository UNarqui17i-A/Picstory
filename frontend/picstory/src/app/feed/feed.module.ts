import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WallComponent } from './wall/wall.component';
import { NewsfeedComponent } from './newsfeed/newsfeed.component';
import { PostComponent } from './post/post.component';
import { NgUploaderModule } from "ngx-uploader";
import { MdCardModule, MdInputModule, MdButtonModule } from "@angular/material";

@NgModule({
  imports: [
    CommonModule,
    NgUploaderModule,
    MdCardModule,
    MdInputModule,
    MdButtonModule
  ],
  declarations: [WallComponent, NewsfeedComponent, PostComponent]
})
export class FeedModule { }
