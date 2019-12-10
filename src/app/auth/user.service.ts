import {Injectable} from '@angular/core';
import {User} from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor() {
  }

  findByLogin(email: string, password: string): User {
    return new User(email, 'Some', 'User', 999);
  }

}
