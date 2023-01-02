import { BehaviorSubject, Observable, Subject } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  // pour envoyer/recevoir des données
  currentUser = new BehaviorSubject<any>([{}])
  // private currentUser =  BehaviorSubject<Authenticate | null>(null);
  //
  urlUser = "http://localhost:5000/user"

  constructor(private _http: HttpClient) { }


  getCurrentUser(): Observable<any> {
    return this.currentUser.asObservable()
  }


  setCurrentUser(user: any) {
    this.currentUser.next(user)
  }

  getUserLogged(): Observable<any> {
    return this._http.get(this.urlUser);
  }
}
