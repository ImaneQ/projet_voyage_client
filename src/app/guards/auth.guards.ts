import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';

import { BackendService } from '../services/backend.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

//* ng g guard guards/auth

export class AuthGuard implements CanActivate {

    constructor(private _backendService: BackendService,
        private _snackBar: MatSnackBar,

        //! on importe le router pour rediriger le user vers la page login
        //!  s'il na pas le droit d'accéder à cette page
        private _router: Router) { }

    // ! on implémente la méthode canActivate
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {

        // si token existe on a le droit d'accéder
        if (BackendService.getToken()) {
            return true;
            // sinon on redirige le user vers login
        } else {
            this._snackBar.open('Veuillez réessayer', 'Ok')

            this._router.navigateByUrl('/login')
            return false;
        }
    }

}
