import {Injectable} from '@angular/core';
import {User} from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  // tslint:disable-next-line:variable-name
  private _authUser: User;

  get authUser(): User {
    return this._authUser;
  }

  get isAuth(): boolean {
    return !!this._authUser;
  }

  constructor() {
  }

  login(email: string, password: string) {
    this._authUser = new User(email, 'Some', 'User', 999);
  }

  logout() {
    this._authUser = null;
  }

}
