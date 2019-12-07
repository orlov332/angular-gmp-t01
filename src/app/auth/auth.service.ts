import {Injectable} from '@angular/core';
import {UserService} from './user.service';
import {User} from './user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userInfo: User;

  constructor(private userService: UserService) {
  }

  isLoggedIn = false;

  // store the URL so we can redirect after logging in
  redirectUrl: string;

  login(userEmail: string, password: string): boolean {
    this.userInfo = this.userService.findByLogin(userEmail, password);
    return this.isLoggedIn = true;
  }

  logout(): void {
    this.isLoggedIn = false;
    this.userInfo = undefined;
  }
}
