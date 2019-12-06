import {Component, OnInit} from '@angular/core';
import {User} from '../../services/user';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-vc-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss']
})
export class ShellComponent implements OnInit {

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

  ngOnInit(): void {
  }

}
