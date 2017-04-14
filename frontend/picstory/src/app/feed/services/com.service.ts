import { Injectable } from '@angular/core';
import {Http, RequestOptions, Headers} from "@angular/http";
import {Observable} from "rxjs";

@Injectable()
export class ComService {

  ipHost: string = '192.168.99.101';
  urlPostUser = 'http://'+this.ipHost+':8010/posts';


  constructor(private http: Http) { }


  getPostsUser(idUser: string){
    let headers = new Headers({'Content-Type': 'application/json'});
    let requestOptions = new RequestOptions({headers: headers});
    return this.http.get(this.urlPostUser+'?user_id='+idUser, requestOptions)
      .catch(this.handleError);
  }

  private handleError( error: any ) {
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }
}
