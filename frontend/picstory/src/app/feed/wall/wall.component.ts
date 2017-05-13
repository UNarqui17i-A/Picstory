import { Component, OnInit } from '@angular/core';
import { Router, Params, ActivatedRoute } from '@angular/router';
import { ComService } from "../services/com.service";
import { RestService } from '../../auth/services/rest.service';
import {AWSService} from "../services/aws.service";
@Component({
  selector: 'app-wall',
  templateUrl: './wall.component.html',
  styleUrls: ['./wall.component.css'],
  providers: [ ComService, AWSService ]
})
export class WallComponent implements OnInit {
  userPosts: Array<any>;
  error: string;
  page: number;
  user: string;
  bio: string;
  image: string;
  response: string;
  userPhoto: string;

  constructor(private awsService: AWSService, private route: ActivatedRoute, private comService: ComService, private restService: RestService) { }

  ngOnInit() {

    this.route.params.forEach((params: Params) =>{
      this.user =  params['username'];

    });
    this.userPhoto = JSON.parse(localStorage.getItem('current')).photo;
    console.log(this.userPhoto)
    this.awsService.getImage(this.userPhoto)
      .subscribe(
        response => (this.userPhoto = response._body)
      );
    this.bio = JSON.parse(localStorage.getItem('current')).bio;
    this.userPosts = [];
    this.page = 1;
    this.wallUser();
  }

  wallUser(){
    if (this.userPosts.length >= 5)
      this.page += 1;
    var aux;
    this.comService.getPostsUserByPage(this.user, this.page).subscribe(
      response => {aux = response},
      error => this.error = error,
      () => {
        if (aux == null || typeof aux === 'undefined' || aux == '')
          this.page-=1;
        if(this.userPosts.length >= 5)
          this.userPosts =  this.desserialize(aux, this.userPosts)
        else
          this.userPosts = aux;
      }
    );
  }

  updateImage(){

    let image_url: string = this.image ? this.image : "default";
    let request = {photo: image_url};
    let url = 'user/'+JSON.parse(localStorage.getItem('current')).id;
    this.restService.put(url, request)
      .subscribe(
        response  => {
          let res = JSON.parse(response._body);
          if (res.newUser) {
            this.response = 'Image Changed successfully';
          }
        },
        error => {
          if (error.status) {
            this.error = error.message;
          }
        }
      );
  }
  upImage(event: any){
    var image = event.srcElement.files[0];

    console.log(image);
  }

  changeListener($event) : void {
    this.readThis($event.target);
  }

  readThis(inputValue: any): void {
    var file:File = inputValue.files[0];
    var myReader:FileReader = new FileReader();

    myReader.onloadend = (e) => {
      this.image = myReader.result;
      //let avatarimage = this.image;
      let id2 = '' + JSON.parse(localStorage.getItem('current')).id;
      let body = {uuid: id2 , codedimage: this.image}
      //console.log(body)
      this.awsService.storeAvatar(body)
        .subscribe(
          response  => {
            let res = JSON.parse(response._body);
            if (res.success) {
              this.response = 'Image Changed successfully';
            }
          },
          error => {
            if (error.status) {
              this.error = error.message;
            }
          }
        );

      let request = {photo: 'https://s3.amazonaws.com/picstorybucket/' + JSON.parse(localStorage.getItem('current')).id};
      let url = 'user/'+JSON.parse(localStorage.getItem('current')).id;
      this.restService.put(url, request)
        .subscribe(
          response  => {
            let res = JSON.parse(response._body);
            if (res.newUser) {
              this.response = 'Image Changed successfully';
            }
          },
          error => {
            if (error.status) {
              this.error = error.message;
            }
          }
        );
    }
    myReader.readAsDataURL(file);

  }

  getUUID(event: any){
    this.image = 'https://s3.amazonaws.com/picstorybucket/'+ event;
    console.log(' url image uploaded:')
    console.log(this.image);
  }

  private desserialize(aux: any, userPosts: Array<any>) {
    for(let item of aux){
      userPosts.push(item)
    }
    return userPosts;
  }
}
