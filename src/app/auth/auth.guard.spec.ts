import {inject, TestBed} from '@angular/core/testing';

import {AuthGuard} from './auth.guard';
import {Router} from '@angular/router';

describe('AuthGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthGuard, {provide: Router, useValue: null}]
    });
  });

  it('should ...', inject([AuthGuard], (guard: AuthGuard) => {
    expect(guard).toBeTruthy();
  }));
});
