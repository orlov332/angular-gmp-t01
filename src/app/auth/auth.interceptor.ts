import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';

import {Observable, of} from 'rxjs';
import {select, Store} from '@ngrx/store';
import {selectAuthToken} from './state/auth.selectors';
import {first, mergeMap} from 'rxjs/operators';

/** Pass untouched request through to the next request handler. */
@Injectable({providedIn: 'root'})
export class AuthInterceptor implements HttpInterceptor {

  constructor(private store$: Store<any>) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return this.addToken(request).pipe(
      first(),
      mergeMap((requestWithToken: HttpRequest<any>) => next.handle(requestWithToken))
    );
  }

  private addToken(request: HttpRequest<any>): Observable<HttpRequest<any>> {
    return this.store$.pipe(
      select(selectAuthToken),
      first(),
      mergeMap((token) => {
        if (token) {
          request = request.clone({
            headers: request.headers.set('Authorization', token.token),
            withCredentials: true
          });
        } else {
          console.warn(`Invalid token!!! Cannot use token "${token}".`);
        }
        return of(request);
      })
    );
  }
}
