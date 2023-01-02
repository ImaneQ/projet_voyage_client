import { AuthInterceptor } from './auth.interceptor';
import { HTTP_INTERCEPTORS } from "@angular/common/http"

// fichier pour indiquer à Angular qu'on va provide un interceptor
// multi laisse l'app utiliser d'autres interceptors
export const httpInterceptorProviders = [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}
]
