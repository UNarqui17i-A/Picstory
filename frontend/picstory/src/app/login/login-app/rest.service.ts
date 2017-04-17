import { Injectable } from '@angular/core';
import {Http, RequestOptions, Headers} from "@angular/http";
import {Observable} from "rxjs";

@Injectable()
export class RestService {

  constructor(private http: Http) { }

  ipHost: string = "localhost"; //Change to 192.168.99.101 when using Docker
  urlNewUser: string = 'http://'+this.ipHost+':8000/auth/login'; //change to 8005 when using Docker

  postSignUp(body : string){
    let headers = new Headers({'Content-Type': 'application/json'});
    let requestOptions = new RequestOptions({headers: headers});
    return this.http.post( this.urlNewUser,body,requestOptions)
      .catch(this.handleError);
  }

  private handleError(error: any){
    let errMsg = (error.message) ? error.message : error.status ? `${error.status} - ${error.statusText}}` : 'Server Error';
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}


