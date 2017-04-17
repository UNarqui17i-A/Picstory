import { Injectable } from '@angular/core';
import {Http, RequestOptions, Headers, Response} from "@angular/http";
import {Observable} from "rxjs";
import 'rxjs/add/operator/map';

@Injectable()
export class ComService {

  private ipHost: string = '192.168.99.101';
  private urlGetPostUser: string = 'http://'+this.ipHost+':8010/posts?user_id=';
  private urlGetPostsByPage: string = 'http://' + this.ipHost + ':8010/posts?page=';
  private urlPostPublication: string = 'http://'+this.ipHost+':8010/posts';

  constructor(private http: Http) { }


  getPostsUser(idUser: string){
    let headers = new Headers({'Content-Type': 'application/json'});
    let requestOptions = new RequestOptions({headers: headers});
    return this.http.get(this.urlGetPostUser+idUser, requestOptions)
      .map( (res: Response) => res.json() )
      .catch(this.handleError)
  }

  publishPost(body: string){
    let headers = new Headers({ 'Content-Type': 'application/json'});
    let requestOptions = new RequestOptions({ headers: headers });
    return this.http.post(this.urlPostPublication, body, requestOptions)
      .catch(this.handleError)
  }

  getPostsByPage(numPage: number){
    let headers = new Headers({'Content-Type': 'application/json'});
    let requestOptions = new RequestOptions({headers: headers});
    return this.http.get(this.urlGetPostsByPage+numPage, requestOptions)
      .map( (res: Response) => res.json() )
      .catch(this.handleError)
  }

  private handleError( error: any ) {
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }
}
