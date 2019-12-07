import {TestBed} from '@angular/core/testing';

import {UserService} from './user.service';

describe('UserService', () => {
  let service: UserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.get(UserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should login user', () => {
    service.login('asd@some.com', 'qwerty');
    expect(service.authUser).toBeTruthy();
  });

  it('should logout user', () => {
    service.logout();
    expect(service.isAuth).toBeFalsy();
  });

});
