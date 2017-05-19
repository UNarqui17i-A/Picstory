import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs';

@Injectable()
export class RestService {

  /* Host data */
  host: string = 'http://userms1:8005/';
  // host: string = 'http://192.168.99.101:8005/';

  constructor(private http: Http) { }

  get(url: string, params: any) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let requestOptions = new RequestOptions({ headers: headers });
    let data = JSON.stringify(params);

    // return this.http.get(this.host + url, data, requestOptions)
      // .catch(this.handleError);
  }

  post(url: string, body: any) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let requestOptions = new RequestOptions({ headers: headers });
    let data = JSON.stringify(body);

    return this.http.post(this.host + url, data, requestOptions)
      .catch(this.handleError);
  }

  put(url: string, body: any) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let requestOptions = new RequestOptions({ headers: headers });
    let data = JSON.stringify(body);
    //console.log(url, data);
    return this.http.put(this.host + url, data, requestOptions)
      .catch(this.handleError);
  }

  private handleError(error: any) {
    return Observable.throw(error);
  }

}
