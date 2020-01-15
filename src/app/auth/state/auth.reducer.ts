import {Action, createReducer, on} from '@ngrx/store';
import * as AuthActions from './auth.actions';
import {UserToken} from '../user-token';
import {User} from '../user';

export const authFeatureKey = 'auth';

export interface AuthState {
  token: UserToken;
  user: User;
}

export const initialState: AuthState = {
  token: null,
  user: null
};

const authReducer = createReducer(
  initialState,

  on(AuthActions.authLogin, state => state),
  on(AuthActions.authLogout, () => initialState),
  on(AuthActions.authLoginSuccess, (state, action) => ({
    ...state,
    token: action.token,
    user: action.user,
    isLoggedIn: true
  })),
  on(AuthActions.authLoginFailure, (state, action) => {
    console.error(action.error);
    return initialState;
  }),
);

export function reducer(state: AuthState | undefined, action: Action) {
  return authReducer(state, action);
}
