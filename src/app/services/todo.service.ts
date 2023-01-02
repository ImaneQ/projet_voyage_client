import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TodoModel } from './../models/todo.model';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  urlList = "http://localhost:5000/list"
  urlTodo = "http://localhost:5000/detail";

  todos!: TodoModel[];

  constructor(private _http: HttpClient) { }


  // routerList.route('/list/:id')

  // .get(readOneList)

  // .put(updateL)

  // .delete(deleteL)

  createList(listValues: any): Observable<any> {
    return this._http.post(this.urlList, listValues)
  }

  readOneList(id: any): Observable<any> {
    return this._http.get(`${this.urlList}/${id}`)
  }

  readAllLists(id: any): Observable<any> {
    return this._http.get(`${this.urlList}/${id}`)
  }

  updateList(id: any, list_title: any): Observable<any> {
    return this._http.put(`${this.urlList}/${id}`, { "list_title": list_title })
  }

  deleteList(id: any): Observable<any> {
    return this._http.delete(`${this.urlList}/${id}`)
  }
  // deleteAll(id: any): Observable<any> {
  //   return this._http.delete(`${this.urlList}/${id}`)
  // }

}
