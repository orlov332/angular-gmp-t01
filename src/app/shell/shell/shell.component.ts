import {Component, OnInit} from '@angular/core';
import {User} from '../../auth/user';
import {AuthService} from '../../auth/auth.service';

@Component({
  selector: 'app-vc-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss']
})
export class ShellComponent implements OnInit {

  get authUser(): User {
    return this.authService.userInfo;
  }

  get isAuth(): boolean {
    return this.authService.isLoggedIn;
  }

  constructor(private authService: AuthService) {
  }

  login(cred: { email: string; password: string }) {
    this.authService.login(cred.email, cred.password);
  }

  logout() {
    this.authService.logout();
  }

  ngOnInit(): void {
  }

}
