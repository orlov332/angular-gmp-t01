import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {catchError, map, mergeMap} from 'rxjs/operators';
import {of} from 'rxjs';

import * as AuthActions from './auth.actions';
import {AuthService} from '../auth.service';


@Injectable()
export class AuthEffects {

  authLogin$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AuthActions.authLogin),
      mergeMap((action) =>
        this.authService.login(action.login, action.password).pipe(
          map(token => AuthActions.authLoginSuccess(token)),
          catchError(error => of(AuthActions.authLoginFailure({error}))))
      )
    );
  });


  constructor(
    private actions$: Actions,
    private authService: AuthService) {
  }

}
