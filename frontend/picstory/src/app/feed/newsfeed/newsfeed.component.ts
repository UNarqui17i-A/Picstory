import { Component,  OnInit } from '@angular/core';
import { ComService } from "../services/com.service";
import { AWSService } from "../services/aws.service";
import { FormControl, Validators } from "@angular/forms";
import { MdDialog, MdDialogRef, MdSnackBar } from '@angular/material';

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

  constructor(private comService: ComService, private snackbar: MdSnackBar, public dialog: MdDialog) {
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

  checkTypeImage(){
    return typeof this.image === 'undefined';
  }

  newsFeed(){
    if (this.posts.length >= 5)
      this.page += 1;

    var aux;
    this.comService.getPostsByPage(this.page).subscribe(
      response => {aux = response},
      error => this.error = error,
      () => {
        if (aux == null || typeof aux === 'undefined' || aux == '')
          this.page-=1;
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
    //let user_id: string = "user_1UXS";
    let user_id = JSON.parse(localStorage.getItem('currentUser')).username;
    let title: string = this.title.value;
    let image_url: string = this.image ? this.image : "default";
    let latitude = this.location['latitude'];
    let longitude = this.location['longitude'];
    this.comService.publishPost(JSON.stringify({user_id, title, image_url, latitude, longitude}))
      .subscribe(
        () => { this.openSnackBar("Your post have been saved!") }
      )
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

  openDialog() {
    let dialogRef = this.dialog.open(DialogResultExampleDialog);
    dialogRef.afterClosed().subscribe(result => { "hey"
    });
  }
}

@Component({
  selector: 'dialog-result-example-dialog',
  templateUrl: './dialog-post.html',
})
export class DialogResultExampleDialog {
  constructor(public dialogRef: MdDialogRef<DialogResultExampleDialog>) {}
}
