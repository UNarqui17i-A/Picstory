import { Injectable } from '@angular/core';
import {Http, RequestOptions, Headers} from "@angular/http";
import {Observable} from "rxjs";

@Injectable()
export class RestService {

  constructor(private http: Http) { }

  ipHost: string = "10.203.1.191:8005";
  urlNewUser: string = 'http://'+this.ipHost+'/user';

  putSignUp(body : string){
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

