import {Injectable} from '@angular/core';
import {User} from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  isAuth = false;

  constructor() {
  }

  login(email: string, password: string) {
  }

  logout() {
  }

  getUserInfo(): User {
    return null;
  }

}
