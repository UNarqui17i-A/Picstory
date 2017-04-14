import { Component, OnInit } from '@angular/core';
import { ComService } from "../services/com.service";

@Component({
  selector: 'app-newsfeed',
  templateUrl: './newsfeed.component.html',
  styleUrls: ['./newsfeed.component.css'],
  providers: [ ComService ]
})
export class NewsfeedComponent implements OnInit {

  posts: Array<any>;
  error: string;
  constructor(private comService: ComService) { }

  ngOnInit() {
    this.newsFeed();
  }

  newsFeed(){
    this.comService.getPosts().subscribe(
      response => this.posts = response,
      error => this.error = error,
      () => {}
    )
  }
}
