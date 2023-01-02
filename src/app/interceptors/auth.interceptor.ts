import {
  HttpEvent,
  HttpHandler,
  HttpHeaders,
  HttpInterceptor,
  HttpRequest
} from '@angular/common/http';

import { BackendService } from './../services/backend.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    // console.log('request', request);

    const headers = request.headers.set('Authorization', `Bearer ${BackendService.getToken()}`);
    // console.log('headers', headers);

    const modifiedReq = request.clone({ headers });
    // console.log('modifiedReq', modifiedReq);

    return next.handle(modifiedReq);



  }
}
