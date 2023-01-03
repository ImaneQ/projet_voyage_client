// ! class qui implémente l'interface httpInterceptor et qui comporte le décorateur @Injectable()

import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest
} from '@angular/common/http';

import { BackendService } from './../services/backend.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor() { }

  // méthode 'intercept' appelée pour chaque requête
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    // on créée des headers (informations qui permettent de structurer les échanges client/server),
    // 'Authorization' => nom du header qu'on veut rajouter
    const headers = request.headers.set('Authorization', `Bearer ${BackendService.getToken()}`);

    // on clône la requête précédente
    const modifiedReq = request.clone({ headers });

    // next.handle => permet à la requête de continuer son chemin
    return next.handle(modifiedReq);

  }
}
