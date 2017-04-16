import { Component, Inject, NgZone, OnInit } from '@angular/core';
import { ComService } from "../services/com.service";
import { NgUploaderOptions } from "ngx-uploader";
import { AWSService } from "../services/aws.service";

@Component({
  selector: 'app-newsfeed',
  templateUrl: './newsfeed.component.html',
  styleUrls: ['./newsfeed.component.css'],
  providers: [ ComService, AWSService ]
})
export class NewsfeedComponent implements OnInit {

  posts: Array<any>;
  error: string;
  image: string;
  response: any;
  location = {};

  constructor(private comService: ComService, private awsService: AWSService) {
  }

  ngOnInit() {
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition(this.setPosition.bind(this));
    };
    this.newsFeed();
  }

  setPosition(position){
    this.location = position.coords;
    console.log(position.coords);
  }

  newsFeed(){
    this.comService.getPosts().subscribe(
      response => this.posts = response,
      error => this.error = error,
      () => {}
    )
  }

  uploadPhoto(){
    this.awsService.sendImage(this.image)
      .subscribe(
        response => this.response = response,
        error => this.error = error
      );
  }
}
