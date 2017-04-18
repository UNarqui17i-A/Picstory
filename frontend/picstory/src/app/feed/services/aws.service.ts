import { Injectable } from '@angular/core';
//import * as AWS from 'aws-sdk';
import { Http, RequestOptions, Headers, Response } from "@angular/http";
import { Observable } from "rxjs";
import 'rxjs/add/operator/map';

@Injectable()
export class AWSService {
  private ipHostImage = 'localhost';
  private urlImageUpload = 'http://'+ this.ipHostImage + ':8015/image/create';

  constructor(private http: Http ) {
  }

  getImage(image_url: string){
    let headers = new Headers({'Content-Type': 'application/json'});
    let requestOptions = new RequestOptions({headers: headers});
    return this.http.get(image_url, requestOptions)
      .catch(this.handleError)
  }

  private handleError( error: any ) {
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }
}
