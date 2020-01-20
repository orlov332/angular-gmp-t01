import * as fromAuth from './auth.reducer';
import {selectAuthState} from './auth.selectors';

describe('Auth Selectors', () => {
  it('should select the feature store', () => {
    const result = selectAuthState({
      [fromAuth.authFeatureKey]: {}
    });

    expect(result).toEqual({});
  });
});
