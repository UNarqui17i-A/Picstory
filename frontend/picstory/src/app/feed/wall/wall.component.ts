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
  userPosts: Array<any>;
  error: string;
  page: number;
  user: string;

  constructor(private route: ActivatedRoute, private comService: ComService) { }

  ngOnInit() {
    this.route.params.forEach((params: Params) =>{
      this.user =  params['id'];
    });
    this.userPosts = []
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
    )
  }

  private desserialize(aux: any, userPosts: Array<any>) {
    for(let item of aux){
      userPosts.push(item)
    }
    return userPosts;
  }
}
