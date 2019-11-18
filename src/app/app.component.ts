import {Component} from '@angular/core';
import {UserService} from './services/user.service';
import {User} from './services/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  get authUser(): User {
    return this.userService.authUser;
  }

  get isAuth(): boolean {
    return this.userService.isAuth;
  }

  constructor(private userService: UserService) {
  }

  login(cred: { email: string; password: string }) {
    this.userService.login(cred.email, cred.password);
  }

  logout() {
    this.userService.logout();
  }
}
