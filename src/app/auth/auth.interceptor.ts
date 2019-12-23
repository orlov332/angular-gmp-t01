import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';

import {Observable} from 'rxjs';
import {AuthService} from './auth.service';

/** Pass untouched request through to the next request handler. */
@Injectable({providedIn: 'root'})
export class AuthInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    let authReq = req;

    if (this.authService.token) {
      authReq = req.clone({
        headers: req.headers.set('Authorization', this.authService.token.token)
      });
    }

    return next.handle(authReq);
  }
}
