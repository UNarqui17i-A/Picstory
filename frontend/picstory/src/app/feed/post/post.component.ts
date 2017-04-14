import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  @Input() post: Array<string>;
  /*posts: Array<string> =
    [
      'https://static.pexels.com/photos/147504/pexels-photo-147504.jpeg',
      'https://static.pexels.com/photos/129897/pexels-photo-129897.jpeg',
      'https://static.pexels.com/photos/130000/pexels-photo-130000.jpeg',
      'https://static.pexels.com/photos/147684/pexels-photo-147684.jpeg',
      'https://static.pexels.com/photos/146868/pexels-photo-146868.jpeg',
    ];
    */
  constructor() { }

  ngOnInit() {
  }

}
