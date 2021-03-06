import { Component, OnInit, Input } from '@angular/core';
import { AWSService } from "../services/aws.service";
import { ComService } from "../services/com.service";
import { DetailComponent } from "../detail/detail.component";
import { MdDialog } from "@angular/material";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
  providers: [ AWSService, ComService ]
})

export class PostComponent implements OnInit {
  @Input() post: any;
  @Input() isWall: boolean = false;

  public max:number = 5;
  public rate:number = null;

  public overStar:number;
  public percent:number;
  oldValue: number;

  public hoveringOver(value:number):void {
    this.overStar = value;
    this.percent = 100 * (value / this.max);
  };

  public resetStar():void {
    this.overStar = void 0;
  }

  constructor(private awsService: AWSService, private comService: ComService,
              public detailImage: MdDialog) {

  }

  ngOnInit() {
    this.awsService.getImage(this.post.image_url)
      .subscribe(
        response => {this.post.image_url = response._body}
      );

    var scorer = this.getScoreObject();
    if( scorer != null && typeof scorer != 'undefined' && JSON.stringify(scorer) != '[]'){
      this.rate = scorer[0].scored;
      this.oldValue = this.rate;
    }
  }

  getScoreObject(){
    var scorer = this.post.scores.filter(function (data) {
      if (data.user_id == 'default')
        return data;
    });
    return scorer;
  }

  openDetail(){
    let detail = this.detailImage.open(DetailComponent)
    detail.componentInstance.post = this.post
  }

  reportRate(event: any){
    var request: string;
    if( this.oldValue == null || typeof this.oldValue == 'undefined'){
      request = JSON.stringify(
        {
          'post_id': this.post.id,
          'user_id': JSON.parse(localStorage.getItem('currentUser')).username,
          /*'user_id' : 'default',*/
          'scored' : this.rate
        });
      this.comService.scorePost(request)
        .subscribe(
          () => {}
        );
    }else{
      var scorer = this.getScoreObject();
      request = JSON.stringify(
        {
          'post_id': this.post.id,
          /*'user_id': JSON.parse(localStorage.getItem('currentUser')),*/
          'user_id': JSON.parse(localStorage.getItem('currentUser')).username,
          /*'user_id' : 'default',*/
          'scored' : this.rate
        });
      this.comService.updateScore(scorer[0].id, request)
        .subscribe();
    }
  }
}
