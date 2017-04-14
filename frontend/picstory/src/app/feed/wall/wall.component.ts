import { Component, OnInit } from '@angular/core';
import { Router, Params, ActivatedRoute } from '@angular/router';
import { ComService } from "../services/com.service";
@Component({
  selector: 'app-wall',
  templateUrl: './wall.component.html',
  styleUrls: ['./wall.component.css'],
  providers: [ ComService ]
})
export class WallComponent implements OnInit {
  userPosts: Array<string>;
  response: string;
  error: string;

  constructor(private router: Router, private route: ActivatedRoute, private comService: ComService) { }

  ngOnInit() {
    this.route.params.forEach((params: Params) =>{
      this.wallUser(params['id'])
    })
  }
  wallUser(id: string){
    this.comService.getPostsUser(id).subscribe(
      response => this.response = response,
      error => this.error = error,
      () => {}
    )
  }
}
