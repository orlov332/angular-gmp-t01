import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {catchError, map, mergeMap, tap} from 'rxjs/operators';
import {of} from 'rxjs';

import * as AuthActions from './auth.actions';
import {AuthService} from '../auth.service';
import {Router} from '@angular/router';


@Injectable()
export class AuthEffects {

  authLogin$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AuthActions.authLogin),
      mergeMap((action) =>
        this.authService.login(action.login, action.password)
          .pipe(
            mergeMap(token =>
              this.authService.getUserInfo(token)
                .pipe(
                  map(user =>
                    AuthActions.authLoginSuccess({token, user}))),
            ),
          ),
      ),
      catchError(error => of(AuthActions.authLoginFailure({error})))
    );

  });

  authLogout$ = createEffect(() => {

    return this.actions$.pipe(
      ofType(AuthActions.authLogout),
      tap(() => this.router.navigateByUrl('/login'))
    );

  });

  authLoginSuccess$ = createEffect(() => {

    return this.actions$.pipe(
      ofType(AuthActions.authLoginSuccess),
      tap(() => this.router.navigateByUrl('/'))
    );

  });

  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private router: Router) {
  }

}
