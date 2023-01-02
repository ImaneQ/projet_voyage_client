import { Observable, observable } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoItemService {




  urlDetail = "http://localhost:5000/detail";
  urlDetails = "http://localhost:5000/details";

  constructor(private _http: HttpClient) { }

  postDetail(detailValues: any, id: number): Observable<any> {
    return this._http.post(`${this.urlDetail}/${id}`, { "description": detailValues })
  }

  getAllDetails(id: any): Observable<any> {
    return this._http.get(`${this.urlDetails}/${id}`)
  }

  getOneDetail(id: any): Observable<any> {
    return this._http.get(`${this.urlDetail}/${id}`)
  }

  updateDetail(id: any, description: any): Observable<any> {
    return this._http.put(`${this.urlDetail}/${id}`, { "description": description })
  }

  deleteDetail(id: any): Observable<any> {
    return this._http.delete(`${this.urlDetail}/${id}`)
  }

  deleteAllDetails(id: any): Observable<any> {
    return this._http.delete(`${this.urlDetails}/${id}`)
  }
}
