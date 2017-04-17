import { Component, OnInit, Input } from '@angular/core';
import { AWSService } from "../services/aws.service";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
  providers: [ AWSService ]
})
export class PostComponent implements OnInit {
  @Input() post: any;
  @Input() isWall: boolean = false;

  public max:number = 5;
  public rate:number = 0;

  public overStar:number;
  public percent:number;

  public hoveringOver(value:number):void {
    this.overStar = value;
    this.percent = 100 * (value / this.max);
  };

  public resetStar():void {
    this.overStar = void 0;
  }

  constructor(private awsService: AWSService) { }

  ngOnInit() {
    this.awsService.getImage(this.post.image_url)
      .subscribe(
        response => {this.post.image_url = response._body}
      )
  }

  reportRate(event: any){
    console.log(this.rate);
    // TODO hacer petición post para hacer submit del score
  }
}
