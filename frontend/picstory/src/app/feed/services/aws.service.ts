import { Injectable } from '@angular/core';
//import * as AWS from 'aws-sdk';
import { Http, RequestOptions, Headers } from "@angular/http";
import { Observable } from "rxjs";
import 'rxjs/add/operator/map';

@Injectable()
export class AWSService {
  ipHostImage = 'localhost';
  urlImageUpload = 'http://'+ this.ipHostImage + ':8015/image/create';

  constructor(private http: Http ) {
  }

  sendImage(image: string){
    let headers = new Headers({'Content-Type': 'application/json'});
    let requestOptions = new RequestOptions({headers: headers});
    return this.http.post(this.urlImageUpload, { 'uuid' : '11', 'codedimage': image}, requestOptions)
      .catch(this.handleError)
  }

  private handleError( error: any ) {
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }
}
