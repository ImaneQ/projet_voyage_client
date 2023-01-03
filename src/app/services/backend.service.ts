import { BehaviorSubject, Observable, Subject, observable } from 'rxjs';
import { EventEmitter, Injectable, Output } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Token } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  urlUser = "http://localhost:5000/user";
  urlRegister = "http://localhost:5000/register";
  urlLogin = "http://localhost:5000/login";
  postDatas!: any;
  constructor(private _http: HttpClient) { }

  postUser(postDatas: any): Observable<any> {

    return this._http.post(this.urlRegister, postDatas);
  }

  postLogin(loginValues: any): Observable<any> {


    console.log(loginValues);

    return this._http.post(this.urlLogin, loginValues);

  }

  static getToken(): string | null {

    return localStorage.getItem('token')

  }


}
