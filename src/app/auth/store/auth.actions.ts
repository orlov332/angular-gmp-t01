import {createAction, props} from '@ngrx/store';
import {UserToken} from '../user-token';
import {User} from '../user';

export const authLogin = createAction(
  '[Auth] Login',
  props<{ login: string, password: string }>()
);

export const authLogout = createAction(
  '[Auth] Logout'
);

export const authLoginSuccess = createAction(
  '[Auth] Login Success',
  props<{ token: UserToken, user: User }>()
);

export const authLoginFailure = createAction(
  '[Auth] Login Failure',
  props<{ error: any }>()
);

