import { Component, OnInit } from '@angular/core';
import { MdDialogRef, MdDialogContent, MdDialogConfig, MdDialogContainer } from "@angular/material";


@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  post: any;

  constructor(public detailRef: MdDialogRef<DetailComponent>) {
  }

  ngOnInit() {
  }

}
