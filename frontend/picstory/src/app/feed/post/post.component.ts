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
  constructor(private awsService: AWSService) { }

  ngOnInit() {
    this.awsService.getImage(this.post.image_url)
      .subscribe(
        response => {this.post.image_url = response._body}
      )
  }

}
