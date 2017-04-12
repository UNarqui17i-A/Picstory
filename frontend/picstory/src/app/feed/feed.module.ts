import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WallComponent } from './wall/wall.component';
import { NewsfeedComponent } from './newsfeed/newsfeed.component';
import { PostComponent } from './post/post.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [WallComponent, NewsfeedComponent, PostComponent]
})
export class FeedModule { }
