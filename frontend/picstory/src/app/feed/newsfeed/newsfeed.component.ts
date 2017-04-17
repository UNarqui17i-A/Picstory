import { Component, Inject, NgZone, OnInit } from '@angular/core';
import { ComService } from "../services/com.service";
import { AWSService } from "../services/aws.service";
import { FormControl, Validators } from "@angular/forms";

@Component({
  selector: 'app-newsfeed',
  templateUrl: './newsfeed.component.html',
  styleUrls: ['./newsfeed.component.css'],
  providers: [ ComService, AWSService ]
})
export class NewsfeedComponent implements OnInit {

  posts: Array<any>;
  page: number;
  error: string;
  image: string;
  response: any;
  location = {};
  title: FormControl;

  constructor(private comService: ComService) {
    this.title = new FormControl('', Validators.compose([Validators.required]))
  }

  ngOnInit() {
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition(this.setPosition.bind(this));
    };
    this.posts = [];
    this.page = 1;
    this.newsFeed();
  }

  setPosition(position){
    this.location = position.coords;
  }

  newsFeed(){
    if (this.posts.length >= 5)
      this.page += 1;

    var aux;
    this.comService.getPostsByPage(this.page).subscribe(
      response => {aux = response},
      error => this.error = error,
      () => {
        if(this.posts.length >= 5)
          this.posts =  this.desserialize(aux, this.posts)
        else
          this.posts = aux;
      }
    )
  }

  desserialize(JSONobject: any, postArray: Array<any>){
    for(let item of JSONobject){
      postArray.push(item)
    }
    return postArray;
  }

  newPost(){
    let user_id: string = "default";
    let title: string = this.title.value;
    let image_url: string = this.image ? this.image : "default";
    let latitude = this.location['latitude'];
    let longitude = this.location['longitude'];
    this.comService.publishPost(JSON.stringify({user_id, title, image_url, latitude, longitude}))
      .subscribe(
        () => { this.newsFeed(); }
      )
  }

  getUUID(event: any){
    this.image = 'https://s3.amazonaws.com/picstorybucket/'+event;
  }
}
