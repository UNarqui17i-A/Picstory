import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wall',
  templateUrl: './wall.component.html',
  styleUrls: ['./wall.component.css']
})
export class WallComponent implements OnInit {

  posts: Array<string> =
    [
      'https://static.pexels.com/photos/147504/pexels-photo-147504.jpeg',
      'https://static.pexels.com/photos/129897/pexels-photo-129897.jpeg',
      'https://static.pexels.com/photos/130000/pexels-photo-130000.jpeg',
      'https://static.pexels.com/photos/147684/pexels-photo-147684.jpeg',
      'https://static.pexels.com/photos/146868/pexels-photo-146868.jpeg',
    ];
  constructor() { }

  ngOnInit() {

  }

}
