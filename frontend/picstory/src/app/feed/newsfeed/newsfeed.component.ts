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

  constructor(private comService: ComService, private awsService: AWSService) {
  }

  changeListener($event) : void {
    this.readThis($event.target);
  }

  readThis(inputValue: any): void {
    var file:File = inputValue.files[0];
    var myReader:FileReader = new FileReader();

    myReader.onloadend = (e) => {
      this.image = myReader.result;
      //console.log(this.image)
    }
    myReader.readAsDataURL(file);
  }

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

  uploadPhoto(){
    this.awsService.sendImage(this.image)
      .subscribe(
        response => this.response = response,
        error => this.error = error
      );
  }
}
