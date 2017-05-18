import { Component,  OnInit } from '@angular/core';
import { ComService } from "../services/com.service";
import { AWSService } from "../services/aws.service";
import { FormControl, Validators } from "@angular/forms";
import { MdSnackBar, MdDialog} from "@angular/material";

@Component({
  selector: 'app-newsfeed',
  templateUrl: './newsfeed.component.html',
  styleUrls: ['./newsfeed.component.css'],
  providers: [ ComService, AWSService ]
})

export class NewsfeedComponent implements OnInit {

  posts: Array<any> = [
    '{ \
    id: 10, \
    user_id: "user_1UXS", \
    title: "testsakaslkm", \
    image_url: "https://s3.amazonaws.com/picstorybucket/75212c00-5efe-ea74-7ea1-f909bb277cc3", \
    total_score: null, \
    latitude: 4.6319665, \
    longitude: -74.0828724, \
    created_at: "2017-04-17T11:31:42.242Z", \
    updated_at: "2017-04-17T11:31:42.242Z", \
    comments: [ ], \
    scores: [ ] \
  },'
  ];
  page: number;
  error: string;
  image: string;
  response: any;
  location = {};
  title: FormControl

  constructor(private awsService: AWSService, private comService: ComService, private snackbar: MdSnackBar, public dialog: MdDialog) {
    this.title = new FormControl('', Validators.compose([Validators.required]))
  }

  ngOnInit() {
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition(this.setPosition.bind(this));
    }
    this.posts = [];
    this.page = 1;
    this.newsFeed();
  }

  setPosition(position){
    this.location = position.coords;
  }

  checkTypeImage(){
    return typeof this.image === 'undefined';
  }

  newsFeed(){
    if (this.posts.length >= 5)
      this.page += 1;

    let aux;
    this.comService.getPostsByPage(this.page).subscribe(
      response => {aux = response},
      error => this.error = error,
      () => {
        if (aux == null || typeof aux === 'undefined' || aux == '')
          this.page-=1;
        if(this.posts.length >= 5)
          this.posts =  this.desserialize(aux, this.posts);
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
    //let user_id: string = "user_1UXS";
    let user_id = JSON.parse(localStorage.getItem('current')).username;
    let title: string = this.title.value;
    let image_url: string = this.image ? this.image : "default";
    let latitude = this.location['latitude'];
    let longitude = this.location['longitude'];
    this.comService.publishPost(JSON.stringify({user_id, title, image_url, latitude, longitude}))
      .subscribe(
        () => { this.openSnackBar("Your post have been saved!") }
      );
    this.title.reset();
    this.ngOnInit();
  }

  getUUID(event: any){
    this.image = 'https://s3.amazonaws.com/picstorybucket/'+event;
  }

  openSnackBar( message: string ){
    this.snackbar.open(message, null, {
      duration: 3000
    });
  }

  imageRemoved(event: any){
    var req: string;
    req = JSON.stringify(
      {
        'id': this.image.substr(40, this.image.length)
      });
    this.awsService.deleteImage(req).subscribe(
      response => {console.log(response._body)}
      );
  }
}
