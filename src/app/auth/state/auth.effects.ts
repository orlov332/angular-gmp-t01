import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {catchError, concatMap, map} from 'rxjs/operators';
import {EMPTY, of} from 'rxjs';

import * as AuthActions from './auth.actions';


@Injectable()
export class AuthEffects {

  loadAuths$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AuthActions.authLogin),
      concatMap(() =>
        /** An EMPTY observable only emits completion. Replace with your own observable API request */
        EMPTY.pipe(
          map(data => AuthActions.authLoginSuccess({token: data})),
          catchError(error => of(AuthActions.authLoginFailure({error}))))
      )
    );
  });


  constructor(private actions$: Actions) {
  }

}
