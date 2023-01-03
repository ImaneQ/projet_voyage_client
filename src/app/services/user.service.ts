import { BehaviorSubject, Observable, Subject } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  // pour envoyer/recevoir des données
  currentUser = new BehaviorSubject<any>([{}])
  urlUser = "http://localhost:5000/user"

  constructor(private _http: HttpClient) { }

  //! Un Observable est un objet qui émet des valeurs au cours du temps
  getCurrentUser(): Observable<any> {
    return this.currentUser.asObservable()
  }

  // ! On utilise .NEXT(données à envoyer) pour envoyer un flux de données
  //! et pour souscrire au flux de données via le component on utilise
  //*  BehaviourSubj => va avoir directement une valeure par défaut contrairement à Subject

  setCurrentUser(user: any) {
    this.currentUser.next(user)
  }

  //  requete http pour get le user
  getUserLogged(): Observable<any> {
    return this._http.get(this.urlUser);
  }
}
