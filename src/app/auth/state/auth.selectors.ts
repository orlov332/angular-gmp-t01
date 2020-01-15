import {createFeatureSelector, createSelector} from '@ngrx/store';
import * as fromAuth from './auth.reducer';

export const selectAuthState = createFeatureSelector<any, fromAuth.AuthState>(
  fromAuth.authFeatureKey
);

export const selectAuthToken = createSelector(
  selectAuthState,
  (state) => state.token
);

export const selectAuthUser = createSelector(
  selectAuthState,
  (state) => state.user
);

export const selectAuthIsLoggedIn = createSelector(
  selectAuthState,
  (state) => !!state.token
);
