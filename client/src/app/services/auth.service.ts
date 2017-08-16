import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs';

@Injectable()
export class AuthService {

  

  constructor(private _http: Http) {
  }

  loginfn(user) {
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let options = new RequestOptions({ headers: headers });
      return this._http.post(`http://localhost:3000/getUser` ,JSON.stringify(user) ,options) 
            .map(user => user)
            .catch(error => Observable.throw(error));
  }


  savefn(data) {
    console.log("from authservice " ,data);
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let options = new RequestOptions({ headers: headers });
      return this._http.post(`http://localhost:3000/addUser`,JSON.stringify(data), options)
            .map(data => data)
            .catch(error => Observable.throw(error));
  }

}
